import { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";
import { useUsers } from "./hooks/useUsers";
import ConfirmationModal from "./components/common/ConfirmationModal";
import SuccessMessage from "./components/common/SuccessMessage";
import Header from "./components/common/Header";

export default function App() {
  const { data, loading, fetchData, createUser, updateUser, deleteUser } =
    useUsers();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [deletingItem, setDeletingItem] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleShowModal = (item) => {
    if (item) {
      setEditingItem(item);
      setCreatingUser(false);
    } else {
      setEditingItem(null);
      setCreatingUser(true);
    }
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingItem(null);
  };

  const handleDelete = async (id) => {
    setIsDeleteConfirmationVisible(true);
    setDeletingItem(id);
  };

  const confirmDelete = async () => {
    if (deletingItem) {
      await deleteUser(deletingItem);
      setSuccessMessage("Member deleted successfully");
    }
    setIsDeleteConfirmationVisible(false);
    setDeletingItem(null);
  };

  const cancelDelete = () => {
    setIsDeleteConfirmationVisible(false);
    setDeletingItem(null);
  };

  const handleUpdateSuccess = () => {
    setSuccessMessage("Member updated successfully");
  };

  const handleCreateSuccess = () => {
    setSuccessMessage("Member created successfully");
  };

  return (
    <div>
      <Header onCreateClick={() => handleShowModal(null)} />

      {/* Loader while fetching data */}
      {loading ? (
        <div className="text-center mt-10 text-lg font-medium text-gray-700">
          Loading members...
        </div>
      ) : (
        <UserTable
          data={data}
          onEdit={handleShowModal}
          onDelete={handleDelete}
        />
      )}

      <UserModal
        visible={isModalVisible}
        creatingUser={creatingUser}
        onCreate={(user) => {
          createUser(user);
          handleCreateSuccess();
        }}
        onUpdate={updateUser}
        onCancel={handleCancel}
        editingItem={editingItem}
        onSuccess={creatingUser ? handleCreateSuccess : handleUpdateSuccess}
      />

      <ConfirmationModal
        visible={isDeleteConfirmationVisible}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />

      {successMessage && (
        <SuccessMessage
          message={successMessage}
          onClose={() => setSuccessMessage("")}
        />
      )}
    </div>
  );
}