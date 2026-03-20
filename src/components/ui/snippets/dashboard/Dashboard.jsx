import React, { useState } from "react";

export default function Dashboard({ preview }) {

  const [users, setUsers] = useState([
    { id: 1, name: "Juan Pérez", email: "juan@mail.com", role: "Admin" },
    { id: 2, name: "Ana López", email: "ana@mail.com", role: "User" },
    { id: 3, name: "Carlos Ruiz", email: "carlos@mail.com", role: "Admin" },
  ]);

  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // 🔹 FILTRO
  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔹 DELETE
  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">

      {/* SIDEBAR */}
      <aside className={`bg-slate-800 p-5 transition-all ${sidebarOpen ? "w-64" : "w-16"}`}>
        <h2 className="font-bold mb-6 text-lg">Dashboard</h2>

        <nav className="flex flex-col gap-3 text-sm">
          <button className="hover:bg-slate-700 p-2 rounded">Inicio</button>
          <button className="hover:bg-slate-700 p-2 rounded">Usuarios</button>
          <button className="hover:bg-slate-700 p-2 rounded">Reportes</button>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-slate-700 px-3 py-2 rounded"
          >
            ☰
          </button>

          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded bg-slate-800 outline-none"
          />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-slate-800 p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Usuarios</p>
            <h3 className="text-2xl font-bold">{users.length}</h3>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Admins</p>
            <h3 className="text-2xl font-bold">
              {users.filter(u => u.role === "Admin").length}
            </h3>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Activos</p>
            <h3 className="text-2xl font-bold">{users.length}</h3>
          </div>

        </div>

        {/* TABLE */}
        <div className="bg-slate-800 rounded-xl overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-slate-700 text-gray-300">
              <tr>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Rol</th>
                <th className="p-3 text-right">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700">

                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>

                    <td className="p-3">
                      <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                        {user.role}
                      </span>
                    </td>

                    <td className="p-3 text-right">
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-600 px-3 py-1 rounded text-xs hover:bg-red-500"
                      >
                        Eliminar
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-5 text-gray-400">
                    No hay resultados
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}