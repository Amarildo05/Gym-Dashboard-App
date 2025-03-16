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
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number:
        </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address:
        </label>
        <input
          type="text"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
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
        <input
          type="text"
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
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