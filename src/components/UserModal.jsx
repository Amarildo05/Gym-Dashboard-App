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
  onSuccess,
}) {
  // State for managing form fields
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [membershipStartDate, setMembershipStartDate] = useState("");
  const [nextPaymentDate, setNextPaymentDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [formError, setFormError] = useState(""); // state for error message (empty fields)

  // Set form data if editing an existing user
  useEffect(() => {
    if (editingItem) {
      setFullName(editingItem.fullName);
      setPhoneNumber(editingItem.phoneNumber);
      setEmailAddress(editingItem.emailAddress);
      setMembershipStartDate(editingItem.membershipStartDate);
      setNextPaymentDate(editingItem.nextPaymentDate);
      setPaymentStatus(editingItem.paymentStatus);
    } else {
      setFullName("");
      setPhoneNumber("");
      setEmailAddress("");
      setMembershipStartDate("");
      setNextPaymentDate("");
      setPaymentStatus("active"); // "active" by default if no other option is chosen
    }
  }, [editingItem]);

  // Submit form based on whether we're creating or updating a user
  const handleSubmit = () => {
    if (
      !fullName ||
      !phoneNumber ||
      !emailAddress ||
      !membershipStartDate ||
      !nextPaymentDate ||
      !paymentStatus
    ) {
      setFormError("All fields are required. Please fill in all fields.");
      // Remove the error message after 3 seconds
      setTimeout(() => {
        setFormError("");
      }, 3000);
      return;
    }

    // If all fields are valid, submit the form
    if (creatingUser) {
      onCreate({
        fullName,
        phoneNumber,
        emailAddress,
        membershipStartDate,
        nextPaymentDate,
        paymentStatus,
      });
      onSuccess(); // Trigger the success message after creating the user
    } else {
      onUpdate({
        _id: editingItem._id,
        fullName,
        phoneNumber,
        emailAddress,
        membershipStartDate,
        nextPaymentDate,
        paymentStatus,
      });
      onSuccess(); // Trigger the success message after updating the user
    }
  };

  if (!visible) return null; // Hide modal if not visible

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        !visible && "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg w-96 p-5">
        <h2 className="text-2xl font-semibold mb-2">
          {creatingUser ? "Create New User" : "Edit User"}
        </h2>

        <UserForm
          fullName={fullName}
          phoneNumber={phoneNumber}
          emailAddress={emailAddress}
          membershipStartDate={membershipStartDate}
          nextPaymentDate={nextPaymentDate}
          paymentStatus={paymentStatus}
          setFullName={setFullName}
          setPhoneNumber={setPhoneNumber}
          setEmailAddress={setEmailAddress}
          setMembershipStartDate={setMembershipStartDate}
          setNextPaymentDate={setNextPaymentDate}
          setPaymentStatus={setPaymentStatus}
        />

        {formError && (
          <div className="text-red-500 p-2 mx-4 text-sm text-center">
            {formError}
          </div>
        )}

        <div className="flex justify-end mt-3">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 mr-2"
          >
            {creatingUser ? "Create" : "Save"}
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
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
  onSuccess: PropTypes.func.isRequired,
};

UserModal.defaultProps = {
  editingItem: null, // in case editingItem is not passed
};