export const SecondTemplateCode = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Stacked Layout</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;}

body{
  font-family:Arial,sans-serif;
  background:#e5e7eb;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
}

/* ===== CONTENEDOR ===== */
.container{
  width:95%;
  max-width:900px;
  border:4px solid black;
  padding:10px;
  display:grid;
  gap:12px;
  background:white;

  grid-template-rows:auto auto auto auto auto;
}

/* ===== BARRAS SUPERIOR E INFERIOR ===== */
.topbar,.bottombar{
  height:20px;
  background:black;
}

/* ===== HERO ===== */
.hero{
  border:4px solid black;
  height:180px;
}

/* ===== GRID MEDIO (2 columnas) ===== */
.middle{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
}

.middle .box{
  border:4px solid black;
  height:120px;
}

/* ===== GRID INFERIOR (3 columnas) ===== */
.bottom{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
}

.bottom .box{
  border:4px solid black;
  height:100px;
}

/* ===== RESPONSIVE ===== */
@media(max-width:700px){

  .middle{
    grid-template-columns:1fr;
  }

  .bottom{
    grid-template-columns:1fr;
  }

  .hero{
    height:140px;
  }

}

@media(max-width:400px){
  .hero{height:120px;}
  .middle .box,.bottom .box{height:90px;}
}
</style>

</head>
<body>

<div class="container">

  <div class="topbar"></div>

  <div class="hero"></div>

  <div class="middle">
    <div class="box"></div>
    <div class="box"></div>
  </div>

  <div class="bottom">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>

  <div class="bottombar"></div>

</div>

<script>
// Interacción visual simple
const boxes=document.querySelectorAll('.box');

boxes.forEach(box=>{
  box.addEventListener('click',()=>{
    boxes.forEach(b=>b.style.background='#fff');
    box.style.background='#c7d2fe';
  });
});
</script>

</body>
</html>
`;