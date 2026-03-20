export const TableVanilla = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tabla Pro</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;}

body{
  font-family:Arial,sans-serif;
  background:#020617;
  color:white;
  display:flex;
  justify-content:center;
  padding:20px;
}

/* CONTENEDOR */
.container{
  width:100%;
  max-width:1000px;
  background:#0f172a;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 20px 50px rgba(0,0,0,0.5);
}

/* HEADER */
.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px 20px;
  border-bottom:1px solid #1e293b;
}

.header input{
  padding:8px 12px;
  border-radius:10px;
  border:none;
  background:#1e293b;
  color:white;
  outline:none;
}

/* TABLE */
.table-wrapper{
  overflow-x:auto;
}

table{
  width:100%;
  border-collapse:collapse;
}

th,td{
  padding:12px 16px;
  text-align:left;
}

thead{
  background:#1e293b;
  text-transform:uppercase;
  font-size:12px;
}

tbody tr{
  border-bottom:1px solid #1e293b;
  transition:0.3s;
}

tbody tr:hover{
  background:#1e293b;
}

/* ROLE BADGE */
.badge{
  padding:4px 8px;
  border-radius:8px;
  font-size:12px;
  background:#3b82f6;
}

/* BOTONES */
.actions button{
  margin-left:5px;
  padding:5px 10px;
  border:none;
  border-radius:8px;
  cursor:pointer;
}

.edit{
  background:#22c55e;
}

.delete{
  background:#ef4444;
}

/* EMPTY */
.empty{
  text-align:center;
  padding:20px;
  color:#94a3b8;
}

/* RESPONSIVE */
@media(max-width:600px){
  .header{
    flex-direction:column;
    gap:10px;
  }
}
</style>

</head>
<body>

<div class="container">

<div class="header">
  <h2>Usuarios</h2>
  <input type="text" id="search" placeholder="Buscar...">
</div>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Rol</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody id="tableBody"></tbody>
  </table>
</div>

</div>

<script>

// ===== DATA MOCK =====
let data=[
{ id:1,name:"Juan Pérez",email:"juan@mail.com",role:"Admin"},
{ id:2,name:"Ana López",email:"ana@mail.com",role:"User"},
{ id:3,name:"Carlos Ruiz",email:"carlos@mail.com",role:"Editor"},
{ id:4,name:"Laura Díaz",email:"laura@mail.com",role:"User"}
];

// ===== RENDER =====
function renderTable(list){
const tbody=document.getElementById("tableBody");
tbody.innerHTML="";

if(list.length===0){
tbody.innerHTML='<tr><td colspan="4" class="empty">No hay resultados</td></tr>';
return;
}

list.forEach(user=>{
const row=\`
<tr>
<td>\${user.name}</td>
<td>\${user.email}</td>
<td><span class="badge">\${user.role}</span></td>
<td class="actions">
<button class="edit">Editar</button>
<button class="delete">Eliminar</button>
</td>
</tr>
\`;
tbody.innerHTML+=row;
});
}

// ===== BUSCADOR =====
document.getElementById("search").addEventListener("input",e=>{
const value=e.target.value.toLowerCase();
const filtered=data.filter(u=>u.name.toLowerCase().includes(value));
renderTable(filtered);
});

// ===== INIT =====
renderTable(data);

// ===== API (OPCIONAL FUTURO) =====
// fetch("https://api.com/users")
// .then(res=>res.json())
// .then(apiData=>{
//   data=apiData;
//   renderTable(data);
// });

</script>

</body>
</html>
`;