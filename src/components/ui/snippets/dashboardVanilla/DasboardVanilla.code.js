export const DashboardVanilla = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard Pro+</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;}

body{
  font-family:Arial,sans-serif;
  background:#020617;
  color:white;
}

/* ===== LAYOUT ===== */
.container{
  display:grid;
  grid-template-columns:250px 1fr;
  min-height:100vh;
}

/* ===== SIDEBAR ===== */
.sidebar{
  background:#020617;
  border-right:1px solid #1e293b;
  padding:20px;
  transition:0.3s;
}

.sidebar.hidden{
  transform:translateX(-100%);
  position:absolute;
  z-index:10;
  width:200px;
  height:100%;
}

.sidebar h2{
  margin-bottom:20px;
}

.sidebar button{
  width:100%;
  padding:10px;
  margin-bottom:10px;
  background:none;
  border:none;
  color:#94a3b8;
  text-align:left;
  border-radius:8px;
  cursor:pointer;
}

.sidebar button:hover{
  background:#1e293b;
  color:white;
}

/* ===== MAIN ===== */
.main{
  padding:20px;
}

/* HEADER */
.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

.menu-btn{
  background:#1e293b;
  border:none;
  color:white;
  padding:8px 12px;
  border-radius:8px;
  cursor:pointer;
}

/* FORM */
.form{
  display:flex;
  gap:10px;
  margin-bottom:20px;
}

.form input{
  padding:8px;
  border-radius:8px;
  border:none;
  background:#1e293b;
  color:white;
}

.form button{
  padding:8px 12px;
  border:none;
  border-radius:8px;
  background:#3b82f6;
  color:white;
  cursor:pointer;
}

/* TABLE */
.table-container{
  background:#0f172a;
  border-radius:15px;
  overflow:hidden;
}

table{
  width:100%;
  border-collapse:collapse;
}

th,td{
  padding:12px;
}

thead{
  background:#1e293b;
}

tbody tr{
  border-bottom:1px solid #1e293b;
}

tbody tr:hover{
  background:#1e293b;
}

.delete{
  background:#ef4444;
  border:none;
  padding:5px 10px;
  border-radius:6px;
  color:white;
  cursor:pointer;
}

/* ===== RESPONSIVE ===== */
@media(max-width:800px){
  .container{
    grid-template-columns:1fr;
  }
}
</style>

</head>
<body>

<div class="container">

<!-- SIDEBAR -->
<div class="sidebar" id="sidebar">
  <h2>Dashboard</h2>
  <button>Inicio</button>
  <button>Usuarios</button>
  <button>Reportes</button>
</div>

<!-- MAIN -->
<div class="main">

<div class="header">
  <button class="menu-btn" id="menuBtn">☰</button>
  <h1>Panel</h1>
</div>

<!-- FORM -->
<div class="form">
  <input type="text" id="name" placeholder="Nombre">
  <input type="text" id="email" placeholder="Email">
  <button id="addUser">Agregar</button>
</div>

<!-- TABLE -->
<div class="table-container">
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Email</th>
<th>Acción</th>
</tr>
</thead>
<tbody id="tableBody"></tbody>
</table>
</div>

</div>

</div>

<script>

// ===== LOCAL STORAGE =====
let data=JSON.parse(localStorage.getItem("users"))||[];

// ===== RENDER =====
function render(){
const tbody=document.getElementById("tableBody");
tbody.innerHTML="";

data.forEach((user,index)=>{
tbody.innerHTML+=\`
<tr>
<td>\${user.name}</td>
<td>\${user.email}</td>
<td><button class="delete" onclick="removeUser(\${index})">Eliminar</button></td>
</tr>
\`;
});
}

// ===== ADD USER =====
document.getElementById("addUser").onclick=()=>{
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;

if(!name||!email)return alert("Completa los campos");

data.push({name,email});
localStorage.setItem("users",JSON.stringify(data));

render();
};

// ===== REMOVE =====
function removeUser(index){
data.splice(index,1);
localStorage.setItem("users",JSON.stringify(data));
render();
}

// ===== SIDEBAR =====
document.getElementById("menuBtn").onclick=()=>{
document.getElementById("sidebar").classList.toggle("hidden");
};

// ===== INIT =====
render();

</script>

</body>
</html>
`;