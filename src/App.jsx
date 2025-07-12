import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const addUser = () => {
    if (name.trim() && email.trim()) {
      setUsers([...users, { id: Date.now(), name, email }]);
      setName("");
      setEmail("");
    }
  };

  const saveEdit = (id) => {
    setUsers(users.map((u) =>
      u.id === id ? { ...u, name: editName, email: editEmail } : u
    ));
    setEditId(null);
    setEditName("");
    setEditEmail("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-600 to-cyan-400">
      <div className="bg-white shadow-2xl rounded-xl p-12 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Usuarios</h1>

        <UserForm
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          onAddUser={addUser}
        />

        <UserList
          users={users}
          editId={editId}
          editName={editName}
          editEmail={editEmail}
          setEditId={setEditId}
          setEditName={setEditName}
          setEditEmail={setEditEmail}
          onSaveEdit={saveEdit}
          onDelete={deleteUser}
        />
      </div>
    </div>
  );
}

export default App;
