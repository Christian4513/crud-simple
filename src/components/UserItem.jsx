function UserItem({
    user,
    editId,
    editName,
    editEmail,
    setEditId,
    setEditName,
    setEditEmail,
    onSaveEdit,
    onDelete
}) {
    const startEdit = () => {
        setEditId(user.id);
        setEditName(user.name);
        setEditEmail(user.email);
    };

    return (
        <li data-testid={`user-item-${user.id}`} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-100 p-4 rounded shadow">
            {editId === user.id ? (

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="px-2 py-1 border rounded"
                    />
                    <input
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="px-2 py-1 border rounded"
                    />
                </div>
            ) : (
                <div className="flex flex-col sm:flex-row gap-2 flex-1">
                    <span className="text-lg text-gray-800 font-medium">{user.name}</span>
                    <span className="text-gray-600">{user.email}</span>
                </div>
            )}

            <div className="mt-3 sm:mt-0 flex gap-2">
                {editId === user.id ? (
                    <button
                        onClick={() => onSaveEdit(user.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500"
                    >
                        Guardar
                    </button>
                ) : (
                    <>
                        <button
                            onClick={startEdit}
                            className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-500"
                        >
                            Editar
                        </button>
                        <button
                            onClick={() => onDelete(user.id)}
                            className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-500"
                        >
                            Eliminar
                        </button>
                    </>
                )}

            </div>

        </li>

    );
}

export default UserItem;
