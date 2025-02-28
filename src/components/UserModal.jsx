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
      onUpdate({ id: editingItem.id, name, role, is_validated: isValidated });
    }
  };

  if (!visible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{creatingUser ? "Create New User" : "Edit User"}</h2>
        <UserForm
          name={name}
          role={role}
          isValidated={isValidated}
          setName={setName}
          setRole={setRole}
          setIsValidated={setIsValidated}
        />
        <div className="modal-actions">
          <button onClick={handleSubmit}>
            {creatingUser ? "Create" : "Save"}
          </button>
          <button onClick={onCancel}>Cancel</button>
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