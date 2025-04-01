import PropTypes from "prop-types";

export default function UserForm({
  fullName,
  phoneNumber,
  emailAddress,
  membershipStartDate,
  nextPaymentDate,
  paymentStatus,
  setFullName,
  setPhoneNumber,
  setEmailAddress,
  setMembershipStartDate,
  setNextPaymentDate,
  setPaymentStatus,
}) {
  // Simple validation functions
  const isFullNameValid = (value) => {
    const words = value.trim().split(/\s+/);
    return (
      value.length >= 3 &&
      words.length >= 2 &&
      words.every((word) => word.length >= 2)
    );
  }; // At least 2 words and each word has at least 2 characters
  const isPhoneNumberValid = (value) => /^[0-9]*$/.test(value); // Only numbers
  const isEmailValid = (value) => /\S+@\S+\.\S+/.test(value); // Simple email regex

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name:
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        {!isFullNameValid(fullName) && fullName !== "" && (
          <span className="text-red-500 text-xs">
            Full Name must be at least 2 characters and at least 2 words.
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number:
        </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => {
            if (isPhoneNumberValid(e.target.value) || e.target.value === "") {
              setPhoneNumber(e.target.value);
            }
          }}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        {!isPhoneNumberValid(phoneNumber) && phoneNumber !== "" && (
          <span className="text-red-500 text-xs">
            Phone number must be numeric.
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address:
        </label>
        <input
          type="email"
          value={emailAddress}
          onChange={(e) => {
            setEmailAddress(e.target.value);
          }}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        {!isEmailValid(emailAddress) && emailAddress !== "" && (
          <span className="text-red-500 text-xs">
            Please enter a valid email.
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Membership Start Date:
        </label>
        <input
          type="date"
          value={membershipStartDate}
          onChange={(e) => setMembershipStartDate(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Next Payment Date:
        </label>
        <input
          type="date"
          value={nextPaymentDate}
          onChange={(e) => setNextPaymentDate(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Payment Status:
        </label>
        <select
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
}

// PropTypes validation for the UserForm component
UserForm.propTypes = {
  fullName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  membershipStartDate: PropTypes.string.isRequired,
  nextPaymentDate: PropTypes.string.isRequired,
  paymentStatus: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setEmailAddress: PropTypes.func.isRequired,
  setMembershipStartDate: PropTypes.func.isRequired,
  setNextPaymentDate: PropTypes.func.isRequired,
  setPaymentStatus: PropTypes.func.isRequired,
};