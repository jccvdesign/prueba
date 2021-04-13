<?php
  $host="localhost";
  $nombre="testmath";
  $user="root";
  $contra="";
$con=mysqli_connect($host,$user,$contra,$nombre);
$name=$_POST["nombre"];
//Nivel 1//
 $r1=$_POST["r1"];
 $p1=$_POST["p1"];
 $r2=$_POST["r2"];
 $p2=$_POST["p2"];
 $r3=$_POST["r3"];
 $p3=$_POST["p3"];
 $r4=$_POST["r4"];
 $p4=$_POST["p4"];
 $r5=$_POST["r5"];
 $p5=$_POST["p5"];
//Nivel 2//
 $r12=$_POST["r12"];
 $p12=$_POST["p12"];
 $r22=$_POST["r22"];
 $p22=$_POST["p22"];
 $r32=$_POST["r32"];
 $p32=$_POST["p32"];
 $r42=$_POST["r42"];
 $p42=$_POST["p42"];
 $r52=$_POST["r52"];
 $p52=$_POST["p52"];
//Nivel 3//
 $r13=$_POST["r13"];
 $p13=$_POST["p13"];
 $r23=$_POST["r23"];
 $p23=$_POST["p23"];
 $r33=$_POST["r33"];
 $p33=$_POST["p33"];
 $r43=$_POST["r43"];
 $p43=$_POST["p43"];
 $r53=$_POST["r53"];
 $p53=$_POST["p53"];
//Nivel 4//
 $r14=$_POST["r14"];
 $p14=$_POST["p14"];
 $r24=$_POST["r24"];
 $p24=$_POST["p24"];
 $r34=$_POST["r34"];
 $p34=$_POST["p34"];
 $r44=$_POST["r44"];
 $p44=$_POST["p44"];
 $r54=$_POST["r54"];
 $p54=$_POST["p54"];
$consulta="INSERT INTO respuestas (nombre, Pro1Nv1, Nv1pregunta1, Pro2Nv1, Nv1pregunta2, Pro3Nv1, Nv1pregunta3, Pro4Nv1, Nv1pregunta4, Pro5Nv1, Nv1pregunta5, Pro1Nv2, Nv2pregunta1, Pro2Nv2, Nv2pregunta2, Pro3Nv2, Nv2pregunta3, Pro4Nv2, Nv2pregunta4, Pro5Nv2, Nv2pregunta5, Pro1Nv3, Nv3pregunta1, Pro2Nv3, Nv3pregunta2, Pro3Nv3, Nv3pregunta3, Pro4Nv3, Nv3pregunta4, Pro5Nv3, Nv3pregunta5, Pro1Nv4, Nv4pregunta1, Pro2Nv4, Nv4pregunta2, Pro3Nv4, Nv4pregunta3, Pro4Nv4, Nv4pregunta4, Pro5Nv4, Nv4pregunta5) VALUES ('$name','$p1','$r1','$p2','$r2','$p3','$r3','$p4','$r4','$p5','$r5','$p12', '$r12','$p22','$r22','$p32','$r32','$p42','$r42','$p52','$r52','$p13', '$r13','$p23','$r23','$p33','$r33','$p43','$r43','$p53','$r53','$p14', '$r14','$p24','$r24','$p34','$r34','$p44','$r44','$p54','$r54')";
$resultados=mysqli_query($con,$consulta);
if($resultados){
  include 'index.php';
}
else 
echo "mall";
?> 