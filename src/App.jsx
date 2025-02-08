import UserModal from "./components/UserModal";
import UserTable from "./components/UserTable";

export default function App() {
  return (
    <div>
      <button type="button" className="btn-primary">
        Create New User
      </button>

      <UserTable />

      <UserModal />
    </div>
  );
}