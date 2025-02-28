import PropTypes from "prop-types";

export default function UserActions({ record, onEdit, onDelete }) {
  return (
    <div className="flex space-x-2">
      <button
        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
        onClick={() => onEdit(record)}
      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
        onClick={() => onDelete(record.id)}
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