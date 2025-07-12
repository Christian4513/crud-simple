import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./api"; // importa tus funciones axios

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");


  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });


  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Refresca la lista
      setName("");
      setEmail("");
    },
  });


  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setEditId(null);
      setEditName("");
      setEditEmail("");
    },
  });


  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const addUser = () => {
    if (name.trim() && email.trim()) {
      createMutation.mutate({ name, email });
    }
  };

  const saveEdit = (id) => {
    updateMutation.mutate({ id, name: editName, email: editEmail });
  };

  const deleteUserById = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <p className="text-center">Cargando usuarios...</p>;
  if (isError) return <p className="text-red-500 text-center">Error al cargar usuarios</p>;

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
          onDelete={deleteUserById}
        />
      </div>
    </div>
  );
}

export default App;
