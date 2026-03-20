export const OneTemplateCode = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Grid Layout Responsive</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{
  font-family:Arial,sans-serif;
  background:#f0f0f0;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
}
.container{
  width:90%;
  max-width:900px;
  height:500px;
  border:4px solid black;
  display:grid;
  gap:10px;
  padding:10px;
  background:white;
  grid-template-columns:1fr 2fr;
  grid-template-rows:2fr 1fr;
}
.sidebar{
  grid-column:1/2;
  grid-row:1/2;
  border:4px solid black;
  background:#ddd;
}
.main{
  grid-column:2/3;
  grid-row:1/2;
  border:4px solid black;
  background:#ddd;
}
.footer{
  grid-column:1/3;
  grid-row:2/3;
  border:4px solid black;
  background:#ddd;
}
.box{
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:bold;
  font-size:1.2rem;
}
.active{background:#a0d8ff!important;}
@media (max-width:600px){
  .container{
    height:auto;
    grid-template-columns:1fr;
    grid-template-rows:auto auto auto;
  }
  .sidebar{grid-column:1;grid-row:1;}
  .main{grid-column:1;grid-row:2;}
  .footer{grid-column:1;grid-row:3;}
}
@media (max-width:900px) and (min-width:601px){
  .container{
    height:auto;
    grid-template-columns:1fr;
    grid-template-rows:1fr 2fr 1fr;
  }
  .sidebar{grid-column:1;grid-row:1;}
  .main{grid-column:1;grid-row:2;}
  .footer{grid-column:1;grid-row:3;}
}
</style>
</head>
<body>

<div class="container">
  <div class="sidebar box">Sidebar</div>
  <div class="main box">Main</div>
  <div class="footer box">Footer</div>
</div>

<script>
const boxes=document.querySelectorAll('.box');
boxes.forEach(box=>{
  box.addEventListener('click',()=>{
    boxes.forEach(b=>b.classList.remove('active'));
    box.classList.add('active');
  });
});
</script>

</body>
</html>
`;