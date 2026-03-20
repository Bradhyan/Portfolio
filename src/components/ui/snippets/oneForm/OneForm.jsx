import React, { useState } from "react";

export default function OneForm({ preview }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
  };

  return (
    <div className="w-full flex justify-center items-center p-6 bg-slate-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-slate-800 rounded-2xl p-6 shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-white text-xl font-bold text-center">
          Formulario
        </h2>

        {/* INPUT NAME */}
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* INPUT EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* INPUT PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="p-3 rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* CHECKBOX */}
        <label className="flex items-center gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="w-4 h-4 accent-blue-500"
          />
          Acepto los términos y condiciones
        </label>

        {/* BOTONES */}
        <div className="flex gap-3 mt-2">

          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl font-semibold transition"
          >
            Enviar
          </button>

          <button
            type="button"
            onClick={() =>
              setForm({ name: "", email: "", password: "", terms: false })
            }
            className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 rounded-xl font-semibold transition"
          >
            Limpiar
          </button>

        </div>
      </form>
    </div>
  );
}