export const HtmlFormCode = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulario SaaS</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;}

body{
  font-family:Inter,Arial,sans-serif;
  background:#020617;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  padding:20px;
  color:white;
}

/* CONTENEDOR */
.form-container{
  width:100%;
  max-width:900px;
  background:rgba(255,255,255,0.03);
  backdrop-filter:blur(20px);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:20px;
  padding:30px;
  box-shadow:0 20px 60px rgba(0,0,0,0.6);
}

/* HEADER */
h2{
  text-align:center;
  margin-bottom:25px;
  font-size:28px;
}

/* GRID */
.form-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
}

/* FULL WIDTH */
.full{
  grid-column:1/3;
}

/* INPUTS */
.input-group{
  display:flex;
  flex-direction:column;
}

.input-group label{
  font-size:13px;
  margin-bottom:5px;
  color:#94a3b8;
}

.input-group input,
.input-group textarea{
  padding:12px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,0.1);
  background:#020617;
  color:white;
  outline:none;
  transition:0.3s;
}

.input-group input:focus,
.input-group textarea:focus{
  border-color:#3b82f6;
  box-shadow:0 0 0 2px rgba(59,130,246,0.3);
}

/* CHECKBOX */
.checkbox{
  display:flex;
  align-items:center;
  gap:8px;
  font-size:14px;
  margin-top:10px;
}

/* BOTONES */
.buttons{
  display:flex;
  gap:10px;
  margin-top:20px;
}

button{
  flex:1;
  padding:12px;
  border:none;
  border-radius:10px;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;
}

.submit{
  background:#3b82f6;
  color:white;
}

.submit:hover{
  background:#2563eb;
}

.reset{
  background:#334155;
  color:white;
}

.reset:hover{
  background:#1e293b;
}

/* ERROR */
.error{
  font-size:12px;
  color:#f87171;
  margin-top:3px;
}

/* SUCCESS */
.success{
  margin-top:15px;
  text-align:center;
  color:#4ade80;
  font-size:14px;
}

/* RESPONSIVE */
@media(max-width:700px){
  .form-grid{
    grid-template-columns:1fr;
  }
  .full{
    grid-column:1;
  }
}
</style>

</head>
<body>

<div class="form-container">

<h2>Contacto Profesional</h2>

<form id="form">

<div class="form-grid">

<div class="input-group">
<label>Nombre</label>
<input type="text" id="name">
<div class="error" id="nameError"></div>
</div>

<div class="input-group">
<label>Apellido</label>
<input type="text" id="lastname">
<div class="error" id="lastnameError"></div>
</div>

<div class="input-group">
<label>Email</label>
<input type="email" id="email">
<div class="error" id="emailError"></div>
</div>

<div class="input-group">
<label>Teléfono</label>
<input type="text" id="phone">
<div class="error" id="phoneError"></div>
</div>

<div class="input-group full">
<label>Mensaje</label>
<textarea id="message"></textarea>
<div class="error" id="messageError"></div>
</div>

<div class="checkbox full">
<input type="checkbox" id="terms">
<label>Acepto los términos y condiciones</label>
</div>

</div>

<div class="buttons">
<button type="submit" class="submit">Enviar</button>
<button type="reset" class="reset">Limpiar</button>
</div>

<div id="success" class="success"></div>

</form>

</div>

<script>
const form=document.getElementById("form");

form.addEventListener("submit",e=>{
e.preventDefault();

let valid=true;
document.querySelectorAll(".error").forEach(el=>el.textContent="");
document.getElementById("success").textContent="";

const name=document.getElementById("name").value.trim();
if(name===""){
document.getElementById("nameError").textContent="Requerido";
valid=false;
}

const lastname=document.getElementById("lastname").value.trim();
if(lastname===""){
document.getElementById("lastnameError").textContent="Requerido";
valid=false;
}

const email=document.getElementById("email").value.trim();
const emailRegex=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
if(!emailRegex.test(email)){
document.getElementById("emailError").textContent="Email inválido";
valid=false;
}

const phone=document.getElementById("phone").value.trim();
if(phone.length<7){
document.getElementById("phoneError").textContent="Número inválido";
valid=false;
}

const message=document.getElementById("message").value.trim();
if(message.length<10){
document.getElementById("messageError").textContent="Muy corto";
valid=false;
}

const terms=document.getElementById("terms").checked;
if(!terms){
alert("Debes aceptar los términos");
valid=false;
}

if(valid){
document.getElementById("success").textContent="Mensaje enviado correctamente 🚀";
form.reset();
}
});
</script>

</body>
</html>
`;