<!DOCTYPE html>
<html>
 <head>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta charset="UTF-8">
<link rel="stylesheet" href="estilo.css"> 
<link rel="stylesheet" href="nada.css"> 
</head>
<!--oncontextmenu="return false" onkeydown="return false"-->
<body id="cuerpo"  >
<?php
  $host="localhost";
  $nombre="testmath";
  $user="root";
  $contra="";
$con=mysqli_connect($host,$user,$contra,$nombre);
$name=$_POST["nombre"];
$grado=$_POST["grado"];
$colegio=$_POST["colegio"];
$consulta="INSERT INTO usuarios (nombre,Grado,Colegio) VALUES ('$name','$grado','$colegio')";
$resultados=mysqli_query($con,$consulta);
?>  
<form  action="respuestas.php" name="answer" id="answers" method="post">
  <div id="niveles">
   <div id="intro" align="center"></div>
   <div id="nivel1" >
   <div id="nivel"></div>
   <div id ="problem" ></div>
   <div id="opciones" align="center" class="opciones" ></div>
   <div id="problem2" ></div>
   <div id="opciones2" align="center"> </div>
   <div id="problem3" ></div>
   <div id="opciones3" align="center"> </div>
   <div id="problem4" ></div>
   <div id="opciones4" align="center"> </div>
   <div id="problem5" ></div>
   <div id="opciones5" align="center"> </div>
   <h2 id="puntos"></h2>
   <h2 id="puntos2"></h2>
   <h2 id="puntos3"></h2>
   <h2 id="puntos4"></h2>
   <h2 id="puntos5"></h2>
   <h2 id="puntos6"></h2>
 </div>
 <h2 id="final1"  align="center"></h2>
 <img id="cara" width="300px" class="cara1">
 <img id="cara2" width="300px" class="cara2">
 <div id="nivel2" >
  <div id="intro2" align="center"></div>
  <div id="nivel22"></div>
    <div id ="problem21" ></div>
    <div id="opciones21" align="center" ></div>
    <div id ="problem22" ></div>
    <div id="opciones22" align="center"></div>
    <div id ="problem23" ></div>
    <div id="opciones23" align="center"></div>
    <div id ="problem24" ></div>
    <div id="opciones24" align="center"></div>
    <div id ="problem25" ></div>
    <div id="opciones25" align="center"></div>
  <h2 id="puntos21"> </h2>
  <h2 id="puntos22"> </h2>
  <h2 id="puntos23"> </h2>
  <h2 id="puntos24"> </h2>
  <h2 id="puntos25"> </h2>
  <h2 id="puntos26"> </h2>
 </div>
 <h2 id="final2" align="center"></h2>
<div id="nivel3">
  <div id="intro3" align="center"></div>
  <div id ="nivel33" ></div>
  <div id ="problem31" ></div>
  <div id="opciones31" align="center" ></div>
  <div id ="problem32" ></div>
  <div id="opciones32" align="center" ></div>
  <div id ="problem33" ></div>
  <div id="opciones33" align="center" ></div>
  <div id ="problem34" ></div>
  <div id="opciones34" align="center" ></div>
  <div id ="problem35" ></div>
  <div id="opciones35" align="center" ></div>
  <h2 id="puntos31"> </h2>
  <h2 id="puntos32"> </h2>
  <h2 id="puntos33"> </h2>
  <h2 id="puntos34"> </h2>
  <h2 id="puntos35"> </h2>
  <h2 id="puntos36"> </h2>
 </div>
 <h2 id="final3" align="center"></h2>
<div id="nivel4">
  <div id="intro4" align="center"></div>
  <div id ="nivel44" ></div>
  <div id ="problem41" ></div>
  <div id="opciones41" align="center" ></div>
  <div id ="problem42" ></div>
  <div id="opciones42" align="center" ></div>
  <div id ="problem43" ></div>
  <div id="opciones43" align="center" ></div>
  <div id ="problem44" ></div>
  <div id="opciones44" align="center" ></div>
  <div id ="problem45" ></div>
  <div id="opciones45" align="center" ></div>
  <h2 id="puntos41"> </h2>
  <h2 id="puntos42"> </h2>
  <h2 id="puntos43"> </h2>
  <h2 id="puntos44"> </h2>
  <h2 id="puntos45"> </h2>
 </div>
