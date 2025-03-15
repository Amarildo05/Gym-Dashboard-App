import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import PropTypes from "prop-types";

export default function UserModal({
  visible,
  creatingUser,
  onCreate,
  onUpdate,
  onCancel,
  editingItem,
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [isValidated, setIsValidated] = useState("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setRole(editingItem.role);
      setIsValidated(editingItem.is_validated);
    } else {
      setName("");
      setRole("");
      setIsValidated("");
    }
  }, [editingItem]);

  const handleSubmit = () => {
    if (creatingUser) {
      onCreate({ name, role, is_validated: isValidated });
    } else {
      onUpdate({ _id: editingItem._id, name, role, is_validated: isValidated });
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        !visible && "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-semibold mb-4">
          {creatingUser ? "Create New User" : "Edit User"}
        </h2>

        <UserForm
          name={name}
          role={role}
          isValidated={isValidated}
          setName={setName}
          setRole={setRole}
          setIsValidated={setIsValidated}
        />

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 mr-2"
          >
            {creatingUser ? "Create" : "Save"}
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation for the UserModal component
UserModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  creatingUser: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  editingItem: PropTypes.object,
};

UserModal.defaultProps = {
  editingItem: null, // in case editingItem is not passed
};
