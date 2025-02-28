import PropTypes from "prop-types";
import UserActions from "./UserActions";

export default function UserTable({ data, onEdit, onDelete }) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Is Validated",
      dataIndex: "is_validated",
      key: "is_validated",
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
    <table className="table-auto w-full bg-white shadow-md rounded-lg border border-gray-200">
      <thead className="bg-gray-200">
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className="px-4 py-2 text-left font-semibold text-gray-700"
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col.key} className="border-t px-4 py-2">
                {col.render ? col.render(user) : user[col.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// PropTypes validation for the UserTable component
UserTable.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};