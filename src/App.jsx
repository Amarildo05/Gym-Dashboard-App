import { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";
import { useUsers } from "./hooks/useUsers";

export default function App() {
  const { data, fetchData, createUser, updateUser, deleteUser } = useUsers();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

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

  return (
    <div>
      <button
        type="button"
        className="btn-primary"
        onClick={() => handleShowModal(null)}
      >
        Create New User
      </button>

      <UserTable data={data} onEdit={handleShowModal} onDelete={deleteUser} />

      <UserModal
        visible={isModalVisible}
        creatingUser={creatingUser}
        onCreate={createUser}
        onUpdate={updateUser}
        onCancel={handleCancel}
        editingItem={editingItem}
      />
    </div>
  );
}