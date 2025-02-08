import UserForm from "./UserForm";

export default function UserModal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create New User</h2>
        <UserForm />
        <div className="modal-actions">
          <button>Create</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}