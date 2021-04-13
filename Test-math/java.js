var nombre=document.getElementById('nombre');
var colegio=document.getElementById('colegio');
var grado=document.getElementById('grado');
var error=document.getElementById('error');
error.style.color="red";
error.style.fontSize= "15px";
  //Validar nombre y remover el inicio->
    var validar=function(e){
      var mensajeerror = [];
      if(nombre.value==0 || colegio.value==0 || grado.value==0){
        mensajeerror.push('Ingresa los datos, para ingresar!!');
        error.innerHTML=mensajeerror.join( ' ');
        return false ;
      }
      else {
        alert("Hola " + nombre.value + " , para comenzar dale click")
      }
    
  }
