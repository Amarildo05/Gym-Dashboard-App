import UserActions from "./UserActions";

export default function UserTable() {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Id</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Role</th>
          <th className="px-4 py-2">Is Validated</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">John Doe</td>
          <td className="border px-4 py-2">Admin</td>
          <td className="border px-4 py-2">Yes</td>
          <td className="border px-4 py-2">
            <UserActions />
          </td>
        </tr>
      </tbody>
    </table>
  );
}