import PropTypes from "prop-types";

export default function Header({ onCreateClick }) {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white shadow-lg h-16 px-12">
      <div className="flex items-center space-x-2">
        <div className="text-3xl font-bold">Gym Members</div>
        <div className="w-11 h-11">
          <img src="/logo.png" alt="User" />
        </div>
      </div>

      <button
        type="button"
        className="px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400 transition duration-300"
        onClick={onCreateClick} // Trigger the passed down function to show the modal
      >
        Create New Member
      </button>
    </div>
  );
}

// PropTypes validation for the Header component
Header.propTypes = {
  onCreateClick: PropTypes.func.isRequired,
};