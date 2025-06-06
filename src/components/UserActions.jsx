import PropTypes from "prop-types";
export default function UserActions({ record, onEdit, onDelete }) {
  return (
    <div className="flex space-x-2">
      <button
        className="px-3 py-1 bg-gray-300 text-gray-900 rounded hover:bg-gray-400 transition duration-300"
        onClick={() => onEdit(record)} // Trigger edit
      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
        onClick={() => onDelete(record._id)} // Trigger delete
      >
        Delete
      </button>
    </div>
  );
}

// PropTypes validation for the UserActions component
UserActions.propTypes = {
  record: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};