<h2 id="final4" align="center"></h2>
<div id="nivel5">
  <div id="intro5" align="center"></div>
  <div id ="nivel55" ></div>
  <div id ="problem51" ></div>
  <div id="opciones51" align="center" ></div>
  <div id ="problem52" ></div>
  <div id="opciones52" align="center" ></div>
  <div id ="problem53" ></div>
  <div id="opciones53" align="center" ></div>
  <div id ="problem54" ></div>
  <div id="opciones54" align="center" ></div>
  <div id ="problem55" ></div>
  <div id="opciones55" align="center" ></div>
  <h2 id="puntos51"> </h2>
  <h2 id="puntos52"> </h2>
  <h2 id="puntos53"> </h2>
  <h2 id="puntos54"> </h2>
  <h2 id="puntos55"> </h2>
 </div>
<h2 id="final5" align="center"></h2>
 <!--nivel1-->
  <input type="select" name="r1" id="r1" class="nada">
  <input type="select" name="p1" id="p1" class="nada">
  <input type="select" name="r2" id="r2" class="nada">
  <input type="select" name="p2" id="p2" class="nada">
  <input type="select" name="r3" id="r3" class="nada">
  <input type="select" name="p3" id="p3" class="nada">
  <input type="select" name="r4" id="r4" class="nada">
  <input type="select" name="p4" id="p4" class="nada">
  <input type="select" name="r5" id="r5" class="nada">
  <input type="select" name="p5" id="p5" class="nada">
 <!--nivel2-->
  <input type="select" name="r12" id="r12" class="nada">
  <input type="select" name="p12" id="p12" class="nada">
  <input type="select" name="r22" id="r22" class="nada">
  <input type="select" name="p22" id="p22" class="nada">
  <input type="select" name="r32" id="r32" class="nada">
  <input type="select" name="p32" id="p32" class="nada">
  <input type="select" name="r42" id="r42" class="nada">
  <input type="select" name="p42" id="p42" class="nada">
  <input type="select" name="r52" id="r52" class="nada">
  <input type="select" name="p52" id="p52" class="nada">
 <!--nivel3-->
  <input type="select" name="r13" id="r13" class="nada">
  <input type="select" name="p13" id="p13" class="nada">
  <input type="select" name="r23" id="r23" class="nada">
  <input type="select" name="p23" id="p23" class="nada">
  <input type="select" name="r33" id="r33" class="nada">
  <input type="select" name="p33" id="p33" class="nada">
  <input type="select" name="r43" id="r43" class="nada">
  <input type="select" name="p43" id="p43" class="nada">
  <input type="select" name="r53" id="r53" class="nada">
  <input type="select" name="p53" id="p53" class="nada">
 <!--nivel4-->
  <input type="select" name="r14" id="r14" class="nada">
  <input type="select" name="p14" id="p14" class="nada">
  <input type="select" name="r24" id="r24" class="nada">
  <input type="select" name="p24" id="p24" class="nada">
  <input type="select" name="r34" id="r34" class="nada">
  <input type="select" name="p34" id="p34" class="nada">
  <input type="select" name="r44" id="r44" class="nada">
  <input type="select" name="p44" id="p44" class="nada">
  <input type="select" name="r54" id="r54" class="nada">
  <input type="select" name="p54" id="p54" class="nada"> 
 <!--nivel5-->
   <input type="select" name="r15" id="r15" class="nada">
  <input type="select" name="p15" id="p15" class="nada">
  <input type="select" name="r25" id="r25" class="nada">
  <input type="select" name="p25" id="p25" class="nada">
  <input type="select" name="r35" id="r35" class="nada">
  <input type="select" name="p35" id="p35" class="nada">
  <input type="select" name="r45" id="r45" class="nada">
  <input type="select" name="p45" id="p45" class="nada">
  <input type="select" name="r55" id="r55" class="nada">
  <input type="select" name="p55" id="p55" class="nada"> 
<input type="select" name="nombre" value="<?php echo $name ?>" class="nada">
</form>
</body>
<p id="name"  value="<?php echo $name ?>"><?php echo $name ?></p>
<script src="javas.js"></script>
</html>