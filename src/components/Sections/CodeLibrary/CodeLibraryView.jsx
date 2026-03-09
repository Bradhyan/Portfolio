"use client";

import { useState } from "react";
import { snippets } from "@/data/Library/snippets";
import Sidebar from "./Sidebar";
import CodePreview from "./CodePreview";

export default function CodeLibraryView() {

const [selected, setSelected] = useState(snippets[0]);

return (

<div className="grid lg:grid-cols-[260px_1fr] min-h-[600px]">

<Sidebar
snippets={snippets}
selected={selected}
setSelected={setSelected}
/>

<CodePreview snippet={selected} />

</div>

);
}