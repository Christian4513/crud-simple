function UserForm({ name, email, setName, setEmail, onAddUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Nombre"
        required
        className="px-3 py-2 border rounded"
      /> 
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Correo"
        required
        className="px-3 py-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600 sm:col-span-2"
      >
        Agregar usuario
      </button>
    </form>
  );
}

export default UserForm;
