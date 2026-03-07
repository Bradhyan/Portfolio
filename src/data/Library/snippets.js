export const snippets = [
  {
    id: "btn-01",
    title: "Neumorphic Button",
    category: "Buttons",
    code: `<button className="px-6 py-2 bg-gray-200 rounded-lg shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] active:shadow-inner transition-all">
  Click Me
</button>`,
    language: "jsx"
  },
  {
    id: "card-01",
    title: "Glassmorphism Card",
    category: "Layout",
    code: `<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl">
  <h3 className="text-white font-bold">Card Title</h3>
  <p className="text-white/70">Contenido con efecto cristal.</p>
</div>`,
    language: "jsx"
  },

  {
    id: 'glass-card', // Un ID único
    title: 'Glassmorphism Card', // El nombre que saldrá en el botón
    category: 'LAYOUT',
    language: 'jsx',
    code: `const GlassCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
      <h2 className="text-white font-bold">Glass Card</h2>
      <p className="text-white/70">Este es un efecto cristalino.</p>
    </div>
  );
};`
  }
];