import PropTypes from "prop-types";

export default function UserActions({ record, onEdit, onDelete }) {
  return (
    <div>
      <button className="btn-edit" onClick={() => onEdit(record)}>
        Edit
      </button>
      <button className="btn-delete" onClick={() => onDelete(record.id)}>
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