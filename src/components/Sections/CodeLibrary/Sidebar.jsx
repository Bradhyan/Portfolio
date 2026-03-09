export default function Sidebar({ snippets, selected, setSelected }) {

return (

<nav className="p-4">

{snippets.map((item) => (

<button
key={item.id}
onClick={() => setSelected(item)}
className={`block w-full text-left p-3 ${
selected.id === item.id ? "bg-blue-600 text-white" : ""
}`}
>

{item.title}

</button>

))}

</nav>

);
}