import { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";
import { useUsers } from "./hooks/useUsers";
import ConfirmationModal from "./components/common/ConfirmationModal";
import SuccessMessage from "./components/common/SuccessMessage";
import Header from "./components/common/Header";

export default function App() {
  const { data, fetchData, createUser, updateUser, deleteUser } = useUsers();

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

  // Show modal for creating or editing a user
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

  // Close modal without saving
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingItem(null);
  };

  // Show delete confirmation modal
  const handleDelete = async (id) => {
    setIsDeleteConfirmationVisible(true);
    setDeletingItem(id);
  };

  // Confirm deletion of user
  const confirmDelete = async () => {
    if (deletingItem) {
      await deleteUser(deletingItem);
      setSuccessMessage("Member deleted successfully");
    }
    setIsDeleteConfirmationVisible(false);
    setDeletingItem(null);
  };

  // Cancel deletion
  const cancelDelete = () => {
    setIsDeleteConfirmationVisible(false);
    setDeletingItem(null);
  };

  // Success message for updating user
  const handleUpdateSuccess = () => {
    setSuccessMessage("Member updated successfully");
  };

  // Success message for creating user
  const handleCreateSuccess = () => {
    setSuccessMessage("Member created successfully");
  };

  return (
    <div>
      <Header onCreateClick={() => handleShowModal(null)} />

      {/* Table displaying user data */}
      <UserTable data={data} onEdit={handleShowModal} onDelete={handleDelete} />

      {/* Modal for creating or editing user */}
      <UserModal
        visible={isModalVisible}
        creatingUser={creatingUser}
        onCreate={(user) => {
          createUser(user);
          handleCreateSuccess(); // Success message for creation
        }}
        onUpdate={updateUser}
        onCancel={handleCancel}
        editingItem={editingItem}
        onSuccess={creatingUser ? handleCreateSuccess : handleUpdateSuccess} // Use success handler based on creatingUser
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