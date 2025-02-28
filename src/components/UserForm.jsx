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
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Is Validated:
        </label>
        <input
          type="text"
          value={isValidated}
          onChange={(e) => setIsValidated(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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