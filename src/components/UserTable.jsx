import PropTypes from "prop-types";
import UserActions from "./UserActions";

export default function UserTable({ data, onEdit, onDelete }) {
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email Address",
      dataIndex: "emailAddress",
      key: "emailAddress",
    },
    {
      title: "Membership Start Date",
      key: "membershipStartDate",
      render: (record) => {
        const date = new Date(record.membershipStartDate);
        return date.toLocaleDateString("en-GB"); // Formats to DD/MM/YYYY
      },
    },
    {
      title: "Next Payment Date",
      key: "nextPaymentDate",
      render: (record) => {
        const date = new Date(record.nextPaymentDate);
        return date.toLocaleDateString("en-GB"); // Formats to DD/MM/YYYY
      },
    },
    {
      title: "Payment Status",
      key: "paymentStatus",
      render: (record) =>
        record.paymentStatus.charAt(0).toUpperCase() +
        record.paymentStatus.slice(1),
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <UserActions record={record} onEdit={onEdit} onDelete={onDelete} />
      ),
    },
  ];

  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full shadow-md rounded-lg">
        <thead className="bg-gray-300">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 text-left font-semibold text-gray-800"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-300">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-gray-900 py-8"
              >
                No members found. Please create a new member to get started.
              </td>
            </tr>
          ) : (
            data.map((user, index) => {
              const userId = user._id?.$oid || user._id;
              const isActive = user.paymentStatus === "active";
              const rowClass = isActive ? "bg-green-400" : "bg-red-400";

              return (
                <tr key={userId || index} className={rowClass}>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="border-t border-b border-gray-500 px-4 py-2"
                    >
                      {col.render ? col.render(user) : user[col.dataIndex]}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

// PropTypes validation for the UserTable component
UserTable.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};