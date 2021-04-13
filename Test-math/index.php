<!DOCTYPE html>
<html>
 <head>
    <meta charset="UTF=8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="keywords" content="¿Que tan habil eres para las matematicas?">
<meta charset="UTF-8">
<!--link rel="shortcut icon" type="image/x-icon" href="D:\Hijos\Juan\2020\Proyectos programacion/icono.jpg"-->
<link rel="stylesheet" href="estilos.css"> 
<title>Educa Math</title>
</head>
<body>
<h1 id="math">Educa Math</h1>
  <div id="entrada" align="left" class="entrada" >
  <p>Bienvenido a <b>Educa Math</b>, aqui podra conocer como se encuentra en el area de las matematicas</p>
<form action="datos.php" name="formulario" id="acceso" method="post" align="center"  >
 <label for="inicio">Antes de comenzar el test, por favor registre sus datos:</label>
 <br/>
 <br/>
 <div id=error class="error"  align="center" >  </div>
 <label for="nombre">Nombre:</label>
 <input type="text" name="nombre" maxlength="40" id="nombre" class="nombre" placeholder="Ingrese su nombre">
 <br/>
 <label for="grado" >Grado:</label>
 <select class="nombre" id="grado" name="grado" > 
 <option> </option>
 <option >3°</option>
 <option>4°</option>
 <option >5°</option>
 </select>
 <br/>
 <label for="nombre">Colegio:</label>
 <input type="text" name="colegio" maxlength="100" id="colegio" class="nombre" placeholder="Ingrese su colegio">
 <br/>
 <br/>
   <input type="submit" name="go" id="go" class="go" onclick= "return validar()"value="Go!">
</form>
</div>
</body>
<script src="java.js"></script>
</html>