export default function CodePreview({ snippet }) {

const Component = snippet.component;

return (

<div className="p-10">

<Component />

</div>

);
}