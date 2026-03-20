import React, { useState, useEffect } from "react";

export default function TablePro({ preview, data: externalData }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 DATA MOCK (fallback)
  const mockData = [
    { id: 1, name: "Juan Pérez", email: "juan@mail.com", role: "Admin" },
    { id: 2, name: "Ana López", email: "ana@mail.com", role: "User" },
    { id: 3, name: "Carlos Ruiz", email: "carlos@mail.com", role: "Editor" },
    { id: 4, name: "Laura Díaz", email: "laura@mail.com", role: "User" },
  ];

  // 🔹 CARGA DE DATOS (mock o props/API)
  useEffect(() => {
    if (externalData) {
      setData(externalData);
    } else {
      setData(mockData);
    }
  }, [externalData]);

  // 🔹 FILTRO
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full p-6 bg-slate-900 flex justify-center">
      <div className="w-full max-w-5xl bg-slate-800 rounded-2xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="p-4 border-b border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-white text-xl font-bold">Usuarios</h2>

          {/* BUSCADOR */}
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded-lg bg-slate-700 text-white outline-none text-sm"
          />
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">

            <thead className="bg-slate-700 text-gray-200 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Rol</th>
                <th className="px-6 py-3 text-right">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-slate-700 hover:bg-slate-700 transition"
                  >
                    <td className="px-6 py-4 text-white font-medium">
                      {user.name}
                    </td>

                    <td className="px-6 py-4">{user.email}</td>

                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-lg bg-blue-600 text-white">
                        {user.role}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded-lg text-xs">
                        Editar
                      </button>
                      <button className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded-lg text-xs">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-400"
                  >
                    No hay resultados
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}