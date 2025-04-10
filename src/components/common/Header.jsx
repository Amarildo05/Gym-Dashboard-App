import PropTypes from "prop-types";

export default function Header({ onCreateClick }) {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white shadow-lg h-16 px-3 sm:px-10 md:px-12 min-w-full">
      <div className="flex items-center space-x-2">
        <div className="text-base sm:text-xl md:text-3xl font-bold">
          Gym Members
        </div>
        <div className="w-7 h-7 md:w-11 md:h-11">
          <img src="/logo.png" alt="User" />
        </div>
      </div>

      <button
        type="button"
        className="px-2 py-1 md:px-4 md:py-2 text-sm sm:text-base bg-gray-300 text-gray-900 rounded hover:bg-gray-400 transition duration-300"
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