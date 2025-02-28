import PropTypes from "prop-types";

export default function UserForm({
  name,
  role,
  isValidated,
  setName,
  setRole,
  setIsValidated,
}) {
  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input"
        />
      </div>
      <div>
        <label>Is Validated:</label>
        <input
          type="text"
          value={isValidated}
          onChange={(e) => setIsValidated(e.target.value)}
          className="input"
        />
      </div>
    </div>
  );
}

// PropTypes validation for the UserForm component
UserForm.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  isValidated: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setRole: PropTypes.func.isRequired,
  setIsValidated: PropTypes.func.isRequired,
};