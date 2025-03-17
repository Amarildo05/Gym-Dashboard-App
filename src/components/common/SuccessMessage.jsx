import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function SuccessMessage({ message, onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
        onClose();
      }, 3000);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded">
      <p>{message}</p>
    </div>
  );
}

// PropTypes validation for the SuccessMessage component
SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};