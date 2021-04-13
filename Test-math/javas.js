(function () {
var valor = document.getElementById("name").innerHTML;
var niveles=function(e){
    var puntos = 0;
    var puntos1= 0 ;
    var puntos2= 1;
    var resul ;
    var ale=Math.floor(Math.random()*45)+1;
    var ale2=Math.floor(Math.random()*45)+1;
    var reale;
    var reale2;
    var chao = document.getElementById("name");
    var a;
    var b;
    var c;
    var d;
    chao.remove(chao);
      //empieza nivel 1
    var nivelc=function(e){
      var entrada=function(e){
         var nive=document.createTextNode("Nivel 1");
          var contenido=document.getElementById("intro");
           contenido.appendChild(nive);
           contenido.setAttribute("class","intro1");
      var quitar=function(e){
            var chao = document.getElementById("intro");
           chao.remove(chao);
           nivel1(e);
           problem1(e);
           opciones(e);
          }
           contenido.addEventListener("click",quitar);
              }
      entrada(e);
      var salto=function(e){
        var espacio=document.createElement("br");
        document.getElementById("nivel").appendChild(espacio);
        document.getElementById("problem").appendChild(espacio);
        }
      var nivel1=function(e){
        var nivel=function(e){
      var nivel=document.createTextNode("Nivel 1");
      var contenido=document.getElementById("nivel");
       contenido.appendChild(nivel);
       contenido.setAttribute("align","center");
       contenido.setAttribute("class","nivel1");
        }
        nivel(e);
      }
       //problema 1
     var problem1=function(e){
      if(ale<ale2){
        reale2=ale2 - ale;}
        else if(ale>ale2){
         reale2=ale - ale2;}
    do {
     ale=Math.floor(Math.random()*45)+1;
    ale2=Math.floor(Math.random()*45)+1;    
      do{
        if(ale==ale2){
         ale2=Math.floor(Math.random()*45)+1;}
        }while(ale==ale2);
       reale= ale + ale2;
       if(ale<ale2){
       reale2=ale2 - ale;}
       else if(ale>ale2){
        reale2=ale - ale2;}
    }while(reale2==ale || reale2==ale2);
    var problem=document.createTextNode("1. Carlos tiene " + ale + " dolar(es) y su mamá le regala " + ale2 + " dolar(es). ¿Cuánto dinero completó Carlos?" );
      var conte=document.getElementById("problem");
       conte.appendChild(problem);
       conte.setAttribute("align","center");
       conte.setAttribute("class","problem");
  }
    salto(e);
    //opciones 1
    var opciones=function(e){
      var salto=function(e){
        var saltico=document.createElement("br");
         saltico.setAttribute("name","salto")
         document.getElementById("opciones").appendChild(saltico);
        }
      var opcion1=function(e){
      var op1=document.createElement("INPUT");
      op1.setAttribute("type", "button");
      op1.setAttribute("id", "boton1");
      op1.setAttribute("class", "boton1");
      op1.setAttribute("value","A. " + ale + " dolar(es)");
      document.getElementById("opciones").appendChild(op1);  
      var valid =function(e){
        a="A. " + ale + " dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          puntos = puntos + puntos1 ;  
      }
      op1.addEventListener("click",valid);
      op1.addEventListener("click",punt);
      op1.addEventListener("click",remover1);
      }
      var opcion2=function(e){
        var op2=document.createElement("INPUT");
        op2.setAttribute("type", "button");
        op2.setAttribute("id", "boton2");
        op2.setAttribute("class", "boton2");
        op2.setAttribute("value","B. " + ale2 + " dolar(es)");
        document.getElementById("opciones").appendChild(op2);
        var valid =function(e){
          b="B. " + ale2 + " dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            puntos=puntos + puntos1;
        }
        op2.addEventListener("click",valid);
        op2.addEventListener("click",punt);
        op2.addEventListener("click",remover1);
      }
     var opcion3=function(e){
          var op3=document.createElement("INPUT");
          op3.setAttribute("type", "button");
          op3.setAttribute("id" , "boton3" );
          op3.setAttribute("class", "boton3");    
          op3.setAttribute("value","C. " + reale2 + " dolar(es)");
          document.getElementById("opciones").appendChild(op3);
          var valid =function(e){
            c="C. " + reale2 + " dolar(es)";
              alert("Esta no es la respuesta, sigue intentando");
              puntos=puntos+puntos1;
          }
          op3.addEventListener("click",valid);
          op3.addEventListener("click",punt);
          op3.addEventListener("click",remover1);}
      var opcion4=function(e){
            var op4=document.createElement("INPUT");
            op4.setAttribute("type", "button");
            op4.setAttribute("id" , "boton4" );
            op4.setAttribute("class", "boton4");
            op4.setAttribute("value","D. " + reale + " dolar(es)");
            document.getElementById("opciones") .appendChild(op4);
            var valid =function(e){
              d="D. " + reale + " dolar(es)";
                alert("Muy bien, Repuesta correcta, puntos ganados:" + " " + puntos2);
                puntos=puntos+puntos2;
            }
            op4.addEventListener("click",valid);
            op4.addEventListener("click",punt);
            op4.addEventListener("click", remover1);
          }
     var guardar=function(e){  
         var con=document.getElementById("p1");
     con.setAttribute("value", ale + " + " + ale2);
            if (a =="A. " + ale + " dolar(es)"){
             var conte=document.getElementById("r1");
             conte.setAttribute("value","A. " + ale + " dolar(es)");
           } else if (b =="B. " + ale2 + " dolar(es)"){
            var conte=document.getElementById("r1");
            conte.setAttribute("value","B. " + ale2 + " dolar(es)");
           }
           else if (c =="C. " + reale2 + " dolar(es)"){
            var conte=document.getElementById("r1");
            conte.setAttribute("value","C. " + reale2 + " dolar(es)");
           }
           else if (d =="D. " + reale + " dolar(es)"){
            var conte=document.getElementById("r1");
            conte.setAttribute("value","D. " + reale + " dolar(es)");
           }
         }
    var remover1=function(e){
       guardar(e);
       var chao = document.getElementById("opciones");
       chao.remove(chao);
       var chao2 =document.getElementById("problem");
       chao2.remove(chao2);
        problem2(e);
        crear(e);
        opciones2(e);
          }
       
      opcion1(e);
      salto(e);
      salto(e);
      opcion2(e);
      salto(e);
      salto(e);
      opcion3(e);
      salto(e);
      salto(e);
      opcion4(e);
      puntaje(e);
    }
    var puntaje= function(e){
   var point=document.createTextNode(valor + ", tu puntaje es: " + puntos );
  var conte=document.getElementById("puntos");
   conte.appendChild(point);    
   conte.setAttribute("class","puntaje");  
   conte.setAttribute("aling","center");  }
   var punt=function(e){
      resul = puntos;
    var element=document.getElementById("puntos");
           element.remove(element);
     var poin=document.createTextNode(valor + ", tu puntaje es: " + resul );
    var cont=document.getElementById("puntos2");
     cont.appendChild(poin);
     cont.setAttribute("class","puntaje");      
      } 
   //problema 2
  problem2=function(e){
      var salto= function(e){
       var saltico= document.createElement("br");
       document.getElementById("problem2").appendChild(saltico);}
  salto(e);
  ale=Math.floor(Math.random()*45)+1;
  ale2=Math.floor(Math.random()*45)+1;
  if(ale<ale2){
    reale2=ale2 - ale;}
    else if(ale>ale2){
     reale2=ale - ale2;}
  do {
  ale=Math.floor(Math.random()*45)+1;
  ale2=Math.floor(Math.random()*45)+1;    
  do{
    if(ale==ale2){
     ale2=Math.floor(Math.random()*45)+1;}
    }while(ale==ale2);
   reale= ale + ale2;
   if(ale<ale2){
   reale2=ale2 - ale;}
   else if(ale>ale2){
    reale2=ale - ale2;}
  }while(reale2==ale || reale2==ale2);
  var problem2=document.createTextNode("2. Un tanque tiene " + ale + " litro(s) de agua.  Si en la mañana se agregan  "+ ale2 +" litro(s), ¿cuántos litros de agua tiene el tanque ahora?");
  var contenido=document.getElementById("problem2");
   contenido.appendChild(problem2);
   contenido.setAttribute("align","center");
   contenido.setAttribute("class","problem");
      }
    //crear div opciones 2
    var crear=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form2");
      document.getElementById("opciones2").appendChild(elemento);
    }
   //opciones 2
   var opciones2=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("form2").appendChild(saltico);}
      var opcion11=function(e){
       var op11=document.createElement("INPUT");
       op11.setAttribute("type", "button");
       op11.setAttribute("id", "boton11");
       op11.setAttribute("class", "boton1");
       op11.setAttribute("value","A. "+ reale2 + " litro(s)");
       document.getElementById("form2").appendChild(op11);
       var valid =function(e){
         a="A. "+ reale2 + " litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje2= function(e){
         var element=document.getElementById("puntos2");
         element.remove(element);
         var poino=document.createTextNode(valor+ ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos3");
         cont.setAttribute("class","puntaje");
          cont.appendChild(poino);  
         }
      op11.addEventListener("click",valid);
      op11.addEventListener("click",puntaje2);
      op11.addEventListener("click",remover2);
     }
     var opcion12=function(e){
      var op12=document.createElement("INPUT");
      op12.setAttribute("type", "button");
      op12.setAttribute("id", "boton12");
      op12.setAttribute("class", "boton2");
      op12.setAttribute("value","B. " + reale + " litro(s)");
      document.getElementById("form2").appendChild(op12);
      var valid =function(e){
        b="B. " + reale + " litro(s)";
          alert("Muy bien respuesta correcta, puntos ganados:" +" "+ puntos2);
          resul = resul + puntos2;  
      }
      var puntaje2= function(e){
         var element=document.getElementById("puntos2");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos3");
         cont.setAttribute("class","puntaje");
          cont.appendChild(poino);
          puntos=resul;  
         }
      op12.addEventListener("click",valid);
      op12.addEventListener("click",puntaje2);
      op12.addEventListener("click",remover2);
    }
    var opcion13=function(e){
      var op13=document.createElement("INPUT");
      op13.setAttribute("type", "button");
      op13.setAttribute("id", "boton13");
      op13.setAttribute("class", "boton3");
      op13.setAttribute("value","C. " + ale2 + " litro(s)");
      document.getElementById("form2").appendChild(op13);
      var valid =function(e){
        c="C. " + ale2 + " litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje2= function(e){
         var element=document.getElementById("puntos2");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos3");
         cont.setAttribute("class","puntaje");
          cont.appendChild(poino);
          puntos=resul;    
         }
      op13.addEventListener("click",valid);
      op13.addEventListener("click",puntaje2);
      op13.addEventListener("click",remover2);
    }
    var opcion14=function(e){
      var op14=document.createElement("INPUT");
      op14.setAttribute("type", "button");
      op14.setAttribute("id", "boton14");
      op14.setAttribute("class", "boton4");
      op14.setAttribute("value","D. " + ale + " litro(s)");
      document.getElementById("form2").appendChild(op14);
      var valid =function(e){
        d="D. " + ale + " litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje2= function(e){
         var element=document.getElementById("puntos2");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es:  " + resul);
         var cont=document.getElementById("puntos3");
         cont.setAttribute("class","puntaje");
          cont.appendChild(poino);
          puntos=resul;    
         }
      op14.addEventListener("click",valid);
      op14.addEventListener("click",puntaje2);
      op14.addEventListener("click",remover2);
    }
    var guardar=function(e){
        var con=document.getElementById("p2");
        con.setAttribute("value", ale + " + " + ale2);
      if (a =="A. "+ reale2 + " litro(s)"){
       var conte=document.getElementById("r2");
       conte.setAttribute("value","A. "+ reale2 + " litro(s)");
     } else if (b =="B. " + reale + " litro(s)"){
      var conte=document.getElementById("r2");
      conte.setAttribute("value","B. " + reale + " litro(s)");
     }
     else if (c =="C. " + ale2 + " litro(s)"){
      var conte=document.getElementById("r2");
      conte.setAttribute("value","C. " + ale2 + " litro(s)");
     }
     else if (d =="D. " + ale + " litro(s)"){
      var conte=document.getElementById("r2");
      conte.setAttribute("value","D. " + ale + " litro(s)");
     }
   }
    var remover2=function(e){
     guardar(e);
      var chao =document.getElementById("problem2");
      chao.remove(chao);
      var chao2 =document.getElementById("opciones2");
      chao2.remove(chao2);
       problem3(e);
       crear1(e);
       opciones3(e);
         }
  
     opcion11(e);
     salto(e);
     salto(e);
     opcion12(e);
     salto(e);
     salto(e);
     opcion13(e);
     salto(e);
     salto(e);
     opcion14(e);
     salto(e);
    }
    //problema 3
    problem3=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem3").appendChild(saltico);}
   salto(e);
   ale=Math.floor(Math.random()*45)+1;
   ale2=Math.floor(Math.random()*45)+1;
   if(ale<ale2){
     reale2=ale2 - ale;}
     else if(ale>ale2){
      reale2=ale - ale2;}
   do {
   ale=Math.floor(Math.random()*45)+1;
   ale2=Math.floor(Math.random()*45)+1;    
   do{
     if(ale==ale2){
      ale2=Math.floor(Math.random()*45)+1;}
     }while(ale==ale2);
    reale= ale + ale2;
    if(ale<ale2){
    reale2=ale2 - ale;}
    else if(ale>ale2){
     reale2=ale - ale2;}
   }while(reale2==ale || reale2==ale2);
   var problem3=document.createTextNode("3. La mamá le regala a Carlos " + ale + " dolar(es). Si Carlos tenía " + ale2 + " dolar(es), ¿cuánto dinero completó?");
   var contenido=document.getElementById("problem3");
    contenido.appendChild(problem3);
    contenido.setAttribute("align","center");
    contenido.setAttribute("class","problem");
    }
    //crear div opciones 3
    var crear1=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form3");
      document.getElementById("opciones3").appendChild(elemento);
    }
    //opciones 3
    var opciones3=function(e){
     var salto= function(e){
       var saltico= document.createElement("br");
       document.getElementById("form3").appendChild(saltico);}
       var opcion131=function(e){
        var op131=document.createElement("INPUT");
        op131.setAttribute("type", "button");
        op131.setAttribute("id", "boton131");
        op131.setAttribute("class", "boton1");
        op131.setAttribute("value","A. " + reale + " dolar(es)" );
        document.getElementById("form3").appendChild(op131);
        var valid =function(e){
          a="A. " + reale + " dolar(es)" ;
            alert("Muy bien repuesta correcta, puntos ganados:" +" "+ puntos2);
            resul = resul + puntos2;  
        }
          var puntaje3= function(e){
             var elemento=document.getElementById("puntos3");
             elemento.remove(elemento);
             var poino=document.createTextNode(valor + ", tu puntaje es: " + resul);
             var cont=document.getElementById("puntos4");
             cont.setAttribute("class","puntaje");
              cont.appendChild(poino);  
             }
        op131.addEventListener("click",valid);
        op131.addEventListener("click",puntaje3);
        op131.addEventListener("click",remover3);
             
      }
      var opcion132=function(e){
       var op132=document.createElement("INPUT");
       op132.setAttribute("type", "button");
       op132.setAttribute("id", "boton132");
       op132.setAttribute("class", "boton2");
       op132.setAttribute("value","B. " + ale + " dolar(es)");
       document.getElementById("form3").appendChild(op132);
       var valid =function(e){
         b="B. " + ale + " dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
       }
       var puntaje3= function(e){
         var elemento=document.getElementById("puntos3");
         elemento.remove(elemento);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul);
         var cont=document.getElementById("puntos4");
         cont.setAttribute("class","puntaje");
          cont.appendChild(poino);  
         }
      op132.addEventListener("click",valid);
      op132.addEventListener("click",puntaje3);
      op132.addEventListener("click",remover3);
     }
     var opcion133=function(e){
       var op133=document.createElement("INPUT");
       op133.setAttribute("type", "button");
       op133.setAttribute("id", "boton133");
       op133.setAttribute("class", "boton3");
       op133.setAttribute("value","C. " + ale2 + " dolar(es)");
       document.getElementById("form3").appendChild(op133);
       var valid =function(e){
         c="C. " + ale2 + " dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje3= function(e){
         var elemento=document.getElementById("puntos3");
         elemento.remove(elemento);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul);
         var cont=document.getElementById("puntos4");
         cont.setAttribute("class","puntaje");
          cont.appendChild(poino);  
         }
      op133.addEventListener("click",valid);
      op133.addEventListener("click",puntaje3);
      op133.addEventListener("click",remover3);
     }
     var opcion134=function(e){
       var op134=document.createElement("INPUT");
       op134.setAttribute("type", "button");
       op134.setAttribute("id", "boton134");
       op134.setAttribute("class", "boton4");
       op134.setAttribute("value", "D. " + reale2 + " dolar(es)");
       document.getElementById("form3").appendChild(op134);
       var valid =function(e){
         d="D. " + reale2 + " dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje3= function(e){
         var elemento=document.getElementById("puntos3");
         elemento.remove(elemento);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul);
         var cont=document.getElementById("puntos4");
         cont.setAttribute("class","puntaje");
          cont.appendChild(poino);  
         }
      op134.addEventListener("click",valid);
      op134.addEventListener("click",puntaje3);
      op134.addEventListener("click",remover3);
     }
     var guardar=function(e){
        var con=document.getElementById("p3");
        con.setAttribute("value", ale + " + " + ale2);
      if (a =="A. " + reale + " dolar(es)"){
       var conte=document.getElementById("r3");
       conte.setAttribute("value","A. " + reale + " dolar(es)");
     } else if (b =="B. " + ale + " dolar(es)"){
      var conte=document.getElementById("r3");
      conte.setAttribute("value","B." + ale + " dolar(es)");
     }
     else if (c =="C. " + ale2 + " dolar(es)"){
      var conte=document.getElementById("r3");
      conte.setAttribute("value","C. " + ale2 + " dolar(es)");
     }
     else if (d =="D. " + reale2 + " dolar(es)"){
      var conte=document.getElementById("r3");
      conte.setAttribute("value","D. " + reale2 + " dolar(es)");
     }
   }
     var remover3=function(e){
       guardar(e);
       if(resul>=1 && resul<3){
      var chao =document.getElementById("problem3");
      chao.remove(chao);
      var chao2 =document.getElementById("opciones3");
      chao2.remove(chao2);
       problem4(e);
       crear2(e);
       opciones4(e);
         }
         else if(resul==0){
           gameover(e);
         }
         else if(resul==3){
          var chao =document.getElementById("problem3");
          chao.remove(chao);
          var chao4 =document.getElementById("opciones3");
         chao4.remove(chao4);
          var chao2 =document.getElementById("nivel");
          chao2.remove(chao2);  
           nivel2(e);
           var chao3 =document.getElementById("puntos4");
          chao3.remove(chao3);  
         }
        }
  
      opcion131(e);
      salto(e);
      salto(e);
      opcion132(e);
      salto(e);
      salto(e);
      opcion133(e);
      salto(e);
      salto(e);
      opcion134(e);
      salto(e);  
      }
     //problema 4
    problem4=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem4").appendChild(saltico);}
   salto(e);
   ale=Math.floor(Math.random()*45)+1;
   ale2=Math.floor(Math.random()*45)+1;
   if(ale<ale2){
     reale2=ale2 - ale;}
     else if(ale>ale2){
      reale2=ale - ale2;}
   do {
   ale=Math.floor(Math.random()*45)+1;
   ale2=Math.floor(Math.random()*45)+1;    
   do{
     if(ale==ale2){
      ale2=Math.floor(Math.random()*45)+1;}
     }while(ale==ale2);
    reale= ale + ale2;
    if(ale<ale2){
    reale2=ale2 - ale;}
    else if(ale>ale2){
     reale2=ale - ale2;}
   }while(reale2==ale || reale2==ale2);
   var problem2=document.createTextNode("4. ¿Cuánto dinero completará Carlos, si tiene "+ ale + " dolar(es) y su mamá le regala "+ ale2 + " dolar(es)?");
   var contenido=document.getElementById("problem4");
    contenido.appendChild(problem2);
    contenido.setAttribute("align","center");
    contenido.setAttribute("class","problem");
       }
    //crear div opciones 4
    var crear2=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form4");
      document.getElementById("opciones4").appendChild(elemento);
    }
     //opciones 4
     var opciones4=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("form4").appendChild(saltico);}
        var opcion141=function(e){
         var op141=document.createElement("INPUT");
         op141.setAttribute("type", "button");
         op141.setAttribute("id", "boton141");
         op141.setAttribute("class", "boton1");
         op141.setAttribute("value","A. " + ale2 + " dolar(es)");
         document.getElementById("form4").appendChild(op141);
         var valid =function(e){
           a="A. " + ale2 + " dolar(es)";
             alert("Esta no es la respuesta, sigue intentando");
             resul = resul + puntos1;  
         }
         var puntaje= function(e){
            var element=document.getElementById("puntos4");
            element.remove(element);
            var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
            var cont=document.getElementById("puntos5");
            cont.setAttribute("class","puntaje");
             cont.appendChild(poino);  
            }
         op141.addEventListener("click",valid);
         op141.addEventListener("click",puntaje);
         op141.addEventListener("click",remover3);
       }
       var opcion142=function(e){
        var op142=document.createElement("INPUT");
        op142.setAttribute("type", "button");
        op142.setAttribute("id", "boton142");
        op142.setAttribute("class", "boton2");
        op142.setAttribute("value","B." + reale2 + " dolar(es)");
        document.getElementById("form4").appendChild(op142);
        var valid =function(e){
          b ="B." + reale2 + " dolar(es)";
           alert("Esta no es la respuesta, sigue intentando");
           resul = resul + puntos1;  
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos4");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos5");
          cont.setAttribute("class","puntaje");
           cont.appendChild(poino);  
          }
       op142.addEventListener("click",valid);
       op142.addEventListener("click",puntaje);
       op142.addEventListener("click",remover3);
      }
      var opcion143=function(e){
        var op143=document.createElement("INPUT");
        op143.setAttribute("type", "button");
        op143.setAttribute("id", "boton143");
        op143.setAttribute("class", "boton3");
        op143.setAttribute("value","C. " + reale + " dolar(es)");
        document.getElementById("form4").appendChild(op143);
        var valid =function(e){
          c="C. " + reale + " dolar(es)";
           alert("Muy bien repuesta correcta, puntos ganados:" +" "+ puntos2);
           resul = resul + puntos2;  
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos4");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos5");
          cont.setAttribute("class","puntaje");
           cont.appendChild(poino);  
          }
       op143.addEventListener("click",valid);
       op143.addEventListener("click",puntaje);
       op143.addEventListener("click",remover3);
      }
      var opcion144=function(e){
        var op144=document.createElement("INPUT");
        op144.setAttribute("type", "button");
        op144.setAttribute("id", "boton144");
        op144.setAttribute("class", "boton4");
        op144.setAttribute("value","D. "+ ale+ " dolar(es)" );
        document.getElementById("form4").appendChild(op144);
        var valid =function(e){
          d="D. "+ ale+ " dolar(es)";
           alert("Esta no es la respuesta, sigue intentando");
           resul = resul + puntos1;  
       }
       var puntaje= function(e){
         if (resul>=1){
          var element=document.getElementById("puntos4");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos5");
          cont.setAttribute("class","puntaje");
           cont.appendChild(poino);  
            }
          }
       op144.addEventListener("click",valid);
       op144.addEventListener("click",puntaje);
       op144.addEventListener("click",remover3);
      }
      var guardar=function(e){
        var con=document.getElementById("p4");
        con.setAttribute("value", ale + " + " + ale2);
        if (a =="A. " + ale2 + " dolar(es)"){
         var con=document.getElementById("r4");
         con.setAttribute("value","A. " + ale2 + " dolar(es)");
       } else if (b =="B." + reale2 + " dolar(es)"){
        var con=document.getElementById("r4");
        con.setAttribute("value","B." + reale2 + " dolar(es)");
       }
       else if (c =="C. " + reale + " dolar(es)"){
        var con=document.getElementById("r4");
        con.setAttribute("value","C. " + reale + " dolar(es)");
       }
       else if (d =="D. "+ ale+ " dolar(es)"){
        var con=document.getElementById("r4");
        con.setAttribute("value","D. "+ ale+ " dolar(es)");
       }
     }
      var remover3=function(e){
        guardar(e);
        if(resul>=2 && resul<3){
          var chao =document.getElementById("problem4");
          chao.remove(chao);
          var chao2 =document.getElementById("opciones4");
              chao2.remove(chao2);
           problem5(e);
           crear3(e);
           opciones5(e);
             }
        else if(resul==1){
              gameover(e);
            }    
             else if(resul==3){
              var chao =document.getElementById("problem4");
              chao.remove(chao);
              var chao4 =document.getElementById("opciones4");
              chao4.remove(chao4);
              var chao2 =document.getElementById("nivel");
              chao2.remove(chao2);  
               nivel2(e);
               var chao3 =document.getElementById("puntos5");
              chao3.remove(chao3);  
             }
           }
   
       opcion141(e);
       salto(e);
       salto(e);
       opcion142(e);
       salto(e);
       salto(e);
       opcion143(e);
       salto(e);
       salto(e);
       opcion144(e);
       salto(e);  
      }
      //problema 5
    problem5=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem5").appendChild(saltico);}
   salto(e);
   ale=Math.floor(Math.random()*45)+1;
   ale2=Math.floor(Math.random()*45)+1;
   if(ale<ale2){
     reale2=ale2 - ale;}
     else if(ale>ale2){
      reale2=ale - ale2;}
   do {
   ale=Math.floor(Math.random()*45)+1;
   ale2=Math.floor(Math.random()*45)+1;    
   do{
     if(ale==ale2){
      ale2=Math.floor(Math.random()*45)+1;}
     }while(ale==ale2);
    reale= ale + ale2;
    if(ale<ale2){
    reale2=ale2 - ale;}
    else if(ale>ale2){
     reale2=ale - ale2;}
   }while(reale2==ale || reale2==ale2);
   var problem2=document.createTextNode("5. Ricardo tiene " + ale + " dolar(es) y su mamá le regala "+ ale2 +" dolar(es). ¿Cuánto dinero completó Ricardo?");
   var contenido=document.getElementById("problem5");
    contenido.appendChild(problem2);
    contenido.setAttribute("align","center");
    contenido.setAttribute("class","problem");
    }
    //crear div opciones 5
    var crear3=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form5");
      document.getElementById("opciones5").appendChild(elemento);
    }
     //opciones 5
     var opciones5=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("form5").appendChild(saltico);}
        var opcion151=function(e){
         var op151=document.createElement("INPUT");
         op151.setAttribute("type", "button");
         op151.setAttribute("id", "boton151");
         op151.setAttribute("class", "boton1");
         op151.setAttribute("value","A. " + ale2 +" dolar(es)");
         document.getElementById("form5").appendChild(op151);
         var valid =function(e){
           a="A. " + ale2 +" dolar(es)";
             alert("Esta no es la respuesta, sigue intentando");
             resul = resul + puntos1;  
         }
         var puntaje= function(e){
           var element=document.getElementById("puntos5");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos6");
           cont.setAttribute("class","puntaje");
            cont.appendChild(poino);  
           }
         op151.addEventListener("click",valid);
         op151.addEventListener("click",puntaje);
         op151.addEventListener("click",remover4);
       }
       var opcion152=function(e){
        var op152=document.createElement("INPUT");
        op152.setAttribute("type", "button");
        op152.setAttribute("id", "boton152");
        op152.setAttribute("class", "boton2");
        op152.setAttribute("value","B. "+ ale+ " dolar(es)");
        document.getElementById("form5").appendChild(op152);
        var valid =function(e){
          b="B. "+ ale+ " dolar(es)";
           alert("Esta no es la respuesta, sigue intentando");
           resul = resul + puntos1;  
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos5");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos6");
           cont.appendChild(poino);  
          }
       op152.addEventListener("click",valid);
       op152.addEventListener("click",puntaje);
       op152.addEventListener("click",remover4);
      }
      var opcion153=function(e){
        var op153=document.createElement("INPUT");
        op153.setAttribute("type", "button");
        op153.setAttribute("id", "boton153");
        op153.setAttribute("class", "boton3");
        op153.setAttribute("value","C. " + reale2 + " dolar(es)");
        document.getElementById("form5").appendChild(op153);
        var valid =function(e){
          c="C. " + reale2 + " dolar(es)";
           alert("Esta no es la respuesta, sigue intentando");
           resul = resul + puntos1;  
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos5");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos6");
           cont.appendChild(poino);  
          }
       op153.addEventListener("click",valid);
       op153.addEventListener("click",puntaje);
       op153.addEventListener("click",remover4);
      }
      var opcion154=function(e){
        var op154=document.createElement("INPUT");
        op154.setAttribute("type", "button");
        op154.setAttribute("id", "boton154");
        op154.setAttribute("class", "boton4");
        op154.setAttribute("value","D. "+ reale+ " dolar(es)");
        document.getElementById("form5").appendChild(op154);
        var valid =function(e){
          d="D. "+ reale+ " dolar(es)";
           alert("Muy bien repuesta correcta, puntos ganados:" +" "+ puntos2);
           resul = resul + puntos2;  
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos5");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos6");
           cont.appendChild(poino);  
          }
       op154.addEventListener("click",valid);
       op154.addEventListener("click",puntaje);
       op154.addEventListener("click",remover4);
      }
      var guardar=function(e){
        var con=document.getElementById("p5");
        con.setAttribute("value", ale + " + " + ale2);
        if (a =="A. " + ale2 +" dolar(es)"){
         var conte=document.getElementById("r5");
         conte.setAttribute("value","A. " + ale2 +" dolar(es)");
       } else if (b =="B. "+ ale+ " dolar(es)"){
        var conte=document.getElementById("r5");
        conte.setAttribute("value","B." + reale2 + " dolar(es)");
       }
       else if (c =="C. " + reale2 + " dolar(es)"){
        var conte=document.getElementById("r5");
        conte.setAttribute("value","C. " + reale2 + " dolar(es)");
       }
       else if (d =="D. "+ reale+ " dolar(es)"){
        var conte=document.getElementById("r5");
        conte.setAttribute("value","D. "+ reale+ " dolar(es)");
       }
     }
      var remover4=function(e){
        guardar(e);
        if(resul<3){
        var chao =document.getElementById("problem5");
        chao.remove(chao);
         gameover(e);
           }
           else if(resul==3){
            var chao =document.getElementById("problem5");
            chao.remove(chao);
            var chao4 =document.getElementById("opciones5");
            chao4.remove(chao4);
            var chao2 =document.getElementById("nivel");
            chao2.remove(chao2);  
             nivel2(e);
             var chao3 =document.getElementById("puntos6");
            chao3.remove(chao3);  
           }
       
           }
   
       opcion151(e);
       salto(e);
       salto(e);
       opcion152(e);
       salto(e);
       salto(e);
       opcion153(e);
       salto(e);
       salto(e);
       opcion154(e);
       salto(e);  
      }
       //termina el test-nivel1
   var gameover=function(e){
    var chao=document.getElementById("nivel1");
     chao.remove(chao);
     resultados(e);
     regresar(e);
  }
  //estadistica de la prueba 1
  var resultados=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("final1").appendChild(saltico);}
      salto(e);
    var elemento=document.createTextNode("¿Que ha pasado "+ valor + " ? Has alcanzado " + resul +" puntos de 3 posibles en el NIVEL 1. Debes mínimo 3 para pasar al siguiente nivel.");
    document.getElementById("final1").appendChild(elemento);
    var agre = document.getElementById("final1");
    agre.setAttribute("class","final1");
    //Imagen 
   var imagen=function(e){
    var img =document.getElementById("cara");
     img.setAttribute("src","carita.GIF");
  }
 //Imagen 
    var imagen1=function(e){
      var img =document.getElementById("cara2");
       img.setAttribute("src","carita.GIF");
    }
   imagen(e);
   imagen1(e);
   salto(e);
   salto(e);
  }
  // returnInicio
  var regresar=function(e){
   var boton=document.createElement("INPUT");
       boton.setAttribute("type", "submit");
       boton.setAttribute("class","botonreset");
       boton.setAttribute("name", "enviar");
       boton.setAttribute("value","Enviar y volver al inicio");
       boton.setAttribute("id", "botonreset");
       document.getElementById("final1").appendChild(boton);    
  }
    }
    nivelc(e);
    //empieza nivel 2
    var nivel2=function(e){
      var entrada=function(e){
        var nive=document.createTextNode("Nivel 2");
         var contenido=document.getElementById("intro2");
          contenido.appendChild(nive);
          contenido.setAttribute("class","intro2");
     var quitar=function(e){
           var chao = document.getElementById("intro2");
          chao.remove(chao);
          nivel22(e);
          problem1(e);
          crear(e);
          opciones(e);
         }
          contenido.addEventListener("click",quitar);
             } 
     entrada(e);
      var nivel22=function(e){
        var nivel=function(e){
      var nivel=document.createTextNode("Nivel 2");
      var contenido=document.getElementById("nivel22");
       contenido.appendChild(nivel);
       contenido.setAttribute("align","center");
       contenido.setAttribute("class","nivel2");
      }
      nivel(e);
      }
    //problema1
    var problem1=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem21").appendChild(saltico);}
   salto(e);
      if(ale<ale2){
        reale2=ale2 + ale;}
        else if(ale>ale2){
         reale2=ale + ale2;}
    do {
     ale=Math.floor(Math.random()*45)+3;
    ale2=Math.floor(Math.random()*45)+3;  
    do{
        ale=Math.floor(Math.random()*45)+3;
        ale2=Math.floor(Math.random()*45)+3;   
        }while(ale<ale2)  
      do{
        if(ale==ale2){
         ale2=Math.floor(Math.random()*45)+3;}
        }while(ale==ale2);
       if(ale<ale2){
       reale2=ale2 + ale;}
       else if(ale>ale2){
        reale2=ale + ale2;
        reale= ale - ale2;}
    }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=3);
    var problem=document.createTextNode("1. ¿Cuánto dinero le sobra a Juan, si tiene " + ale + " dolar(es) y compra un juguete de " + ale2 +" dolar(es)?" );
      var conte=document.getElementById("problem21");
       conte.appendChild(problem);
       conte.setAttribute("align","center");
       conte.setAttribute("class","problem");
     }
     //puntaje1
     var puntaje= function(e){
      var poino=document.createTextNode(valor+ ", tu puntaje es: " + resul);
      var cont=document.getElementById("puntos21");
      cont.setAttribute("class","puntaje2");
       cont.appendChild(poino);  
      }
     //crear
     var crear=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form21");
      document.getElementById("opciones21").appendChild(elemento);
    }
     //opciones1
     var opciones=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("form21").appendChild(saltico);}
        var opcion21=function(e){
         var op21=document.createElement("INPUT");
         op21.setAttribute("type", "button");
         op21.setAttribute("id", "boton21");
         op21.setAttribute("class", "boton1");
         op21.setAttribute("value","A. "+ ale2+" dolar(es)");
         document.getElementById("form21").appendChild(op21);
         var valid =function(e){
           a="A. "+ ale2+" dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            resul = resul + puntos1 ;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos21");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos22");
           cont.setAttribute("class","puntaje2");
            cont.appendChild(poino);  
           }
        op21.addEventListener("click",valid);
        op21.addEventListener("click",puntaje);
        op21.addEventListener("click",remover21);
       }
       var opcion22=function(e){
        var op22=document.createElement("INPUT");
        op22.setAttribute("type", "button");
        op22.setAttribute("id", "boton22");
        op22.setAttribute("class", "boton2");
        op22.setAttribute("value","B. "+ reale+" dolar(es)");
        document.getElementById("form21").appendChild(op22);
        var valid =function(e){
          b="B. "+ reale+" dolar(es)";
            alert("Muy bien respuesta correcta, puntos ganados:" +" "+ (puntos2 + 1));
            resul = resul + puntos2 + 1;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos21");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos22");
            cont.appendChild(poino);
            cont.setAttribute("class","puntaje2");  
           }
        op22.addEventListener("click",valid);
        op22.addEventListener("click",puntaje);
        op22.addEventListener("click",remover21);
      }
      var opcion23=function(e){
        var op23=document.createElement("INPUT");
        op23.setAttribute("type", "button");
        op23.setAttribute("id", "boton23");
        op23.setAttribute("class", "boton3");
        op23.setAttribute("value","C. " + ale + " dolar(es)");
        document.getElementById("form21").appendChild(op23);
        var valid =function(e){
          c="C. " + ale + " dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            resul = resul + puntos1;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos21");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos22");
            cont.appendChild(poino);  
            cont.setAttribute("class","puntaje2"); 
           }
        op23.addEventListener("click",valid);
        op23.addEventListener("click",puntaje);
        op23.addEventListener("click",remover21);
      }
      var opcion24=function(e){
        var op24=document.createElement("INPUT");
        op24.setAttribute("type", "button");
        op24.setAttribute("id", "boton24");
        op24.setAttribute("class","boton4")
        op24.setAttribute("value","D. "+ reale2+ " dolar(es)");
        document.getElementById("form21").appendChild(op24);
        var valid =function(e){
          d="D. "+ reale2+ " dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            resul = resul + puntos1;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos21");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos22");
           cont.setAttribute("class","puntaje2");
            cont.appendChild(poino);
           }
        op24.addEventListener("click",valid);
        op24.addEventListener("click",puntaje);
        op24.addEventListener("click",remover21);
      }
      var guardar=function(e){
        var con=document.getElementById("p12");
        con.setAttribute("value", ale + " - " + ale2);
        if (a =="A. " + ale2 + " dolar(es)"){
         var conte=document.getElementById("r12");
         conte.setAttribute("value","A. " + ale2 + " dolar(es)");
       } else if (b =="B. " + reale + " dolar(es)"){
        var conte=document.getElementById("r12");
        conte.setAttribute("value","B. " + reale + " dolar(es)");
       }
       else if (c =="C. " + ale + " dolar(es)"){
        var conte=document.getElementById("r12");
        conte.setAttribute("value","C. " + ale + " dolar(es)");
       }
       else if (d =="D. " + reale2 + " dolar(es)"){
        var conte=document.getElementById("r12");
        conte.setAttribute("value","D. " + reale2 + " dolar(es)");
       }
     }
      var remover21=function(e){
        guardar(e);
        var chao =document.getElementById("problem21");
        chao.remove(chao);
        var chao2 =document.getElementById("opciones21");
        chao2.remove(chao2);
        problem2(e);
        crear2(e);
        opciones2(e);
           }
   
       opcion21(e);
       salto(e);
       salto(e);
       opcion22(e);
       salto(e);
       salto(e);
       opcion23(e);
       salto(e);
       salto(e);
       opcion24(e); 
       puntaje(e); 
      }   
    //problem2
    var problem2=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem22").appendChild(saltico);}
   salto(e);
      if(ale<ale2){
        reale2=ale2 + ale;}
        else if(ale>ale2){
         reale2=ale + ale2;}
    do {
     ale=Math.floor(Math.random()*45)+3;
    ale2=Math.floor(Math.random()*45)+3;  
    do{
        ale=Math.floor(Math.random()*45)+3;
        ale2=Math.floor(Math.random()*45)+3;   
        }while(ale<ale2)  
      do{
        if(ale==ale2){
         ale2=Math.floor(Math.random()*45)+3;}
        }while(ale==ale2);
       if(ale<ale2){
       reale2=ale2 + ale;}
       else if(ale>ale2){
        reale2=ale + ale2;
        reale= ale - ale2;}
    }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=3);
      var problem=document.createTextNode("2. Juan tenía "+ ale + " dolar(es) y compró un juguete que le costó "+ ale2 +" dolar(es). ¿Cuánto dinero le sobró?" );
        var conte=document.getElementById("problem22");
         conte.appendChild(problem);
         conte.setAttribute("align","center");
         conte.setAttribute("class","problem");
     }
     //crear2
   var crear2=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form22");
      document.getElementById("opciones22").appendChild(elemento);
    }
    //opciones2
    var opciones2=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("form22").appendChild(saltico);}
       var opcion221=function(e){
         var op221=document.createElement("INPUT");
         op221.setAttribute("type", "button");
         op221.setAttribute("id", "boton221");
         op221.setAttribute("class","boton1");
         op221.setAttribute("value","A. "+ reale2 +" dolar(es)");
         document.getElementById("form22").appendChild(op221);
         var valid =function(e){
           a="A. "+ reale2 +" dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            resul = resul + puntos1 ;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos22");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos23");
           cont.setAttribute("class","puntaje2");
            cont.appendChild(poino);  
           }
        op221.addEventListener("click",valid);
        op221.addEventListener("click",puntaje);
        op221.addEventListener("click",remover22);
       }
       var opcion222=function(e){
        var op222=document.createElement("INPUT");
        op222.setAttribute("type", "button");
        op222.setAttribute("id", "boton222");
        op222.setAttribute("class","boton2");
        op222.setAttribute("value", "B. "+ ale +" dolar(es)");
        document.getElementById("form22").appendChild(op222);
        var valid =function(e){
          b="B. "+ ale +" dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            resul = resul + puntos1;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos22");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos23");
           cont.setAttribute("class","puntaje2");
            cont.appendChild(poino);  
           }
        op222.addEventListener("click",valid);
        op222.addEventListener("click",puntaje);
        op222.addEventListener("click",remover22);
      }
      var opcion223=function(e){
        var op223=document.createElement("INPUT");
        op223.setAttribute("type", "button");
        op223.setAttribute("id", "boton223");
        op223.setAttribute("class","boton3");
        op223.setAttribute("value","C. " + reale + " dolar(es)");
        document.getElementById("form22").appendChild(op223);
        var valid =function(e){
          c="C. " + reale + " dolar(es)";
            alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 1));
            resul = resul + puntos2 + 1;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos22");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos23");
           cont.setAttribute("class","puntaje2");
            cont.appendChild(poino);   
           }
        op223.addEventListener("click",valid);
        op223.addEventListener("click",puntaje);
        op223.addEventListener("click",remover22);
      }
      var opcion224=function(e){
        var op224=document.createElement("INPUT");
        op224.setAttribute("type", "button");
        op224.setAttribute("id", "boton224");
        op224.setAttribute("class","boton4");
        op224.setAttribute("value","D. " + ale2 + " dolar(es)");
        document.getElementById("form22").appendChild(op224);
        var valid =function(e){
          d="D. " + ale2 + " dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            resul = resul + puntos1;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos22");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos23");
           cont.setAttribute("class","puntaje2");
            cont.appendChild(poino);
           }
        op224.addEventListener("click",valid);
        op224.addEventListener("click",puntaje);
        op224.addEventListener("click",remover22);
      }
      var guardar=function(e){
        var con=document.getElementById("p22");
        con.setAttribute("value", ale + " - " + ale2);
        if (a =="A. " + reale2 + " dolar(es)"){
         var conte=document.getElementById("r22");
         conte.setAttribute("value","A. " + reale2 + " dolar(es)");
       } else if (b =="B. " + ale + " dolar(es)"){
        var conte=document.getElementById("r22");
        conte.setAttribute("value","B. " + ale + " dolar(es)");
       }
       else if (c =="C. " + reale + " dolar(es)"){
        var conte=document.getElementById("r22");
        conte.setAttribute("value","C. " + reale + " dolar(es)");
       }
       else if (d =="D. " + ale2 + " dolar(es)"){
        var conte=document.getElementById("r22");
        conte.setAttribute("value","D. " + ale2 + " dolar(es)");
       }
     }
      var remover22=function(e){
        guardar(e);
        var chao =document.getElementById("problem22");
        chao.remove(chao);
        var chao2 =document.getElementById("form22");
        chao2.remove(chao2);
        problem3(e);
        crear3(e);
        opciones3(e);
           }
       opcion221(e);
       salto(e);
       salto(e);
       opcion222(e);
       salto(e);
       salto(e);
       opcion223(e);
       salto(e);
       salto(e);
       opcion224(e);
       } 
      //problem3
      var problem3=function(e){
        var salto= function(e){
          var saltico= document.createElement("br");
          document.getElementById("problem23").appendChild(saltico);}
     salto(e);
     if(ale<ale2){
        reale2=ale2 + ale;}
        else if(ale>ale2){
         reale2=ale + ale2;}
    do {
     ale=Math.floor(Math.random()*45)+3;
    ale2=Math.floor(Math.random()*45)+3;  
    do{
        ale=Math.floor(Math.random()*45)+3;
        ale2=Math.floor(Math.random()*45)+3;   
        }while(ale<ale2)  
      do{
        if(ale==ale2){
         ale2=Math.floor(Math.random()*45)+3;}
        }while(ale==ale2);
       if(ale<ale2){
       reale2=ale2 + ale;}
       else if(ale>ale2){
        reale2=ale + ale2;
        reale= ale - ale2;}
    }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=3);
        var problem=document.createTextNode("3. Un tanque tiene "+ ale + " litro(s) de agua. Si en la mañana se gastan "+ ale2 + " litro(s), ¿cuántos litros de agua tiene el tanque ahora?" );
          var conte=document.getElementById("problem23");
           conte.appendChild(problem);
           conte.setAttribute("align","center");
           conte.setAttribute("class","problem");
       }
         //crear3
   var crear3=function(e){
    var elemento= document.createElement("div");
    elemento.setAttribute("id","form23");
    document.getElementById("problem23").appendChild(elemento);
  }
  //opciones3
  var opciones3=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("opciones23").appendChild(saltico);}
     var opcion231=function(e){
       var op231=document.createElement("INPUT");
       op231.setAttribute("type", "button");
       op231.setAttribute("id", "boton231");
       op231.setAttribute("class","boton1");
       op231.setAttribute("value", "A. "+ reale + " litro(s)");
       document.getElementById("opciones23").appendChild(op231);
       var valid =function(e){
         a="A. "+ reale + " litro(s)";
          alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 1));
          resul = resul + puntos2 + 1;  
  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos23");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos24");
         cont.setAttribute("class","puntaje2");
          cont.appendChild(poino);  
         }
      op231.addEventListener("click",valid);
      op231.addEventListener("click",puntaje);
      op231.addEventListener("click",remover23);
     }
     var opcion232=function(e){
      var op232=document.createElement("INPUT");
      op232.setAttribute("type", "button");
      op232.setAttribute("id", "boton232");
      op232.setAttribute("class","boton2");
      op232.setAttribute("value", "B. "+ reale2 + " litro(s)");
      document.getElementById("opciones23").appendChild(op232);
      var valid =function(e){
        b="B. "+ reale2 + " litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos23");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos24");
         cont.setAttribute("class","puntaje2");
          cont.appendChild(poino);  
         }
      op232.addEventListener("click",valid);
      op232.addEventListener("click",puntaje);
      op232.addEventListener("click",remover23);
    }
    var opcion233=function(e){
      var op233=document.createElement("INPUT");
      op233.setAttribute("type", "button");
      op233.setAttribute("id", "boton233");
      op233.setAttribute("class","boton3");
      op233.setAttribute("value", "C. "+ ale2 + " litro(s)");
      document.getElementById("opciones23").appendChild(op233);
      var valid =function(e){
        c="C. "+ ale2 + " litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos23");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos24");
          cont.appendChild(poino);
          cont.setAttribute("class","puntaje2");   
         }
      op233.addEventListener("click",valid);
      op233.addEventListener("click",puntaje);
      op233.addEventListener("click",remover23);
    }
    var opcion234=function(e){
      var op234=document.createElement("INPUT");
      op234.setAttribute("type", "button");
      op234.setAttribute("id", "boton234");
      op234.setAttribute("class","boton4");
      op234.setAttribute("value", "D. "+ ale + " litro(s)");
      document.getElementById("opciones23").appendChild(op234);
      var valid =function(e){
        d= "D. "+ ale + " litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos23");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos24");
          cont.appendChild(poino);
          cont.setAttribute("class","puntaje2");
         }
      op234.addEventListener("click",valid);
      op234.addEventListener("click",puntaje);
      op234.addEventListener("click",remover23);
    }
    var guardar=function(e){
        var con=document.getElementById("p32");
        con.setAttribute("value", ale + " - " + ale2);
      if (a =="A. " + reale + " litro(s)"){
       var conte=document.getElementById("r32");
       conte.setAttribute("value","A. " + reale + " litro(s)");
     } else if (b =="B. " + reale2 + " litro(s)"){
      var conte=document.getElementById("r32");
      conte.setAttribute("value","B. " + reale2 + " litro(s)");
     }
     else if (c =="C. " + ale2 + " litro(s)"){
      var conte=document.getElementById("r32");
      conte.setAttribute("value","C. " + ale2 + " litro(s)");
     }
     else if (d =="D. " + ale + " litro(s)"){
      var conte=document.getElementById("r32");
      conte.setAttribute("value","D. " + ale + " litro(s)");
     }
   }
    var remover23=function(e){
      guardar(e);
      if(resul>4 && resul<8){
    var chao =document.getElementById("problem23");
      chao.remove(chao);
    var chao2 =document.getElementById("opciones23");
            chao2.remove(chao2);
      problem4(e);
      crear4(e);
      opciones4(e);
           }
           else if(resul==3){
            var chao2 =document.getElementById("opciones23");
            chao2.remove(chao2);
             gameover2(e);
           }
           else if(resul==9){
            var chao =document.getElementById("problem23");
            chao.remove(chao);
            var chao4 =document.getElementById("opciones23");
            chao4.remove(chao4);
            var chao2 =document.getElementById("nivel22");
            chao2.remove(chao2);  
             nivel3(e);
             var chao3 =document.getElementById("puntos24");
            chao3.remove(chao3);  
           }
         }
     opcion231(e);
     salto(e);
     salto(e);
     opcion232(e);
     salto(e);
     salto(e);
     opcion233(e);
     salto(e);
     salto(e);
     opcion234(e); 
    }
     //problem4
     var problem4=function(e){
        var salto= function(e){
            var saltico= document.createElement("br");
            document.getElementById("problem24").appendChild(saltico);}
       salto(e);
       if(ale<ale2){
        reale2=ale2 + ale;}
        else if(ale>ale2){
         reale2=ale + ale2;}
    do {
     ale=Math.floor(Math.random()*45)+3;
    ale2=Math.floor(Math.random()*45)+3;  
    do{
        ale=Math.floor(Math.random()*45)+3;
        ale2=Math.floor(Math.random()*45)+3;   
        }while(ale<ale2)  
      do{
        if(ale==ale2){
         ale2=Math.floor(Math.random()*45)+3;}
        }while(ale==ale2);
       if(ale<ale2){
       reale2=ale2 + ale;}
       else if(ale>ale2){
        reale2=ale + ale2;
        reale= ale - ale2;}
    }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=3);
          var problem=document.createTextNode("4. Juan compró un juguete de " + ale2 +" dolar(es), si tenía "+ ale +" dolar(es), ¿cuánto dinero le sobró?" );
            var conte=document.getElementById("problem24");
             conte.appendChild(problem);
             conte.setAttribute("align","center");
             conte.setAttribute("class","problem");
     }
    //crear4
   var crear4=function(e){
    var elemento= document.createElement("div");
    elemento.setAttribute("id","form24");
    document.getElementById("opciones24").appendChild(elemento);
  }
  //opciones4
  var opciones4=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("form24").appendChild(saltico);}
     var opcion241=function(e){
       var op241=document.createElement("INPUT");
       op241.setAttribute("type", "button");
       op241.setAttribute("id", "boton241");
       op241.setAttribute("class", "boton1");
       op241.setAttribute("value", "A. "+ reale +" dolar(es)");
       document.getElementById("form24").appendChild(op241);
       var valid =function(e){
           a="A. "+ reale +" dolar(es)";
          alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 1));
          resul = resul + puntos2 + 1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos24");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos25");
         cont.setAttribute("class","puntaje2");
          cont.appendChild(poino);  
         }
      op241.addEventListener("click",valid);
      op241.addEventListener("click",puntaje);
      op241.addEventListener("click",remover24);
     }
     var opcion242=function(e){
      var op242=document.createElement("INPUT");
      op242.setAttribute("type", "button");
      op242.setAttribute("id", "boton242");
      op242.setAttribute("class", "boton2");
      op242.setAttribute("value", "B. "+ ale +" dolar(es)");
      document.getElementById("form24").appendChild(op242);
      var valid =function(e){
          b="B. "+ ale +" dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos24");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos25");
         cont.setAttribute("class","puntaje2");
          cont.appendChild(poino);  
         }
      op242.addEventListener("click",valid);
      op242.addEventListener("click",puntaje);
      op242.addEventListener("click",remover24);
    }
    var opcion243=function(e){
      var op243=document.createElement("INPUT");
      op243.setAttribute("type", "button");
      op243.setAttribute("id", "boton243");
      op243.setAttribute("class", "boton3");
      op243.setAttribute("value", "C. "+ ale2 +" dolar(es)");
      document.getElementById("form24").appendChild(op243);
      var valid =function(e){
          c="C. "+ ale2 +" dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos24");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos25");
         cont.setAttribute("class","puntaje2");
          cont.appendChild(poino);  
         }
      op243.addEventListener("click",valid);
      op243.addEventListener("click",puntaje);
      op243.addEventListener("click",remover24);
    }
    var opcion244=function(e){
      var op244=document.createElement("INPUT");
      op244.setAttribute("type", "button");
      op244.setAttribute("id", "boton244");
      op244.setAttribute("class", "boton4");
      op244.setAttribute("value", "D. "+ reale2 +" dolar(es)");
      document.getElementById("form24").appendChild(op244);
      var valid =function(e){
          d="D. "+ reale2 +" dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos24");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos25");
         cont.setAttribute("class","puntaje2");
          cont.appendChild(poino); 
         }
      op244.addEventListener("click",valid);
      op244.addEventListener("click",puntaje);
      op244.addEventListener("click",remover24);
    }
    var guardar=function(e){
        var con=document.getElementById("p42");
        con.setAttribute("value", ale + " - " + ale2);
        if (a =="A. " + reale + " dolar(es)"){
         var conte=document.getElementById("r42");
         conte.setAttribute("value","A. "+ reale +" dolar(es)");
       } else if (b =="B. "+ ale +" dolar(es)"){
        var conte=document.getElementById("r42");
        conte.setAttribute("value","B. "+ ale +" dolar(es)");
       }
       else if (c =="C. "+ ale2 +" dolar(es)"){
        var conte=document.getElementById("r42");
        conte.setAttribute("value","C. "+ ale2 +" dolar(es)");
       }
       else if (d =="D. "+ reale2 +" dolar(es)"){
        var conte=document.getElementById("r42");
        conte.setAttribute("value","D. "+ reale2 +" dolar(es)");
       }
     }
    var remover24=function(e){
        guardar(e);
      if(resul>5 && resul<9){
        var chao =document.getElementById("problem24");
          chao.remove(chao);
          var chao2 =document.getElementById("opciones24");
          chao2.remove(chao2);
          problem5(e);
          crear5(e);
          opciones5(e);
               }
               else if(resul<=5){
                 gameover2(e);
               }
               else if(resul==9){
                var chao =document.getElementById("problem24");
                chao.remove(chao);
                var chao2 =document.getElementById("nivel2");
                chao2.remove(chao2);  
                 nivel3(e);
               }
         }
     opcion241(e);
     salto(e);
     salto(e);
     opcion242(e);
     salto(e);
     salto(e);
     opcion243(e);
     salto(e);
     salto(e);
     opcion244(e);
    }
   //problem5
   var problem5=function(e){
    var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem25").appendChild(saltico);}
   salto(e);
   if(ale<ale2){
    reale2=ale2 + ale;}
    else if(ale>ale2){
     reale2=ale + ale2;}
do {
 ale=Math.floor(Math.random()*45)+3;
ale2=Math.floor(Math.random()*45)+3;  
do{
    ale=Math.floor(Math.random()*45)+3;
    ale2=Math.floor(Math.random()*45)+3;   
    }while(ale<ale2)  
  do{
    if(ale==ale2){
     ale2=Math.floor(Math.random()*45)+3;}
    }while(ale==ale2);
   if(ale<ale2){
   reale2=ale2 + ale;}
   else if(ale>ale2){
    reale2=ale + ale2;
    reale= ale - ale2;}
}while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=3);
      var problem=document.createTextNode("5. Pedro tenía "+ ale + " dolar(es) y compró un juguete que le costó "+ ale2 +" dolar(es). ¿Cuánto dinero le sobró?");
        var conte=document.getElementById("problem25");
         conte.appendChild(problem);
         conte.setAttribute("align","center");
         conte.setAttribute("class","problem");
   }
    //crear5
    var crear5=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form25");
      document.getElementById("opciones25").appendChild(elemento);
    }
   //opciones5
  var opciones5=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("form25").appendChild(saltico);}
     var opcion251=function(e){
       var op251=document.createElement("INPUT");
       op251.setAttribute("type", "button");
       op251.setAttribute("id", "boton251");
       op251.setAttribute("class", "boton1");
       op251.setAttribute("value","A. "+ ale2 +" dolar(es)");
       document.getElementById("form25").appendChild(op251);
       var valid =function(e){
           a="A. "+ ale2 +" dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos25");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos26");
          cont.appendChild(poino);  
         }
      op251.addEventListener("click",valid);
      op251.addEventListener("click",puntaje);
      op251.addEventListener("click",remover25);
     }
     var opcion252=function(e){
      var op252=document.createElement("INPUT");
      op252.setAttribute("type", "button");
      op252.setAttribute("id", "boton252");
      op252.setAttribute("class", "boton2");
      op252.setAttribute("value", "B. "+ reale2 +" dolar(es)");
      document.getElementById("form25").appendChild(op252);
      var valid =function(e){
          b="B. "+ reale2 +" dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos25");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos26");
          cont.appendChild(poino);  
          puntos = resul;
         }
      op252.addEventListener("click",valid);
      op252.addEventListener("click",puntaje);
      op252.addEventListener("click",remover25);
    }
    var opcion253=function(e){
      var op253=document.createElement("INPUT");
      op253.setAttribute("type", "button");
      op253.setAttribute("id", "boton253");
      op253.setAttribute("class", "boton3");
      op253.setAttribute("value", "C. "+ reale +" dolar(es)");
      document.getElementById("form25").appendChild(op253);
      var valid =function(e){
          c="C. "+ reale +" dolar(es)";
          alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 1));
          resul = resul + puntos2 + 1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos25");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos26");
          cont.appendChild(poino);  
         }
      op253.addEventListener("click",valid);
      op253.addEventListener("click",puntaje);
      op253.addEventListener("click",remover25);
    }
    var opcion254=function(e){
      var op254=document.createElement("INPUT");
      op254.setAttribute("type", "button");
      op254.setAttribute("id", "boton254");
      op254.setAttribute("class", "boton4");
      op254.setAttribute("value", "D. "+ ale +" dolar(es)");
      document.getElementById("form25").appendChild(op254);
      var valid =function(e){
          d="D. "+ ale +" dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos25");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos26");
          cont.appendChild(poino); 
         }
      op254.addEventListener("click",valid);
      op254.addEventListener("click",puntaje);
      op254.addEventListener("click",remover25);
    }
    var guardar=function(e){
        var con=document.getElementById("p52");
        con.setAttribute("value", ale + " - " + ale2);
        if (a =="A. " + ale2 + " dolar(es)"){
         var conte=document.getElementById("r52");
         conte.setAttribute("value","A. "+ ale2 +" dolar(es)");
       } else if (b =="B. "+ reale2 +" dolar(es)"){
        var conte=document.getElementById("r52");
        conte.setAttribute("value","B. "+ reale2 +" dolar(es)");
       }
       else if (c =="C. "+ reale +" dolar(es)"){
        var conte=document.getElementById("r52");
        conte.setAttribute("value","C. "+ reale +" dolar(es)");
       }
       else if (d =="D. "+ ale +" dolar(es)"){
        var conte=document.getElementById("r52");
        conte.setAttribute("value","D. "+ ale +" dolar(es)");
       }
     }
    var remover25=function(e){
        guardar(e);
     if(resul<9){
                 gameover2(e);
               }
               else if(resul==9){
                var chao =document.getElementById("problem25");
                chao.remove(chao); 
                var chao2 =document.getElementById("nivel2");
                chao2.remove(chao2);  
                 nivel3(e);
               }
         }
     opcion251(e);
     salto(e);
     salto(e);
     opcion252(e);
     salto(e);
     salto(e);
     opcion253(e);
     salto(e);
     salto(e);
     opcion254(e); 
    }
    //termina el test-nivel2
   var gameover2=function(e){
    var chao=document.getElementById("nivel2");
     chao.remove(chao);
     resultados2(e);
     regresar2(e);
  }
  //estadistica de la prueba 1
  var resultados2=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("final2").appendChild(saltico);}
      salto(e);
      salto(e);
      salto(e);
    var elemento=document.createTextNode(valor  + " el test ha terminado,su resultado fue: " + resul);
   document.getElementById("final2").appendChild(elemento);
   salto(e);
   salto(e);
  }
  // returnInicio
  var regresar2=function(e){
    var boton=document.createElement("INPUT");
    boton.setAttribute("type", "submit");
    boton.setAttribute("name", "enviar");
    boton.setAttribute("id", "botonreset");
    document.getElementById("final2").appendChild(boton); 
  }
    }
    //empieza nivel 3
    var nivel3=function(e){
      var entrada=function(e){
        var nive=document.createTextNode("Nivel 3");
         var contenido=document.getElementById("intro3");
          contenido.appendChild(nive);
          contenido.setAttribute("class","intro3");
     var quitar=function(e){
           var chao = document.getElementById("intro3");
          chao.remove(chao);
          nivel3(e);
          problem31(e);
          crear1(e);
          opciones(e);
          puntaje(e);
         }
          contenido.addEventListener("click",quitar);
             } 
     entrada(e);
      var nivel3=function(e){
        var nivel=function(e){
      var nivel=document.createTextNode("Nivel 3");
      var contenido=document.getElementById("nivel33");
       contenido.appendChild(nivel);
       contenido.setAttribute("align","center");
       contenido.setAttribute("class","nivel3");}
      nivel(e);
      }
       //problema1
    var problem31=function(e){
ale=Math.floor(Math.random()*45)+5;
ale2=Math.floor(Math.random()*45)+5; 
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem31").appendChild(saltico);}
   salto(e);
   if(ale<ale2){
    reale2=ale2 - ale;}
    else if(ale>ale2){
     reale2=ale - ale2;}
do {
 ale=Math.floor(Math.random()*45)+5;
ale2=Math.floor(Math.random()*45)+5;    
  do{
    if(ale==ale2){
     ale2=Math.floor(Math.random()*45)+5;}
    }while(ale==ale2);
   reale= ale + ale2;
   if(ale<ale2){
   reale2=ale2 - ale;}
   else if(ale>ale2){
    reale2=ale - ale2;}
}while(reale2==ale || reale2==ale2 || reale<=5 || reale2<=5);
      var problem=document.createTextNode("1. Jorge tenía " + ale + " dolar(es), le regalaron cierta cantidad y completó "+ reale +" dolar(es). ¿Cuánto dinero recibió Jorge?");
        var conte=document.getElementById("problem31");
         conte.appendChild(problem);
         conte.setAttribute("align","center");
         conte.setAttribute("class","problem");  }  
     //crear1
     var crear1=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form31");
      document.getElementById("opciones31").appendChild(elemento);
    }
     //opciones1
     var opciones=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("form31").appendChild(saltico);}
        var opcion31=function(e){
         var op31=document.createElement("INPUT");
         op31.setAttribute("type", "button");
         op31.setAttribute("id", "boton31");
         op31.setAttribute("class", "boton1");
         op31.setAttribute("value", "A. " + ale +" dolar(es)");
         document.getElementById("form31").appendChild(op31);
         var valid =function(e){
           a="A. " + ale +" dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            resul = resul + puntos1 ;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos31");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos32");
           cont.setAttribute("class","puntaje3");
            cont.appendChild(poino);  
           }
        op31.addEventListener("click",valid);
        op31.addEventListener("click",puntaje);
        op31.addEventListener("click",remover31);
       }
       var opcion32=function(e){
        var op32=document.createElement("INPUT");
        op32.setAttribute("type", "button");
        op32.setAttribute("id", "boton32");
        op32.setAttribute("class", "boton2");
        op32.setAttribute("value","B. " + ale2 +" dolar(es)");
        document.getElementById("form31").appendChild(op32);
        var valid =function(e){
          b="B. " + ale2 +" dolar(es)";
            alert("Muy bien respuesta correcta, puntos ganados:" +" "+ (puntos2 + 2));
            resul = resul + puntos2 + 2;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos31");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos32");
            cont.appendChild(poino);
            cont.setAttribute("class","puntaje3");
            puntos = resul;
           }
        op32.addEventListener("click",valid);
        op32.addEventListener("click",puntaje);
        op32.addEventListener("click",remover31);
      }
      var opcion33=function(e){
        var op33=document.createElement("INPUT");
        op33.setAttribute("type", "button");
        op33.setAttribute("id", "boton33");
        op33.setAttribute("class", "boton3");
        op33.setAttribute("value", "C. " + reale +" dolar(es)");
        document.getElementById("form31").appendChild(op33);
        var valid =function(e){
          c="C. " + reale +" dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            resul = resul + puntos1;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos31");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos32");
            cont.appendChild(poino);
            cont.setAttribute("class","puntaje3");
            puntos = resul;  
           }
        op33.addEventListener("click",valid);
        op33.addEventListener("click",puntaje);
        op33.addEventListener("click",remover31);
      }
      var opcion34=function(e){
        var op34=document.createElement("INPUT");
        op34.setAttribute("type", "button");
        op34.setAttribute("id", "boton34");
        op34.setAttribute("class", "boton4");
        op34.setAttribute("value", "D. " + reale2 +" dolar(es)");
        document.getElementById("form31").appendChild(op34);
        var valid =function(e){
        d="D. " + reale2 +" dolar(es)";
            alert("Esta no es la respuesta, sigue intentando");
            resul = resul + puntos1;  
        }
        var puntaje= function(e){
           var element=document.getElementById("puntos31");
           element.remove(element);
           var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
           var cont=document.getElementById("puntos32");
            cont.appendChild(poino);
            cont.setAttribute("class","puntaje3");
            puntos = resul;  
           }
        op34.addEventListener("click",valid);
        op34.addEventListener("click",puntaje);
        op34.addEventListener("click",remover31);
      }
      var guardar=function(e){
        var con=document.getElementById("p13");
        con.setAttribute("value", reale + " - " + ale);
        if (a =="A. " + ale + " dolar(es)"){
         var conte=document.getElementById("r13");
         conte.setAttribute("value","A. " + ale + " dolar(es)");
       } else if (b =="B. " + ale2 + " dolar(es)"){
        var conte=document.getElementById("r13");
        conte.setAttribute("value","B. " + ale2 + " dolar(es)");
       }
       else if (c =="C. " + reale + " dolar(es)"){
        var conte=document.getElementById("r13");
        conte.setAttribute("value","C. " + reale + " dolar(es)");
       }
       else if (d =="D. " + reale2 + " dolar(es)"){
        var conte=document.getElementById("r13");
        conte.setAttribute("value","D. " + reale2 + " dolar(es)");
       }
     }
      var remover31=function(e){
        guardar(e);
        var chao =document.getElementById("problem31");
        chao.remove(chao);
        var chao2 =document.getElementById("opciones31");
        chao2.remove(chao2);
        problem32(e);
        crear2(e);
        opciones2(e);
           }
       opcion31(e);
       salto(e);
       salto(e);
       opcion32(e);
       salto(e);
       salto(e);
       opcion33(e);
       salto(e);
       salto(e);
       opcion34(e);  
      }
       //puntaje1
       var puntaje= function(e){
        var poino=document.createTextNode(valor+ ", tu puntaje es: " + resul);
        var cont=document.getElementById("puntos31");
        cont.setAttribute("class","puntaje3");
         cont.appendChild(poino);  
        }
            //problema2
            var problem32=function(e){
              ale=Math.floor(Math.random()*45)+5;
              ale2=Math.floor(Math.random()*45)+5; 
                 if(ale<ale2){
                  reale2=ale2 - ale;}
                  else if(ale>ale2){
                   reale2=ale - ale2;}
              do {
               ale=Math.floor(Math.random()*45)+5;
              ale2=Math.floor(Math.random()*45)+5;    
                do{
                  if(ale==ale2){
                   ale2=Math.floor(Math.random()*45)+5;}
                  }while(ale==ale2);
                 reale= ale + ale2;
                 if(ale<ale2){
                 reale2=ale2 - ale;}
                 else if(ale>ale2){
                  reale2=ale - ale2;}
              }while(reale2==ale || reale2==ale2 || reale<=5 || reale2<=5);
                    var problem=document.createTextNode("2. Un tanque tiene  "+ ale +" litro(s) de agua, si en la mañana le agregan cierta cantidad se completan "+reale +" litro(s), ¿cuántos litros de agua le agregaron en la mañana?");
                      var conte=document.getElementById("problem32");
                       conte.appendChild(problem);
                       conte.setAttribute("align","center");
                       conte.setAttribute("class","problem");  }
             //crear2
             var crear2=function(e){
              var elemento= document.createElement("div");
              elemento.setAttribute("id","form32");
              document.getElementById("opciones32").appendChild(elemento);
            }
             //opciones2
             var opciones2=function(e){
              var salto= function(e){
                var saltico= document.createElement("br");
                document.getElementById("form32").appendChild(saltico);}
                var opcion321=function(e){
                 var op31=document.createElement("INPUT");
                 op31.setAttribute("type", "button");
                 op31.setAttribute("id", "boton321");
                 op31.setAttribute("class", "boton1");
                 op31.setAttribute("value", "A. " + reale2 + " litro(s)");
                 document.getElementById("form32").appendChild(op31);
                 var valid =function(e){
                   a="A. " + reale2 + " litro(s)";
                    alert("Esta no es la respuesta, sigue intentando");
                    resul = resul + puntos1 ;  
                }
                var puntaje= function(e){
                   var element=document.getElementById("puntos32");
                   element.remove(element);
                   var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
                   var cont=document.getElementById("puntos33");
                   cont.setAttribute("class","puntaje3");
                    cont.appendChild(poino);  
                   }
                op31.addEventListener("click",valid);
                op31.addEventListener("click",puntaje);
                op31.addEventListener("click",remover32);
               }
               var opcion322=function(e){
                var op32=document.createElement("INPUT");
                op32.setAttribute("type", "button");
                op32.setAttribute("id", "boton322");
                op32.setAttribute("class", "boton2");
                op32.setAttribute("value", "B. "+ale2+" litro(s)");
                document.getElementById("form32").appendChild(op32);
                var valid =function(e){
                  b= "B. "+ale2+" litro(s)";
                    alert("Muy bien respuesta correcta, puntos ganados:" +" "+ (puntos2 + 2));
                    resul = resul + puntos2 + 2;  
                }
                var puntaje= function(e){
                   var element=document.getElementById("puntos32");
                   element.remove(element);
                   var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
                   var cont=document.getElementById("puntos33");
                    cont.appendChild(poino);  
                    cont.setAttribute("class","puntaje3");
                   }
                op32.addEventListener("click",valid);
                op32.addEventListener("click",puntaje);
                op32.addEventListener("click",remover32);
              }
              var opcion323=function(e){
                var op33=document.createElement("INPUT");
                op33.setAttribute("type", "button");
                op33.setAttribute("id", "boton323");
                op33.setAttribute("class", "boton3");
                op33.setAttribute("value", "C. "+ale+" litro(s)");
                document.getElementById("form32").appendChild(op33);
                var valid =function(e){
                  c="C. "+ale+" litro(s)";
                    alert("Esta no es la respuesta, sigue intentando");
                    resul = resul + puntos1;  
                }
                var puntaje= function(e){
                   var element=document.getElementById("puntos32");
                   element.remove(element);
                   var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
                   var cont=document.getElementById("puntos33");
                    cont.appendChild(poino);
                    cont.setAttribute("class","puntaje3");  
                   }
                op33.addEventListener("click",valid);
                op33.addEventListener("click",puntaje);
                op33.addEventListener("click",remover32);
              }
              var opcion324=function(e){
                var op34=document.createElement("INPUT");
                op34.setAttribute("type", "button");
                op34.setAttribute("id", "boton324");
                op34.setAttribute("class", "boton4");
                op34.setAttribute("value", "D. "+reale+" litro(s)");
                document.getElementById("form32").appendChild(op34);
                var valid =function(e){
                  d="D. "+reale+" litro(s)";
                    alert("Esta no es la respuesta, sigue intentando");
                    resul = resul + puntos1;  
                }
                var puntaje= function(e){
                   var element=document.getElementById("puntos32");
                   element.remove(element);
                   var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
                   var cont=document.getElementById("puntos33");
                    cont.appendChild(poino);
                     cont.setAttribute("class","puntaje3");
                    puntos = resul;  
                   }
                op34.addEventListener("click",valid);
                op34.addEventListener("click",puntaje);
                op34.addEventListener("click",remover32);
              }
              var guardar=function(e){
                var con=document.getElementById("p23");
                con.setAttribute("value", reale + " - " + ale);
                if (a =="A. " + reale2 + " litro(s)"){
                 var conte=document.getElementById("r23");
                 conte.setAttribute("value","A. " + reale2 + " litro(s)");
               } else if (b == "B. "+ale2+" litro(s)"){
                var conte=document.getElementById("r23");
                conte.setAttribute("value", "B. "+ale2+" litro(s)");
               }
               else if (c =="C. "+ale+" litro(s)"){
                var conte=document.getElementById("r23");
                conte.setAttribute("value","C. "+ale+" litro(s)");
               }
               else if (d =="D. "+reale+" litro(s)"){
                var conte=document.getElementById("r23");
                conte.setAttribute("value","D. "+reale+" litro(s)");
               }
             }
              var remover32=function(e){
                guardar(e);
                var chao =document.getElementById("problem32");
                chao.remove(chao);
                var chao2 =document.getElementById("opciones32");
                chao2.remove(chao2);
                problem33(e);
                crear3(e);
                opciones3(e);
                   }
               opcion321(e);
               salto(e);
               salto(e);
               opcion322(e);
               salto(e);
               salto(e);
               opcion323(e);
               salto(e);
               salto(e);
               opcion324(e);
              }  
               //problema3
            var problem33=function(e){
              ale=Math.floor(Math.random()*45)+5;
              ale2=Math.floor(Math.random()*45)+5; 
                 if(ale<ale2){
                  reale2=ale2 - ale;}
                  else if(ale>ale2){
                   reale2=ale - ale2;}
              do {
               ale=Math.floor(Math.random()*45)+5;
              ale2=Math.floor(Math.random()*45)+5;    
                do{
                  if(ale==ale2){
                   ale2=Math.floor(Math.random()*45)+5;}
                  }while(ale==ale2);
                 reale= ale + ale2;
                 if(ale<ale2){
                 reale2=ale2 - ale;}
                 else if(ale>ale2){
                  reale2=ale - ale2;}
              }while(reale2==ale || reale2==ale2 || reale<=5 || reale2<=5);
                    var problem=document.createTextNode("3. María completó "+reale+" dolar(es) después de que le regalaran cierta cantidad de dinero.  Si antes tenía "+ ale2 +" dolar(es), ¿cuánto dinero recibió María?");
                      var conte=document.getElementById("problem33");
                       conte.appendChild(problem);
                       conte.setAttribute("align","center");
                       conte.setAttribute("class","problem"); }
             //crear3
             var crear3=function(e){
              var elemento= document.createElement("div");
              elemento.setAttribute("id","form33");
              document.getElementById("opciones33").appendChild(elemento);
            }
             //opciones3
             var opciones3=function(e){
              var salto= function(e){
                var saltico= document.createElement("br");
                document.getElementById("form33").appendChild(saltico);}
                var opcion321=function(e){
                 var op31=document.createElement("INPUT");
                 op31.setAttribute("type", "button");
                 op31.setAttribute("id", "boton331");
                 op31.setAttribute("class", "boton1");
                 op31.setAttribute("value", "A. "+ale2+" dolar(es)");
                 document.getElementById("form33").appendChild(op31);
                 var valid =function(e){
                   a="A. "+ale2+" dolar(es)";
                    alert("Esta no es la respuesta, sigue intentando");
                    resul = resul + puntos1 ;  
                }
                var puntaje= function(e){
                   var element=document.getElementById("puntos33");
                   element.remove(element);
                   var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
                   var cont=document.getElementById("puntos34");
                   cont.setAttribute("class","puntaje3");
                    cont.appendChild(poino);  
                   }
                op31.addEventListener("click",valid);
                op31.addEventListener("click",puntaje);
                op31.addEventListener("click",remover33);
               }
               var opcion322=function(e){
                var op32=document.createElement("INPUT");
                op32.setAttribute("type", "button");
                op32.setAttribute("class","boton322")
                op32.setAttribute("class", "boton2");
                op32.setAttribute("value", "B. "+ reale+" dolar(es)");
                document.getElementById("form33").appendChild(op32);
                var valid =function(e){
                  b="B. "+ reale+" dolar(es)";
                  alert("Esta no es la respuesta, sigue intentando");
                    resul = resul + puntos1; 
                }
                var puntaje= function(e){
                   var element=document.getElementById("puntos33");
                   element.remove(element);
                   var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
                   var cont=document.getElementById("puntos34");
                    cont.appendChild(poino);  
                    cont.setAttribute("class","puntaje3");
                   }
                op32.addEventListener("click",valid);
                op32.addEventListener("click",puntaje);
                op32.addEventListener("click",remover33);
              }
              var opcion323=function(e){
                var op33=document.createElement("INPUT");
                op33.setAttribute("type", "button");
                op33.setAttribute("id", "boton323");
                op33.setAttribute("class", "boton3");
                op33.setAttribute("value", "C. "+reale2+" dolar(es)");
                document.getElementById("form33").appendChild(op33);
                var valid =function(e){
                  c= "C. "+reale2+" dolar(es)";
                    alert("Esta no es la respuesta, sigue intentando");
                    resul = resul + puntos1;  
                }
                var puntaje= function(e){
                   var element=document.getElementById("puntos33");
                   element.remove(element);
                   var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
                   var cont=document.getElementById("puntos34");
                    cont.appendChild(poino);
                    cont.setAttribute("class","puntaje3");  
                   }
                op33.addEventListener("click",valid);
                op33.addEventListener("click",puntaje);
                op33.addEventListener("click",remover33);
              }
              var opcion324=function(e){
                var op34=document.createElement("INPUT");
                op34.setAttribute("type", "button");
                op34.setAttribute("id", "boton324");
                op34.setAttribute("class", "boton4");
                op34.setAttribute("value", "D. "+ ale+" dolar(es)");
                document.getElementById("form33").appendChild(op34);
                var valid =function(e){
                  d="D. "+ ale+" dolar(es)";
                    alert("Muy bien respuesta correcta, puntos ganados:" +" "+ (puntos2 + 2));
                    resul = resul + puntos2 + 2; 
                }
                var puntaje= function(e){
                   var element=document.getElementById("puntos33");
                   element.remove(element);
                   var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
                   var cont=document.getElementById("puntos34");
                    cont.appendChild(poino);
                     cont.setAttribute("class","puntaje3");
                   }
                op34.addEventListener("click",valid);
                op34.addEventListener("click",puntaje);
                op34.addEventListener("click",remover33);
              }
              var guardar=function(e){
                var con=document.getElementById("p33");
                con.setAttribute("value", reale + " - " + ale2);
                if (a =="A. " + ale2 + " dolar(es)"){
                 var conte=document.getElementById("r33");
                 conte.setAttribute("value","A. " + ale2 + " dolar(es)");
               } else if (b =="B. " + reale + " dolar(es)"){
                var conte=document.getElementById("r33");
                conte.setAttribute("value","B. " + reale + " dolar(es)");
               }
               else if (c =="C. " + reale2 + " dolar(es)"){
                var conte=document.getElementById("r33");
                conte.setAttribute("value","C. " + reale2 + " dolar(es)");
               }
               else if (d =="D. " + ale + " dolar(es)"){
                var conte=document.getElementById("r33");
                conte.setAttribute("value","D. " + ale + " dolar(es)");
               }
             }
              var remover33=function(e){
                guardar(e);
                if(resul>9 && resul<18){
               var chao =document.getElementById("problem33");
               chao.remove(chao);
               var chao2 =document.getElementById("opciones33");
               chao2.remove(chao2);
                problem34(e);
                crear4(e);
                opciones4(e);
                  }
                  else if(resul==9){
                    gameover3(e);
                  }
                  else if(resul==18){
                   var chao =document.getElementById("problem33");
                   chao.remove(chao);
                   var chao4 =document.getElementById("opciones33");
                  chao4.remove(chao4);
                   var chao2 =document.getElementById("nivel3");
                   chao2.remove(chao2);  
                    nivel4(e);
                   }}
               opcion321(e);
               salto(e);
               salto(e);
               opcion322(e);
               salto(e);
               salto(e);
               opcion323(e);
               salto(e);
               salto(e);
               opcion324(e);
              }  
              //problema 4
    var problem34=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem34").appendChild(saltico);}
   salto(e);
   ale=Math.floor(Math.random()*45)+5;
   ale2=Math.floor(Math.random()*45)+5;
   if(ale<ale2){
     reale2=ale2 - ale;}
     else if(ale>ale2){
      reale2=ale - ale2;}
   do {
   ale=Math.floor(Math.random()*45)+5;
   ale2=Math.floor(Math.random()*45)+5;    
   do{
     if(ale==ale2){
      ale2=Math.floor(Math.random()*45)+5;}
     }while(ale==ale2);
    reale= ale + ale2;
    if(ale<ale2){
    reale2=ale2 - ale;}
    else if(ale>ale2){
     reale2=ale - ale2;}
   }while(reale2==ale || reale2==ale2 || reale<=5 || reale2<=5);
   var problem2=document.createTextNode("4. ¿Cuánto dinero recibió María si con los " +ale+" dolar(es) que tenía completó "+ reale +" dolar(es)?");
   var contenido=document.getElementById("problem34");
    contenido.appendChild(problem2);
    contenido.setAttribute("align","center");
    contenido.setAttribute("class","problem");
       }
    //crear div opciones 4
    var crear4=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form34");
      document.getElementById("opciones34").appendChild(elemento);
    }
     //opciones 4
     var opciones4=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("form34").appendChild(saltico);}
        var opcion341=function(e){
         var op341=document.createElement("INPUT");
         op341.setAttribute("type", "button");
         op341.setAttribute("id", "boton341");
         op341.setAttribute("class", "boton1");
         op341.setAttribute("value","A. " + reale2 + " dolar(es)");
         document.getElementById("form34").appendChild(op341);
         var valid =function(e){
           a="A. " + reale2 + " dolar(es)";
             alert("Esta no es la respuesta, sigue intentando");
             resul = resul + puntos1;  
         }
         var puntaje= function(e){
            var element=document.getElementById("puntos34");
            element.remove(element);
            var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
            var cont=document.getElementById("puntos35");
            cont.setAttribute("class","puntaje3");
             cont.appendChild(poino);  
            }
         op341.addEventListener("click",valid);
         op341.addEventListener("click",puntaje);
         op341.addEventListener("click",remover3);
       }
       var opcion342=function(e){
        var op342=document.createElement("INPUT");
        op342.setAttribute("type", "button");
        op342.setAttribute("id", "boton342");
        op342.setAttribute("class", "boton2");
        op342.setAttribute("value","B." + ale + " dolar(es)");
        document.getElementById("form34").appendChild(op342);
        var valid =function(e){
          b ="B." + ale + " dolar(es)";
           alert("Esta no es la respuesta, sigue intentando");
           resul = resul + puntos1;  
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos34");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos35");
          cont.setAttribute("class","puntaje3");
           cont.appendChild(poino);  
          }
       op342.addEventListener("click",valid);
       op342.addEventListener("click",puntaje);
       op342.addEventListener("click",remover3);
      }
      var opcion343=function(e){
        var op343=document.createElement("INPUT");
        op343.setAttribute("type", "button");
        op343.setAttribute("id", "boton343");
        op343.setAttribute("class", "boton3");
        op343.setAttribute("value","C. " + reale + " dolar(es)");
        document.getElementById("form34").appendChild(op343);
        var valid =function(e){
          c="C. "+ reale+ " dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos34");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos35");
          cont.setAttribute("class","puntaje");
           cont.appendChild(poino);  
          }
       op343.addEventListener("click",valid);
       op343.addEventListener("click",puntaje);
       op343.addEventListener("click",remover3);
      }
      var opcion344=function(e){
        var op344=document.createElement("INPUT");
        op344.setAttribute("type", "button");
        op344.setAttribute("id", "boton344");
        op344.setAttribute("class", "boton4");
        op344.setAttribute("value","D. "+ ale2+ " dolar(es)" );
        document.getElementById("form34").appendChild(op344);
        var valid =function(e){
           d="D. " + ale2 + " dolar(es)";
           alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2+2));
           resul = resul + puntos2 + 2;
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos34");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos35");
          cont.setAttribute("class","puntaje3");
           cont.appendChild(poino);  
          }
       op344.addEventListener("click",valid);
       op344.addEventListener("click",puntaje);
       op344.addEventListener("click",remover3);
      }
      var guardar=function(e){
        var con=document.getElementById("p43");
        con.setAttribute("value", reale + " - " + ale);
        if (a =="A. " + reale2 + " dolar(es)"){
         var con=document.getElementById("r43");
         con.setAttribute("value","A. " + reale2 + " dolar(es)");
       } else if (b =="B." + ale + " dolar(es)"){
        var con=document.getElementById("r43");
        con.setAttribute("value","B." + ale + " dolar(es)");
       }
       else if (c =="C. " + reale + " dolar(es)"){
        var con=document.getElementById("r43");
        con.setAttribute("value","C. " + reale + " dolar(es)");
       }
       else if (d =="D. "+ ale2 + " dolar(es)"){
        var con=document.getElementById("r43");
        con.setAttribute("value","D. "+ ale2 + " dolar(es)");
       }
     }
      var remover3=function(e){
        guardar(e);
        if(resul>12 && resul<18){
          var chao =document.getElementById("problem34");
          chao.remove(chao);
          var chao2 =document.getElementById("opciones34");
              chao2.remove(chao2);
           problem35(e);
           crear5(e);
           opciones5(e);
             }
        else if(resul<=12){
              gameover3(e);
            }    
             else if(resul==18){
              var chao =document.getElementById("problem34");
              chao.remove(chao);
              var chao4 =document.getElementById("opciones34");
              chao4.remove(chao4);
              var chao2 =document.getElementById("nivel3");
              chao2.remove(chao2);  
               nivel4(e); 
             }
           }
       opcion341(e);
       salto(e);
       salto(e);
       opcion342(e);
       salto(e);
       salto(e);
       opcion343(e);
       salto(e);
       salto(e);
       opcion344(e);
       salto(e);  
      }
  //problema 5
    problem35=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem35").appendChild(saltico);}
   salto(e);
   ale=Math.floor(Math.random()*45)+5;
   ale2=Math.floor(Math.random()*45)+5;
   if(ale<ale2){
     reale2=ale2 - ale;}
     else if(ale>ale2){
      reale2=ale - ale2;}
   do {
   ale=Math.floor(Math.random()*45)+5;
   ale2=Math.floor(Math.random()*45)+5;    
   do{
     if(ale==ale2){
      ale2=Math.floor(Math.random()*45)+5;}
     }while(ale==ale2);
    reale= ale + ale2;
    if(ale<ale2){
    reale2=ale2 - ale;}
    else if(ale>ale2){
     reale2=ale - ale2;}
   }while(reale2==ale || reale2==ale2 || reale<=5 || reale2<=5);
   var problem2=document.createTextNode("5. ¿Cuánto dinero recibió María si con los " +ale+" dolar(es) que tenía completó "+ reale +" dolar(es)?");
   var contenido=document.getElementById("problem35");
    contenido.appendChild(problem2);
    contenido.setAttribute("align","center");
    contenido.setAttribute("class","problem");
       }
    //crear div opciones 5
    var crear5=function(e){
      var elemento= document.createElement("div");
      elemento.setAttribute("id","form35");
      document.getElementById("opciones35").appendChild(elemento);
    }
     //opciones 5
     var opciones5=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("form35").appendChild(saltico);}
        var opcion351=function(e){
         var op351=document.createElement("INPUT");
         op351.setAttribute("type", "button");
         op351.setAttribute("id", "boton351");
         op351.setAttribute("class", "boton1");
         op351.setAttribute("value","A. " + reale2 + " dolar(es)");
         document.getElementById("form35").appendChild(op351);
         var valid =function(e){
           a="A. " + reale2 + " dolar(es)";
             alert("Esta no es la respuesta, sigue intentando");
             resul = resul + puntos1;  
         }
         var puntaje= function(e){
            var element=document.getElementById("puntos35");
            element.remove(element);
            var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
            var cont=document.getElementById("puntos36");
            cont.setAttribute("class","puntaje3");
             cont.appendChild(poino);  
            }
         op351.addEventListener("click",valid);
         op351.addEventListener("click",puntaje);
         op351.addEventListener("click",remover3);
       }
       var opcion352=function(e){
        var op352=document.createElement("INPUT");
        op352.setAttribute("type", "button");
        op352.setAttribute("id", "boton352");
        op352.setAttribute("class", "boton2");
        op352.setAttribute("value","B." + ale + " dolar(es)");
        document.getElementById("form35").appendChild(op352);
        var valid =function(e){
          b ="B." + ale + " dolar(es)";
           alert("Esta no es la respuesta, sigue intentando");
           resul = resul + puntos1;  
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos35");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos36");
          cont.setAttribute("class","puntaje3");
           cont.appendChild(poino);  
          }
       op352.addEventListener("click",valid);
       op352.addEventListener("click",puntaje);
       op352.addEventListener("click",remover3);
      }
      var opcion353=function(e){
        var op353=document.createElement("INPUT");
        op353.setAttribute("type", "button");
        op353.setAttribute("id", "boton353");
        op353.setAttribute("class", "boton3");
        op353.setAttribute("value","C. " + reale + " dolar(es)");
        document.getElementById("form35").appendChild(op353);
        var valid =function(e){
          c="C. "+ reale+ " dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos35");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos36");
          cont.setAttribute("class","puntaje");
           cont.appendChild(poino);  
          }
       op353.addEventListener("click",valid);
       op353.addEventListener("click",puntaje);
       op353.addEventListener("click",remover3);
      }
      var opcion354=function(e){
        var op354=document.createElement("INPUT");
        op354.setAttribute("type", "button");
        op354.setAttribute("id", "boton354");
        op354.setAttribute("class", "boton4");
        op354.setAttribute("value","D. "+ ale2+ " dolar(es)" );
        document.getElementById("form35").appendChild(op354);
        var valid =function(e){
           d="D. " + ale2 + " dolar(es)";
           alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2+2));
           resul = resul + puntos2 + 2;
       }
       var puntaje= function(e){
          var element=document.getElementById("puntos35");
          element.remove(element);
          var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
          var cont=document.getElementById("puntos36");
          cont.setAttribute("class","puntaje3");
           cont.appendChild(poino);  
          }
       op354.addEventListener("click",valid);
       op354.addEventListener("click",puntaje);
       op354.addEventListener("click",remover3);
      }
      var guardar=function(e){
        var con=document.getElementById("p53");
        con.setAttribute("value", reale + " - " + ale);
        if (a =="A. " + reale2 + " dolar(es)"){
         var con=document.getElementById("r53");
         con.setAttribute("value","A. " + reale2 + " dolar(es)");
       } else if (b =="B." + ale + " dolar(es)"){
        var con=document.getElementById("r53");
        con.setAttribute("value","B." + ale + " dolar(es)");
       }
       else if (c =="C. " + reale + " dolar(es)"){
        var con=document.getElementById("r53");
        con.setAttribute("value","C. " + reale + " dolar(es)");
       }
       else if (d =="D. "+ ale2 + " dolar(es)"){
        var con=document.getElementById("r53");
        con.setAttribute("value","D. "+ ale2 + " dolar(es)");
       }
     }
      var remover3=function(e){
        guardar(e);
      if(resul<=17){
              gameover3(e);
            }    
             else if(resul==18){
              var chao =document.getElementById("problem35");
              chao.remove(chao);
              var chao4 =document.getElementById("opciones35");
              chao4.remove(chao4);
              var chao2 =document.getElementById("nivel3");
              chao2.remove(chao2);  
               nivel4(e); 
             }
           }
       opcion351(e);
       salto(e);
       salto(e);
       opcion352(e);
       salto(e);
       salto(e);
       opcion353(e);
       salto(e);
       salto(e);
       opcion354(e);
       salto(e);  
      }
                 //termina el test-nivel3
   var gameover3=function(e){
    var chao=document.getElementById("nivel3");
     chao.remove(chao);
     resultados3(e);
     regresar3(e);
  }
  //estadistica de la prueba 3
  var resultados3=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("final3").appendChild(saltico);}
      salto(e);
      salto(e);
      salto(e);
    var elemento=document.createTextNode(valor  + " el test ha terminado,su resultado fue: " + resul);
   document.getElementById("final3").appendChild(elemento);
   salto(e);
   salto(e);
  }
  // returnInicio
  var regresar3=function(e){
    var boton=document.createElement("INPUT");
    boton.setAttribute("type", "submit");
    boton.setAttribute("name", "enviar");
    boton.setAttribute("id", "botonreset");
    document.getElementById("final3").appendChild(boton); 
  }
    }
   //empieza nivel 4
   var nivel4=function(e){
    var entrada=function(e){
      var nive=document.createTextNode("Nivel 4");
       var contenido=document.getElementById("intro4");
        contenido.appendChild(nive);
        contenido.setAttribute("class","intro4");
   var quitar=function(e){
         var chao = document.getElementById("intro4");
        chao.remove(chao);
        nivel4(e);
        problem1(e);
        crear(e);
        opciones(e);
       }
        contenido.addEventListener("click",quitar);
           } 
   entrada(e);
    var nivel4=function(e){
      var nivel=function(e){
    var nivel=document.createTextNode("Nivel 4");
    var contenido=document.getElementById("nivel44");
     contenido.appendChild(nivel);
     contenido.setAttribute("align","center");
     contenido.setAttribute("class","nivel4");
    }
    nivel(e);
    }
  //problema1
  var problem1=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("problem41").appendChild(saltico);}
 salto(e);
 ale=Math.floor(Math.random()*45)+7;
 ale2=Math.floor(Math.random()*45)+7
    if(ale<ale2){
      reale2=ale2 + ale;}
      else if(ale>ale2){
       reale2=ale + ale2;}
  do {
   ale=Math.floor(Math.random()*45)+7;
  ale2=Math.floor(Math.random()*45)+7;  
  do{
      ale=Math.floor(Math.random()*45)+7;
      ale2=Math.floor(Math.random()*45)+7;   
      }while(ale<ale2)  
    do{
      if(ale==ale2){
       ale2=Math.floor(Math.random()*45)+7;}
      }while(ale==ale2);
     if(ale<ale2){
     reale2=ale2 + ale;}
     else if(ale>ale2){
      reale2=ale + ale2;
      reale= ale - ale2;}
  }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=5 || ale2<=7 || ale<=5);
  var problem=document.createTextNode("1. Milena compró un postre y le sobraron "+ reale +" dolar(es). Si tenía "+ale+" dolar(es), ¿cuánto le costó el postre?" );
    var conte=document.getElementById("problem41");
     conte.appendChild(problem);
     conte.setAttribute("align","center");
     conte.setAttribute("class","problem");
   }
   //puntaje1
   var puntaje= function(e){
    var poino=document.createTextNode(valor + ", tu puntaje es: " + resul);
    var cont=document.getElementById("puntos41");
    cont.setAttribute("class","puntaje4");
     cont.appendChild(poino);  
    }
   //crear
   var crear=function(e){
    var elemento= document.createElement("div");
    elemento.setAttribute("id","form41");
    document.getElementById("opciones41").appendChild(elemento);
  }
   //opciones1
   var opciones=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("form41").appendChild(saltico);}
      var opcion41=function(e){
       var op41=document.createElement("INPUT");
       op41.setAttribute("type", "button");
       op41.setAttribute("id", "boton41");
       op41.setAttribute("class", "boton1");
       op41.setAttribute("value","A. "+ reale2+" dolar(es)");
       document.getElementById("form41").appendChild(op41);
       var valid =function(e){
         a="A. "+ reale2+" dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1 ;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos41");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos42");
         cont.setAttribute("class","puntaje2");
          cont.appendChild(poino);  
         }
      op41.addEventListener("click",valid);
      op41.addEventListener("click",puntaje);
      op41.addEventListener("click",remover41);
     }
     var opcion42=function(e){
      var op42=document.createElement("INPUT");
      op42.setAttribute("type", "button");
      op42.setAttribute("id", "boton42");
      op42.setAttribute("class", "boton2");
      op42.setAttribute("value","B. "+ reale+" dolar(es)");
      document.getElementById("form41").appendChild(op42);
      var valid =function(e){
        b="B. "+ reale+" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;   
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos41");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos42");
          cont.appendChild(poino);
          cont.setAttribute("class","puntaje4");  
         }
      op42.addEventListener("click",valid);
      op42.addEventListener("click",puntaje);
      op42.addEventListener("click",remover41);
    }
    var opcion43=function(e){
      var op43=document.createElement("INPUT");
      op43.setAttribute("type", "button");
      op43.setAttribute("id", "boton43");
      op43.setAttribute("class", "boton3");
      op43.setAttribute("value","C. " + ale + " dolar(es)");
      document.getElementById("form41").appendChild(op43);
      var valid =function(e){
        c="C. " + ale + " dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos41");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos42");
          cont.appendChild(poino);  
          cont.setAttribute("class","puntaje4"); 
         }
      op43.addEventListener("click",valid);
      op43.addEventListener("click",puntaje);
      op43.addEventListener("click",remover41);
    }
    var opcion44=function(e){
      var op44=document.createElement("INPUT");
      op44.setAttribute("type", "button");
      op44.setAttribute("id", "boton44");
      op44.setAttribute("class","boton4")
      op44.setAttribute("value","D. "+ ale2+ " dolar(es)");
      document.getElementById("form41").appendChild(op44);
      var valid =function(e){
        d="D. "+ ale2+ " dolar(es)";
        alert("Muy bien respuesta correcta, puntos ganados:" +" "+ (puntos2 + 3));
        resul = resul + puntos2 + 3; 
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos41");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos42");
         cont.setAttribute("class","puntaje4");
          cont.appendChild(poino);
         }
      op44.addEventListener("click",valid);
      op44.addEventListener("click",puntaje);
      op44.addEventListener("click",remover41);
    }
    var guardar=function(e){
      var con=document.getElementById("p14");
      con.setAttribute("value", ale + " - " + reale);
      if (a =="A. " + reale2 + " dolar(es)"){
       var conte=document.getElementById("r14");
       conte.setAttribute("value","A. " + reale2 + " dolar(es)");
     } else if (b =="B. " + reale + " dolar(es)"){
      var conte=document.getElementById("r14");
      conte.setAttribute("value","B. " + reale + " dolar(es)");
     }
     else if (c =="C. " + ale + " dolar(es)"){
      var conte=document.getElementById("r14");
      conte.setAttribute("value","C. " + ale + " dolar(es)");
     }
     else if (d =="D. " + ale2 + " dolar(es)"){
      var conte=document.getElementById("r14");
      conte.setAttribute("value","D. " + ale2 + " dolar(es)");
     }
   }
    var remover41=function(e){
      guardar(e);
      var chao =document.getElementById("problem41");
      chao.remove(chao);
      var chao2 =document.getElementById("opciones41");
      chao2.remove(chao2);
      problem2(e);
      crear2(e);
      opciones2(e);
         }
     opcion41(e);
     salto(e);
     salto(e);
     opcion42(e);
     salto(e);
     salto(e);
     opcion43(e);
     salto(e);
     salto(e);
     opcion44(e);
     salto(e); 
     puntaje(e); 
    }   
  //problem2
  var problem2=function(e){
 ale=Math.floor(Math.random()*45)+7;
 ale2=Math.floor(Math.random()*45)+7
    if(ale<ale2){
      reale2=ale2 + ale;}
      else if(ale>ale2){
       reale2=ale + ale2;}
  do {
   ale=Math.floor(Math.random()*45)+7;
  ale2=Math.floor(Math.random()*45)+7;  
  do{
      ale=Math.floor(Math.random()*45)+7;
      ale2=Math.floor(Math.random()*45)+7;   
      }while(ale<ale2)  
    do{
      if(ale==ale2){
       ale2=Math.floor(Math.random()*45)+7;}
      }while(ale==ale2);
     if(ale<ale2){
     reale2=ale2 + ale;}
     else if(ale>ale2){
      reale2=ale + ale2;
      reale= ale - ale2;}
  }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=7 || ale<=5);
    var problem=document.createTextNode("2. Un tanque tiene " + ale +" litro(s) de agua, si en la mañana se gasta cierta cantidad, en el tanque quedan "+ reale+" litro(s). ¿Cuántos litro(s) se gastaron en la mañana?" );
      var conte=document.getElementById("problem42");
       conte.appendChild(problem);
       conte.setAttribute("align","center");
       conte.setAttribute("class","problem");
   }
   //crear2
 var crear2=function(e){
    var elemento= document.createElement("div");
    elemento.setAttribute("id","form42");
    document.getElementById("opciones42").appendChild(elemento);
  }
  //opciones2
  var opciones2=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("form42").appendChild(saltico);}
     var opcion41=function(e){
       var op41=document.createElement("INPUT");
       op41.setAttribute("type", "button");
       op41.setAttribute("id", "boton41");
       op41.setAttribute("class","boton1");
       op41.setAttribute("value","A. "+ reale2 +" litro(s)");
       document.getElementById("form42").appendChild(op41);
       var valid =function(e){
         a="A. "+ reale2 +" litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1 ;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos42");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos43");
         cont.setAttribute("class","puntaje4");
          cont.appendChild(poino);  
         }
      op41.addEventListener("click",valid);
      op41.addEventListener("click",puntaje);
      op41.addEventListener("click",remover42);
     }
     var opcion42=function(e){
      var op42=document.createElement("INPUT");
      op42.setAttribute("type", "button");
      op42.setAttribute("id", "boton42");
      op42.setAttribute("class","boton2");
      op42.setAttribute("value", "B. "+ ale +" litro(s)");
      document.getElementById("form42").appendChild(op42);
      var valid =function(e){
        b="B. "+ ale +" litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos42");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos43");
         cont.setAttribute("class","puntaje4");
          cont.appendChild(poino);  
         }
      op42.addEventListener("click",valid);
      op42.addEventListener("click",puntaje);
      op42.addEventListener("click",remover42);
    }
    var opcion43=function(e){
      var op43=document.createElement("INPUT");
      op43.setAttribute("type", "button");
      op43.setAttribute("id", "boton43");
      op43.setAttribute("class","boton3");
      op43.setAttribute("value","C. " + ale2 + " litro(s)");
      document.getElementById("form42").appendChild(op43);
      var valid =function(e){
        c="C. " + ale2 + " litro(s)";
          alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 3));
          resul = resul + puntos2 + 3;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos42");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos43");
         cont.setAttribute("class","puntaje4");
          cont.appendChild(poino);   
         }
      op43.addEventListener("click",valid);
      op43.addEventListener("click",puntaje);
      op43.addEventListener("click",remover42);
    }
    var opcion44=function(e){
      var op44=document.createElement("INPUT");
      op44.setAttribute("type", "button");
      op44.setAttribute("id", "boton44");
      op44.setAttribute("class","boton4");
      op44.setAttribute("value","D. " + reale + " litro(s)");
      document.getElementById("form42").appendChild(op44);
      var valid =function(e){
        d="D. " + reale + " litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos42");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos43");
         cont.setAttribute("class","puntaje4");
          cont.appendChild(poino);
         }
      op44.addEventListener("click",valid);
      op44.addEventListener("click",puntaje);
      op44.addEventListener("click",remover42);
    }
    var guardar=function(e){
      var con=document.getElementById("p24");
      con.setAttribute("value", ale + " - " + reale);
      if (a =="A. " + reale2 + " litro(s)"){
       var conte=document.getElementById("r24");
       conte.setAttribute("value","A. " + reale2 + " litro(s)");
     } else if (b =="B. " + ale + "litro(s)"){
      var conte=document.getElementById("r24");
      conte.setAttribute("value","B. " + ale + " litro(s)");
     }
     else if (c =="C. " + ale2 + " litro(s)"){
      var conte=document.getElementById("r24");
      conte.setAttribute("value","C. " + ale2 + " litro(s)");
     }
     else if (d =="D. " + reale + " litro(s)"){
      var conte=document.getElementById("r24");
      conte.setAttribute("value","D. " + reale + " litro(s)");
     }
   }
    var remover42=function(e){
      guardar(e);
      var chao =document.getElementById("problem42");
      chao.remove(chao);
      var chao2 =document.getElementById("form42");
      chao2.remove(chao2);
      problem3(e);
      crear3(e);
      opciones3(e);
         }
     opcion41(e);
     salto(e);
     salto(e);
     opcion42(e);
     salto(e);
     salto(e);
     opcion43(e);
     salto(e);
     salto(e);
     opcion44(e);
     } 
    //problem3
    var problem3=function(e){
      var salto= function(e){
        var saltico= document.createElement("br");
        document.getElementById("problem43").appendChild(saltico);}
   salto(e);
   ale=Math.floor(Math.random()*45)+7;
   ale2=Math.floor(Math.random()*45)+7;
   if(ale<ale2){
      reale2=ale2 + ale;}
      else if(ale>ale2){
       reale2=ale + ale2;}
  do {
   ale=Math.floor(Math.random()*45)+7;
  ale2=Math.floor(Math.random()*45)+7;  
  do{
      ale=Math.floor(Math.random()*45)+7;
      ale2=Math.floor(Math.random()*45)+7;   
      }while(ale<ale2)  
    do{
      if(ale==ale2){
       ale2=Math.floor(Math.random()*45)+7;}
      }while(ale==ale2);
     if(ale<ale2){
     reale2=ale2 + ale;}
     else if(ale>ale2){
      reale2=ale + ale2;
      reale= ale - ale2;}
  }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=7 || ale<=5);
      var problem=document.createTextNode("3. ¿Cuánto le costó un postre a Milena, si tenía "+ ale+" dolar(es) y le sobraron "+ reale+" dolar(es)?" );
        var conte=document.getElementById("problem43");
         conte.appendChild(problem);
         conte.setAttribute("align","center");
         conte.setAttribute("class","problem");
     }
       //crear3
 var crear3=function(e){
  var elemento= document.createElement("div");
  elemento.setAttribute("id","form43");
  document.getElementById("opciones43").appendChild(elemento);
}
//opciones3
var opciones3=function(e){
  var salto= function(e){
    var saltico= document.createElement("br");
    document.getElementById("opciones43").appendChild(saltico);}
   var opcion431=function(e){
     var op431=document.createElement("INPUT");
     op431.setAttribute("type", "button");
     op431.setAttribute("id", "boton431");
     op431.setAttribute("class","boton1");
     op431.setAttribute("value", "A. "+ reale + " dolar(es)");
     document.getElementById("opciones43").appendChild(op431);
     var valid =function(e){
       a="A. "+ reale + " dolar(es)";
       alert("Esta no es la respuesta, sigue intentando");
       resul = resul + puntos1; 
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos43");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos44");
       cont.setAttribute("class","puntaje4");
        cont.appendChild(poino);  
       }
    op431.addEventListener("click",valid);
    op431.addEventListener("click",puntaje);
    op431.addEventListener("click",remover43);
   }
   var opcion432=function(e){
    var op432=document.createElement("INPUT");
    op432.setAttribute("type", "button");
    op432.setAttribute("id", "boton432");
    op432.setAttribute("class","boton2");
    op432.setAttribute("value", "B. "+ reale2 + " dolar(es)");
    document.getElementById("opciones43").appendChild(op432);
    var valid =function(e){
      b="B. "+ reale2 + " dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos43");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos44");
       cont.setAttribute("class","puntaje4");
        cont.appendChild(poino);  
       }
    op432.addEventListener("click",valid);
    op432.addEventListener("click",puntaje);
    op432.addEventListener("click",remover43);
  }
  var opcion433=function(e){
    var op433=document.createElement("INPUT");
    op433.setAttribute("type", "button");
    op433.setAttribute("id", "boton433");
    op433.setAttribute("class","boton3");
    op433.setAttribute("value", "C. "+ ale2 + " dolar(es)");
    document.getElementById("opciones43").appendChild(op433);
    var valid =function(e){
      c="C. "+ ale2 + " dolar(es)";
      alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 3));
      resul = resul + puntos2 + 3; 
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos43");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos44");
        cont.appendChild(poino);
        cont.setAttribute("class","puntaje4");   
       }
    op433.addEventListener("click",valid);
    op433.addEventListener("click",puntaje);
    op433.addEventListener("click",remover43);
  }
  var opcion434=function(e){
    var op434=document.createElement("INPUT");
    op434.setAttribute("type", "button");
    op434.setAttribute("id", "boton434");
    op434.setAttribute("class","boton4");
    op434.setAttribute("value", "D. "+ ale + " dolar(es)");
    document.getElementById("opciones43").appendChild(op434);
    var valid =function(e){
      d= "D. "+ ale + " dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos43");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos44");
        cont.appendChild(poino);
        cont.setAttribute("class","puntaje4");
       }
    op434.addEventListener("click",valid);
    op434.addEventListener("click",puntaje);
    op434.addEventListener("click",remover43);
  }
  var guardar=function(e){
      var con=document.getElementById("p34");
      con.setAttribute("value", ale + " - " + reale);
    if (a =="A. " + reale + " dolar(es)"){
     var conte=document.getElementById("r34");
     conte.setAttribute("value","A. " + reale + " dolar(es)");
   } else if (b =="B. " + reale2 + " dolar(es)"){
    var conte=document.getElementById("r34");
    conte.setAttribute("value","B. " + reale2 + " dolar(es)");
   }
   else if (c =="C. " + ale2 + " dolar(es)"){
    var conte=document.getElementById("r34");
    conte.setAttribute("value","C. " + ale2 + " dolar(es)");
   }
   else if (d =="D. " + ale + " dolar(es)"){
    var conte=document.getElementById("r34");
    conte.setAttribute("value","D. " + ale + " dolar(es)");
   }
 }
  var remover43=function(e){
    guardar(e);
    if(resul>18 && resul<30){
  var chao =document.getElementById("problem43");
    chao.remove(chao);
  var chao2 =document.getElementById("opciones43");
          chao2.remove(chao2);
    problem4(e);
    crear4(e);
    opciones4(e);
         }
         else if(resul==18){
          var chao2 =document.getElementById("opciones43");
          chao2.remove(chao2);
           gameover4(e);
         }
         else if(resul==30){
          var chao =document.getElementById("problem43");
          chao.remove(chao);
          var chao4 =document.getElementById("opciones43");
          chao4.remove(chao4);
          var chao3 =document.getElementById("puntos44");
          chao3.remove(chao3);  
          var chao2 =document.getElementById("nivel4");
          chao2.remove(chao2);  
           nivel5(e);
 
         }
       }
   opcion431(e);
   salto(e);
   salto(e);
   opcion432(e);
   salto(e);
   salto(e);
   opcion433(e);
   salto(e);
   salto(e);
   opcion434(e); 
  }
   //problem4
   var problem4=function(e){
      var salto= function(e){
          var saltico= document.createElement("br");
          document.getElementById("problem44").appendChild(saltico);}
     salto(e);
     ale=Math.floor(Math.random()*45)+7;
     ale2=Math.floor(Math.random()*45)+7;
     if(ale<ale2){
      reale2=ale2 - ale;}
      else if(ale>ale2){
       reale2=ale - ale2;}
  do {
   ale=Math.floor(Math.random()*45)+7;
  ale2=Math.floor(Math.random()*45)+7;  
  do{
      ale=Math.floor(Math.random()*45)+7;
      ale2=Math.floor(Math.random()*45)+7;   
      }while(ale<ale2)  
    do{
      if(ale==ale2){
       ale2=Math.floor(Math.random()*45)+7;}
      }while(ale==ale2);
     if(ale<ale2){
     reale2=ale2 - ale;}
     else if(ale>ale2){
      reale2=ale - ale2;
      reale= ale + ale2;}
  }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=7 || ale<=5);
        var problem=document.createTextNode("4. Mario tenía "+ ale + " dolar(es), compró un postre y le sobraron "+ reale +" dolar(es) ¿Cuánto le costó el postre a Mario?" );
          var conte=document.getElementById("problem44");
           conte.appendChild(problem);
           conte.setAttribute("align","center");
           conte.setAttribute("class","problem");
   }
  //crear4
 var crear4=function(e){
  var elemento= document.createElement("div");
  elemento.setAttribute("id","form44");
  document.getElementById("opciones44").appendChild(elemento);
}
//opciones4
var opciones4=function(e){
  var salto= function(e){
    var saltico= document.createElement("br");
    document.getElementById("opciones44").appendChild(saltico);}
   var opcion441=function(e){
     var op441=document.createElement("INPUT");
     op441.setAttribute("type", "button");
     op441.setAttribute("id", "boton441");
     op441.setAttribute("class", "boton1");
     op441.setAttribute("value", "A. "+ ale2 +" dolar(es)");
     document.getElementById("opciones44").appendChild(op441);
     var valid =function(e){
         a="A. "+ ale2 +" dolar(es)";
        alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 3));
        resul = resul + puntos2 + 3;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos44");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos45");
       cont.setAttribute("class","puntaje4");
        cont.appendChild(poino);  
       }
    op441.addEventListener("click",valid);
    op441.addEventListener("click",puntaje);
    op441.addEventListener("click",remover44);
   }
   var opcion442=function(e){
    var op442=document.createElement("INPUT");
    op442.setAttribute("type", "button");
    op442.setAttribute("id", "boton442");
    op442.setAttribute("class", "boton2");
    op442.setAttribute("value", "B. "+ ale +" dolar(es)");
    document.getElementById("opciones44").appendChild(op442);
    var valid =function(e){
        b="B. "+ ale +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos44");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos45");
       cont.setAttribute("class","puntaje4");
        cont.appendChild(poino);  
       }
    op442.addEventListener("click",valid);
    op442.addEventListener("click",puntaje);
    op442.addEventListener("click",remover44);
  }
  var opcion443=function(e){
    var op443=document.createElement("INPUT");
    op443.setAttribute("type", "button");
    op443.setAttribute("id", "boton443");
    op443.setAttribute("class", "boton3");
    op443.setAttribute("value", "C. "+ reale +" dolar(es)");
    document.getElementById("opciones44").appendChild(op443);
    var valid =function(e){
        c="C. "+ reale +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos44");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos45");
       cont.setAttribute("class","puntaje2");
        cont.appendChild(poino);  
       }
    op443.addEventListener("click",valid);
    op443.addEventListener("click",puntaje);
    op443.addEventListener("click",remover44);
  }
  var opcion444=function(e){
    var op444=document.createElement("INPUT");
    op444.setAttribute("type", "button");
    op444.setAttribute("id", "boton444");
    op444.setAttribute("class", "boton4");
    op444.setAttribute("value", "D. "+ reale2 +" dolar(es)");
    document.getElementById("opciones44").appendChild(op444);
    var valid =function(e){
        d="D. "+ reale2 +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos44");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos45");
       cont.setAttribute("class","puntaje4");
        cont.appendChild(poino); 
       }
    op444.addEventListener("click",valid);
    op444.addEventListener("click",puntaje);
    op444.addEventListener("click",remover44);
  }
  var guardar=function(e){
      var con=document.getElementById("p44");
      con.setAttribute("value", reale + " - " + ale);
      if (a =="A. " + ale2 + " dolar(es)"){
       var conte=document.getElementById("r44");
       conte.setAttribute("value","A. "+ ale2 +" dolar(es)");
     } else if (b =="B. "+ ale +" dolar(es)"){
      var conte=document.getElementById("r44");
      conte.setAttribute("value","B. "+ ale +" dolar(es)");
     }
     else if (c =="C. "+ reale +" dolar(es)"){
      var conte=document.getElementById("r44");
      conte.setAttribute("value","C. "+ reale +" dolar(es)");
     }
     else if (d =="D. "+ reale2 +" dolar(es)"){
      var conte=document.getElementById("r44");
      conte.setAttribute("value","D. "+ reale2 +" dolar(es)");
     }
   }
  var remover44=function(e){
      guardar(e);
    if(resul>22 && resul<30){
      var chao =document.getElementById("problem44");
        chao.remove(chao);
        var chao2 =document.getElementById("opciones44");
        chao2.remove(chao2);
        problem5(e);
        crear5(e);
        opciones5(e);
             }
             else if(resul<=22){
               gameover4(e);
             }
             else if(resul==30){
              var chao =document.getElementById("problem44");
              chao.remove(chao);
              var chao3 =document.getElementById("opciones44");
              chao.remove(chao3);
              var chao2 =document.getElementById("nivel4");
              chao2.remove(chao2);  
               nivel5(e);
             }
       }
   opcion441(e);
   salto(e);
   salto(e);
   opcion442(e);
   salto(e);
   salto(e);
   opcion443(e);
   salto(e);
   salto(e);
   opcion444(e);
  }
 //problem5
 var problem5=function(e){
  var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("problem45").appendChild(saltico);}
 salto(e);
 if(ale<ale2){
  reale2=ale2 + ale;}
  else if(ale>ale2){
   reale2=ale + ale2;}
do {
ale=Math.floor(Math.random()*45)+7;
ale2=Math.floor(Math.random()*45)+7;  
do{
  ale=Math.floor(Math.random()*45)+7;
  ale2=Math.floor(Math.random()*45)+7;   
  }while(ale<ale2)  
do{
  if(ale==ale2){
   ale2=Math.floor(Math.random()*45)+7;}
  }while(ale==ale2);
 if(ale<ale2){
 reale2=ale2 + ale;}
 else if(ale>ale2){
  reale2=ale + ale2;
  reale= ale - ale2;}
}while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=7 || ale<=5);
    var problem=document.createTextNode("5. Pedro tenía "+ ale + " dolar(es) y compró un helado que le costó "+ ale2 +" dolar(es). ¿Cuánto dinero le sobró?");
      var conte=document.getElementById("problem45");
       conte.appendChild(problem);
       conte.setAttribute("align","center");
       conte.setAttribute("class","problem");
 }
  //crear5
  var crear5=function(e){
    var elemento= document.createElement("div");
    elemento.setAttribute("id","form25");
    document.getElementById("opciones25").appendChild(elemento);
  }
 //opciones5
var opciones5=function(e){
  var salto= function(e){
    var saltico= document.createElement("br");
    document.getElementById("form25").appendChild(saltico);}
   var opcion251=function(e){
     var op251=document.createElement("INPUT");
     op251.setAttribute("type", "button");
     op251.setAttribute("id", "boton251");
     op251.setAttribute("class", "boton1");
     op251.setAttribute("value","A. "+ ale2 +" dolar(es)");
     document.getElementById("form25").appendChild(op251);
     var valid =function(e){
         a="A. "+ ale2 +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos25");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos26");
        cont.appendChild(poino);  
       }
    op251.addEventListener("click",valid);
    op251.addEventListener("click",puntaje);
    op251.addEventListener("click",remover25);
   }
   var opcion252=function(e){
    var op252=document.createElement("INPUT");
    op252.setAttribute("type", "button");
    op252.setAttribute("id", "boton252");
    op252.setAttribute("class", "boton2");
    op252.setAttribute("value", "B. "+ reale2 +" dolar(es)");
    document.getElementById("form25").appendChild(op252);
    var valid =function(e){
        b="B. "+ reale2 +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos25");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos26");
        cont.appendChild(poino);  
        puntos = resul;
       }
    op252.addEventListener("click",valid);
    op252.addEventListener("click",puntaje);
    op252.addEventListener("click",remover25);
  }
  var opcion253=function(e){
    var op253=document.createElement("INPUT");
    op253.setAttribute("type", "button");
    op253.setAttribute("id", "boton253");
    op253.setAttribute("class", "boton3");
    op253.setAttribute("value", "C. "+ reale +" dolar(es)");
    document.getElementById("form25").appendChild(op253);
    var valid =function(e){
        c="C. "+ reale +" dolar(es)";
        alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 1));
        resul = resul + puntos2 + 1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos25");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos26");
        cont.appendChild(poino);  
       }
    op253.addEventListener("click",valid);
    op253.addEventListener("click",puntaje);
    op253.addEventListener("click",remover25);
  }
  var opcion254=function(e){
    var op254=document.createElement("INPUT");
    op254.setAttribute("type", "button");
    op254.setAttribute("id", "boton254");
    op254.setAttribute("class", "boton4");
    op254.setAttribute("value", "D. "+ ale +" dolar(es)");
    document.getElementById("form25").appendChild(op254);
    var valid =function(e){
        d="D. "+ ale +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos25");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos26");
        cont.appendChild(poino); 
       }
    op254.addEventListener("click",valid);
    op254.addEventListener("click",puntaje);
    op254.addEventListener("click",remover25);
  }
  var guardar=function(e){
      var con=document.getElementById("p52");
      con.setAttribute("value", ale + " - " + ale2);
      if (a =="A. " + ale2 + " dolar(es)"){
       var conte=document.getElementById("r52");
       conte.setAttribute("value","A. "+ ale2 +" dolar(es)");
     } else if (b =="B. "+ reale2 +" dolar(es)"){
      var conte=document.getElementById("r52");
      conte.setAttribute("value","B. "+ reale2 +" dolar(es)");
     }
     else if (c =="C. "+ reale +" dolar(es)"){
      var conte=document.getElementById("r52");
      conte.setAttribute("value","C. "+ reale +" dolar(es)");
     }
     else if (d =="D. "+ ale +" dolar(es)"){
      var conte=document.getElementById("r52");
      conte.setAttribute("value","D. "+ ale +" dolar(es)");
     }
   }
  var remover25=function(e){
      guardar(e);
   if(resul<9){
               gameover2(e);
             }
             else if(resul==9){
              var chao =document.getElementById("problem25");
              chao.remove(chao); 
              var chao2 =document.getElementById("nivel2");
              chao2.remove(chao2);  
               nivel3(e);
             }
       }
   opcion251(e);
   salto(e);
   salto(e);
   opcion252(e);
   salto(e);
   salto(e);
   opcion253(e);
   salto(e);
   salto(e);
   opcion254(e); 
  }
  //termina el test-nivel4
 var gameover4=function(e){
  var chao=document.getElementById("nivel4");
   chao.remove(chao);
   resultados4(e);
   regresar4(e);
}
//estadistica de la prueba 4
var resultados4=function(e){
  var salto= function(e){
    var saltico= document.createElement("br");
    document.getElementById("final4").appendChild(saltico);}
    salto(e);
    salto(e);
    salto(e);
  var elemento=document.createTextNode(valor  + " el test ha terminado,su resultado fue: " + resul);
 document.getElementById("final4").appendChild(elemento);
 salto(e);
 salto(e);
}
// returnInicio
var regresar4=function(e){
  var boton=document.createElement("INPUT");
  boton.setAttribute("type", "submit");
  boton.setAttribute("name", "enviar");
  boton.setAttribute("id", "botonreset");
  document.getElementById("final4").appendChild(boton); 
}
  }
  //empieza nivel 5
  var nivel5=function(e){
    var entrada=function(e){
      var nive=document.createTextNode("Nivel 5");
       var contenido=document.getElementById("intro5");
        contenido.appendChild(nive);
        contenido.setAttribute("class","intro5");
   var quitar=function(e){
         var chao = document.getElementById("intro5");
        chao.remove(chao);
        nivel55(e);
        problem1(e);
        crear(e);
        opciones(e);
       }
        contenido.addEventListener("click",quitar);
           } 
   entrada(e);
    var nivel55=function(e){
      var nivel=function(e){
    var nivel=document.createTextNode("Nivel 5");
    var contenido=document.getElementById("nivel55");
     contenido.appendChild(nivel);
     contenido.setAttribute("align","center");
     contenido.setAttribute("class","nivel5");
    }
    nivel(e);
    }
  //problema1
  var problem1=function(e){
    if(ale<ale2){
      reale2=ale2 - ale;}
      else if(ale>ale2){
       reale2=ale - ale2;}
  do {
   ale=Math.floor(Math.random()*45)+3;
  ale2=Math.floor(Math.random()*45)+3;  
  do{
      ale=Math.floor(Math.random()*45)+3;
      ale2=Math.floor(Math.random()*45)+3;   
      }while(ale<ale2)  
    do{
      if(ale==ale2){
       ale2=Math.floor(Math.random()*45)+3;}
      }while(ale==ale2);
     if(ale<ale2){
     reale2=ale2 - ale;}
     else if(ale>ale2){
      reale2=ale - ale2;
      reale= ale + ale2;}
  }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale2<=10 || reale<=10 || ale2<=13 || ale<=10);
  var problem=document.createTextNode("1. En la mañana un tanque para el agua tiene cierta cantidad de líquido, en la tarde se le agregan "+ ale +" litro(s), completando así "+ reale +" litro(s).  ¿Qué cantidad de agua tenía el tanque en la mañana?");
    var conte=document.getElementById("problem51");
     conte.appendChild(problem);
     conte.setAttribute("align","center");
     conte.setAttribute("class","problem");
   }
   //puntaje1
   var puntaje= function(e){
    var poino=document.createTextNode(valor+ ", tu puntaje es: " + resul);
    var cont=document.getElementById("puntos51");
    cont.setAttribute("class","puntaje5");
     cont.appendChild(poino);  
    }
   //crear
   var crear=function(e){
    var elemento= document.createElement("div");
    elemento.setAttribute("id","form51");
    document.getElementById("opciones51").appendChild(elemento);
  }
   //opciones1
   var opciones=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("form51").appendChild(saltico);}
      var opcion51=function(e){
       var op51=document.createElement("INPUT");
       op51.setAttribute("type", "button");
       op51.setAttribute("id", "boton51");
       op51.setAttribute("class", "boton1");
       op51.setAttribute("value","A. "+ ale2+" litro(s)");
       document.getElementById("form51").appendChild(op51);
       var valid =function(e){
         a="A. "+ ale2+" litro(s)";
         alert("Muy bien respuesta correcta, puntos ganados:" +" "+ (puntos2 + 4));
          resul = resul + puntos2 + 4;   
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos51");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos52");
         cont.setAttribute("class","puntaje5");
          cont.appendChild(poino);  
         }
      op51.addEventListener("click",valid);
      op51.addEventListener("click",puntaje);
      op51.addEventListener("click",remover51);
     }
     var opcion52=function(e){
      var op52=document.createElement("INPUT");
      op52.setAttribute("type", "button");
      op52.setAttribute("id", "boton52");
      op52.setAttribute("class", "boton2");
      op52.setAttribute("value","B. "+ reale+" litro(s)");
      document.getElementById("form51").appendChild(op52);
      var valid =function(e){
        b="B. "+ reale+" litro(s)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1 ; 
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos51");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos52");
          cont.appendChild(poino);
          cont.setAttribute("class","puntaje5");  
         }
      op52.addEventListener("click",valid);
      op52.addEventListener("click",puntaje);
      op52.addEventListener("click",remover51);
    }
    var opcion53=function(e){
      var op53=document.createElement("INPUT");
      op53.setAttribute("type", "button");
      op53.setAttribute("id", "boton53");
      op53.setAttribute("class", "boton3");
      op53.setAttribute("value","C. " + ale + " litro(s)");
      document.getElementById("form51").appendChild(op53);
      var valid =function(e){
        c="C. " + ale + " litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos51");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos52");
          cont.appendChild(poino);  
          cont.setAttribute("class","puntaje2"); 
         }
      op53.addEventListener("click",valid);
      op53.addEventListener("click",puntaje);
      op53.addEventListener("click",remover51);
    }
    var opcion54=function(e){
      var op54=document.createElement("INPUT");
      op54.setAttribute("type", "button");
      op54.setAttribute("id", "boton54");
      op54.setAttribute("class","boton4")
      op54.setAttribute("value","D. "+ reale2+ " litro(s)");
      document.getElementById("form51").appendChild(op54);
      var valid =function(e){
        d="D. "+ reale2+ "litro(s)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos51");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos52");
         cont.setAttribute("class","puntaje5");
          cont.appendChild(poino);
         }
      op54.addEventListener("click",valid);
      op54.addEventListener("click",puntaje);
      op54.addEventListener("click",remover51);
    }
    var guardar=function(e){
      var con=document.getElementById("p15");
      con.setAttribute("value", reale + " - " + ale);
      if (a =="A. " + ale2 + " litro(s)"){
       var conte=document.getElementById("r15");
       conte.setAttribute("value","A. " + ale2 + " litro(s)");
     } else if (b =="B. " + reale + " litro(s)"){
      var conte=document.getElementById("r15");
      conte.setAttribute("value","B. " + reale + " litro(s)");
     }
     else if (c =="C. " + ale + " litro(s)"){
      var conte=document.getElementById("r15");
      conte.setAttribute("value","C. " + ale + " litro(s)");
     }
     else if (d =="D. " + reale2 + " litro(s)"){
      var conte=document.getElementById("r15");
      conte.setAttribute("value","D. " + reale2 + " litro(s)");
     }
   }
    var remover51=function(e){
      guardar(e);
      var chao =document.getElementById("problem51");
      chao.remove(chao);
      var chao3 =document.getElementById("form51");
      chao3.remove(chao3);
      var chao2 =document.getElementById("opciones51");
      chao2.remove(chao2);
      problem2(e);
      crear2(e);
      opciones2(e);
         }
 
     opcion51(e);
     salto(e);
     salto(e);
     opcion52(e);
     salto(e);
     salto(e);
     opcion53(e);
     salto(e);
     salto(e);
     opcion54(e); 
     puntaje(e); 
    }   
  //problem2
  var problem2=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("problem52").appendChild(saltico);}
 salto(e);
    if(ale<ale2){
      reale2=ale2 - ale;}
      else if(ale>ale2){
       reale2=ale - ale2;}
  do {
   ale=Math.floor(Math.random()*45)+3;
  ale2=Math.floor(Math.random()*45)+3;  
  do{
      ale=Math.floor(Math.random()*45)+3;
      ale2=Math.floor(Math.random()*45)+3;   
      }while(ale<ale2)  
    do{
      if(ale==ale2){
       ale2=Math.floor(Math.random()*45)+3;}
      }while(ale==ale2);
     if(ale<ale2){
     reale2=ale2 - ale;}
     else if(ale>ale2){
      reale2=ale - ale2;
      reale= ale + ale2;}
  }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale2<=11 || reale<=11 || ale2<=14 || ale<=11);
    var problem=document.createTextNode("2. ¿Cuánto dinero tenía Luis, si con los "+ ale+" dolar(es) que le regaló su mamá completó "+ reale +" dolar(es)?" );
      var conte=document.getElementById("problem52");
       conte.appendChild(problem);
       conte.setAttribute("align","center");
       conte.setAttribute("class","problem");
   }
   //crear2
 var crear2=function(e){
    var elemento= document.createElement("div");
    elemento.setAttribute("id","form52");
    document.getElementById("opciones52").appendChild(elemento);
  }
  //opciones2
  var opciones2=function(e){
    var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("form52").appendChild(saltico);}
     var opcion521=function(e){
       var op521=document.createElement("INPUT");
       op521.setAttribute("type", "button");
       op521.setAttribute("id", "boton521");
       op521.setAttribute("class","boton1");
       op521.setAttribute("value","A. "+ reale2 +" dolar(es)");
       document.getElementById("form52").appendChild(op521);
       var valid =function(e){
         a="A. "+ reale2 +" dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1 ;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos52");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos53");
         cont.setAttribute("class","puntaje5");
          cont.appendChild(poino);  
         }
      op521.addEventListener("click",valid);
      op521.addEventListener("click",puntaje);
      op521.addEventListener("click",remover52);
     }
     var opcion522=function(e){
      var op522=document.createElement("INPUT");
      op522.setAttribute("type", "button");
      op522.setAttribute("id", "boton522");
      op522.setAttribute("class","boton2");
      op522.setAttribute("value", "B. "+ ale +" dolar(es)");
      document.getElementById("form52").appendChild(op522);
      var valid =function(e){
        b="B. "+ ale +" dolar(es)";
          alert("Esta no es la respuesta, sigue intentando");
          resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos52");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos53");
         cont.setAttribute("class","puntaje5");
          cont.appendChild(poino);  
         }
      op522.addEventListener("click",valid);
      op522.addEventListener("click",puntaje);
      op522.addEventListener("click",remover52);
    }
    var opcion523=function(e){
      var op523=document.createElement("INPUT");
      op523.setAttribute("type", "button");
      op523.setAttribute("id", "boton523");
      op523.setAttribute("class","boton3");
      op523.setAttribute("value","C. " + reale + " dolar(es)");
      document.getElementById("form52").appendChild(op523);
      var valid =function(e){
        c="C. " + reale + " dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos52");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos53");
         cont.setAttribute("class","puntaje5");
          cont.appendChild(poino);   
         }
      op523.addEventListener("click",valid);
      op523.addEventListener("click",puntaje);
      op523.addEventListener("click",remover52);
    }
    var opcion524=function(e){
      var op524=document.createElement("INPUT");
      op524.setAttribute("type", "button");
      op524.setAttribute("id", "boton524");
      op524.setAttribute("class","boton4");
      op524.setAttribute("value","D. " + ale2 + " dolar(es)");
      document.getElementById("form52").appendChild(op524);
      var valid =function(e){
        d="D. " + ale2 + " dolar(es)";
        alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 4));
          resul = resul + puntos2 + 4;  
      }
      var puntaje= function(e){
         var element=document.getElementById("puntos52");
         element.remove(element);
         var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
         var cont=document.getElementById("puntos53");
         cont.setAttribute("class","puntaje5");
          cont.appendChild(poino);
         }
      op524.addEventListener("click",valid);
      op524.addEventListener("click",puntaje);
      op524.addEventListener("click",remover52);
    }
    var guardar=function(e){
      var con=document.getElementById("p25");
      con.setAttribute("value", ale + " - " + ale2);
      if (a =="A. " + reale2 + " dolar(es)"){
       var conte=document.getElementById("r25");
       conte.setAttribute("value","A. " + reale2 + " dolar(es)");
     } else if (b =="B. " + ale + " dolar(es)"){
      var conte=document.getElementById("r25");
      conte.setAttribute("value","B. " + ale + " dolar(es)");
     }
     else if (c =="C. " + reale + " dolar(es)"){
      var conte=document.getElementById("r25");
      conte.setAttribute("value","C. " + reale + " dolar(es)");
     }
     else if (d =="D. " + ale2 + " dolar(es)"){
      var conte=document.getElementById("r25");
      conte.setAttribute("value","D. " + ale2 + " dolar(es)");
     }
   }
    var remover52=function(e){
      guardar(e);
      var chao =document.getElementById("problem52");
      chao.remove(chao);
      var chao3 =document.getElementById("opciones52");
      chao3.remove(chao3);
      problem3(e);
      crear3(e);
      opciones3(e);
         }
     opcion521(e);
     salto(e);
     salto(e);
     opcion522(e);
     salto(e);
     salto(e);
     opcion523(e);
     salto(e);
     salto(e);
     opcion524(e);
     } 
    //problem3
    var problem3=function(e){
   if(ale<ale2){
      reale2=ale2 - ale;}
      else if(ale>ale2){
       reale2=ale - ale2;}
  do {
   ale=Math.floor(Math.random()*45)+3;
  ale2=Math.floor(Math.random()*45)+3;  
  do{
      ale=Math.floor(Math.random()*45)+3;
      ale2=Math.floor(Math.random()*45)+3;   
      }while(ale<ale2)  
    do{
      if(ale==ale2){
       ale2=Math.floor(Math.random()*45)+3;}
      }while(ale==ale2);
     if(ale<ale2){
     reale2=ale2 - ale;}
     else if(ale>ale2){
      reale2=ale - ale2;
      reale= ale + ale2;}
  }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale2<=13 || reale<=13 || ale2<=16 || ale<=13);
      var problem=document.createTextNode("3.  Carla tiene cierta cantidad de dinero, su mamá le regala "+ ale + " dolar(es) y con esto completa "+ reale +" dolar(es).¿Cuánto dinero tenía Carla antes del regalo de su mamá?" );
        var conte=document.getElementById("problem53");
         conte.appendChild(problem);
         conte.setAttribute("align","center");
         conte.setAttribute("class","problem");
     }
       //crear3
 var crear3=function(e){
  var elemento= document.createElement("div");
  elemento.setAttribute("id","form53");
  document.getElementById("problem53").appendChild(elemento);
}
//opciones3
var opciones3=function(e){
  var salto= function(e){
    var saltico= document.createElement("br");
    document.getElementById("opciones53").appendChild(saltico);}
   var opcion531=function(e){
     var op531=document.createElement("INPUT");
     op531.setAttribute("type", "button");
     op531.setAttribute("id", "boton531");
     op531.setAttribute("class","boton1");
     op531.setAttribute("value", "A. "+ ale2 + " dolar(es)");
     document.getElementById("opciones53").appendChild(op531);
     var valid =function(e){
       a="A. "+ ale2 + " dolar(es)";
        alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 4));
        resul = resul + puntos2 + 4;  }
    var puntaje= function(e){
       var element=document.getElementById("puntos53");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos54");
       cont.setAttribute("class","puntaje5");
        cont.appendChild(poino);  
       }
    op531.addEventListener("click",valid);
    op531.addEventListener("click",puntaje);
    op531.addEventListener("click",remover53);
   }
   var opcion532=function(e){
    var op532=document.createElement("INPUT");
    op532.setAttribute("type", "button");
    op532.setAttribute("id", "boton532");
    op532.setAttribute("class","boton2");
    op532.setAttribute("value", "B. "+ reale2 + " dolar(es)");
    document.getElementById("opciones53").appendChild(op532);
    var valid =function(e){
      b="B. "+ reale2 + " dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos53");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos54");
       cont.setAttribute("class","puntaje5");
        cont.appendChild(poino);  
       }
    op532.addEventListener("click",valid);
    op532.addEventListener("click",puntaje);
    op532.addEventListener("click",remover53);
  }
  var opcion533=function(e){
    var op533=document.createElement("INPUT");
    op533.setAttribute("type", "button");
    op533.setAttribute("id", "boton533");
    op533.setAttribute("class","boton3");
    op533.setAttribute("value", "C. "+ reale + " dolar(es)");
    document.getElementById("opciones53").appendChild(op533);
    var valid =function(e){
      c="C. "+ reale + " dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos53");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos54");
        cont.appendChild(poino);
        cont.setAttribute("class","puntaje5");   
       }
    op533.addEventListener("click",valid);
    op533.addEventListener("click",puntaje);
    op533.addEventListener("click",remover53);
  }
  var opcion534=function(e){
    var op534=document.createElement("INPUT");
    op534.setAttribute("type", "button");
    op534.setAttribute("id", "boton534");
    op534.setAttribute("class","boton4");
    op534.setAttribute("value", "D. "+ ale + " dolar(es)");
    document.getElementById("opciones53").appendChild(op534);
    var valid =function(e){
      d= "D. "+ ale + " dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos53");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos54");
        cont.appendChild(poino);
        cont.setAttribute("class","puntaje2");
       }
    op534.addEventListener("click",valid);
    op534.addEventListener("click",puntaje);
    op534.addEventListener("click",remover53);
  }
  var guardar=function(e){
      var con=document.getElementById("p35");
      con.setAttribute("value", reale + " - " + ale);
    if (a =="A. " + ale2 + " dolar(es)"){
     var conte=document.getElementById("r35");
     conte.setAttribute("value","A. " + ale2 + " dolar(es)");
   } else if (b =="B. " + reale2 + " dolar(es)"){
    var conte=document.getElementById("r35");
    conte.setAttribute("value","B. " + reale2 + " dolar(es)");
   }
   else if (c =="C. " + reale + " dolar(es)"){
    var conte=document.getElementById("r35");
    conte.setAttribute("value","C. " + reale + " dolar(es)");
   }
   else if (d =="D. " + ale + " dolar(es)"){
    var conte=document.getElementById("r35");
    conte.setAttribute("value","D. " + ale + " dolar(es)");
   }
 }
  var remover53=function(e){
    guardar(e);
    if(resul>30 && resul<45){
  var chao =document.getElementById("problem53");
    chao.remove(chao);
  var chao2 =document.getElementById("opciones53");
          chao2.remove(chao2);
    problem4(e);
    crear4(e);
    opciones4(e);
         }
         else if(resul==30){
          var chao2 =document.getElementById("opciones53");
          chao2.remove(chao2);
           gameover5(e);
         }
         else if(resul==45){
          var chao =document.getElementById("problem53");
          chao.remove(chao);
          var chao4 =document.getElementById("opciones53");
          chao4.remove(chao4);
          var chao2 =document.getElementById("nivel55");
          chao2.remove(chao2);  
           nivel6(e);
           var chao3 =document.getElementById("puntos54");
          chao3.remove(chao3);  
         }
       }
   opcion531(e);
   salto(e);
   salto(e);
   opcion532(e);
   salto(e);
   salto(e);
   opcion533(e);
   salto(e);
   salto(e);
   opcion534(e); 
  }
   //problem4
   var problem4=function(e){
      var salto= function(e){
          var saltico= document.createElement("br");
          document.getElementById("problem24").appendChild(saltico);}
     salto(e);
     if(ale<ale2){
      reale2=ale2 + ale;}
      else if(ale>ale2){
       reale2=ale + ale2;}
  do {
   ale=Math.floor(Math.random()*45)+3;
  ale2=Math.floor(Math.random()*45)+3;  
  do{
      ale=Math.floor(Math.random()*45)+3;
      ale2=Math.floor(Math.random()*45)+3;   
      }while(ale<ale2)  
    do{
      if(ale==ale2){
       ale2=Math.floor(Math.random()*45)+3;}
      }while(ale==ale2);
     if(ale<ale2){
     reale2=ale2 + ale;}
     else if(ale>ale2){
      reale2=ale + ale2;
      reale= ale - ale2;}
  }while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=3);
        var problem=document.createTextNode("4. Juan compró un juguete de " + ale2 +" dolar(es), si tenía "+ ale +" dolar(es), ¿cuánto dinero le sobró?" );
          var conte=document.getElementById("problem24");
           conte.appendChild(problem);
           conte.setAttribute("align","center");
           conte.setAttribute("class","problem");
   }
  //crear4
 var crear4=function(e){
  var elemento= document.createElement("div");
  elemento.setAttribute("id","form24");
  document.getElementById("opciones24").appendChild(elemento);
}
//opciones4
var opciones4=function(e){
  var salto= function(e){
    var saltico= document.createElement("br");
    document.getElementById("form24").appendChild(saltico);}
   var opcion241=function(e){
     var op241=document.createElement("INPUT");
     op241.setAttribute("type", "button");
     op241.setAttribute("id", "boton241");
     op241.setAttribute("class", "boton1");
     op241.setAttribute("value", "A. "+ reale +" dolar(es)");
     document.getElementById("form24").appendChild(op241);
     var valid =function(e){
         a="A. "+ reale +" dolar(es)";
        alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 1));
        resul = resul + puntos2 + 1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos24");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos25");
       cont.setAttribute("class","puntaje2");
        cont.appendChild(poino);  
       }
    op241.addEventListener("click",valid);
    op241.addEventListener("click",puntaje);
    op241.addEventListener("click",remover24);
   }
   var opcion242=function(e){
    var op242=document.createElement("INPUT");
    op242.setAttribute("type", "button");
    op242.setAttribute("id", "boton242");
    op242.setAttribute("class", "boton2");
    op242.setAttribute("value", "B. "+ ale +" dolar(es)");
    document.getElementById("form24").appendChild(op242);
    var valid =function(e){
        b="B. "+ ale +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos24");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos25");
       cont.setAttribute("class","puntaje2");
        cont.appendChild(poino);  
       }
    op242.addEventListener("click",valid);
    op242.addEventListener("click",puntaje);
    op242.addEventListener("click",remover24);
  }
  var opcion243=function(e){
    var op243=document.createElement("INPUT");
    op243.setAttribute("type", "button");
    op243.setAttribute("id", "boton243");
    op243.setAttribute("class", "boton3");
    op243.setAttribute("value", "C. "+ ale2 +" dolar(es)");
    document.getElementById("form24").appendChild(op243);
    var valid =function(e){
        c="C. "+ ale2 +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos24");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos25");
       cont.setAttribute("class","puntaje2");
        cont.appendChild(poino);  
       }
    op243.addEventListener("click",valid);
    op243.addEventListener("click",puntaje);
    op243.addEventListener("click",remover24);
  }
  var opcion244=function(e){
    var op244=document.createElement("INPUT");
    op244.setAttribute("type", "button");
    op244.setAttribute("id", "boton244");
    op244.setAttribute("class", "boton4");
    op244.setAttribute("value", "D. "+ reale2 +" dolar(es)");
    document.getElementById("form24").appendChild(op244);
    var valid =function(e){
        d="D. "+ reale2 +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos24");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos25");
       cont.setAttribute("class","puntaje2");
        cont.appendChild(poino); 
       }
    op244.addEventListener("click",valid);
    op244.addEventListener("click",puntaje);
    op244.addEventListener("click",remover24);
  }
  var guardar=function(e){
      var con=document.getElementById("p42");
      con.setAttribute("value", ale + " - " + ale2);
      if (a =="A. " + reale + " dolar(es)"){
       var conte=document.getElementById("r42");
       conte.setAttribute("value","A. "+ reale +" dolar(es)");
     } else if (b =="B. "+ ale +" dolar(es)"){
      var conte=document.getElementById("r42");
      conte.setAttribute("value","B. "+ ale +" dolar(es)");
     }
     else if (c =="C. "+ ale2 +" dolar(es)"){
      var conte=document.getElementById("r42");
      conte.setAttribute("value","C. "+ ale2 +" dolar(es)");
     }
     else if (d =="D. "+ reale2 +" dolar(es)"){
      var conte=document.getElementById("r42");
      conte.setAttribute("value","D. "+ reale2 +" dolar(es)");
     }
   }
  var remover24=function(e){
      guardar(e);
    if(resul>5 && resul<9){
      var chao =document.getElementById("problem24");
        chao.remove(chao);
        var chao2 =document.getElementById("opciones24");
        chao2.remove(chao2);
        problem5(e);
        crear5(e);
        opciones5(e);
             }
             else if(resul<=5){
               gameover2(e);
             }
             else if(resul==9){
              var chao =document.getElementById("problem24");
              chao.remove(chao);
              var chao2 =document.getElementById("nivel2");
              chao2.remove(chao2);  
               nivel3(e);
             }
       }
   opcion241(e);
   salto(e);
   salto(e);
   opcion242(e);
   salto(e);
   salto(e);
   opcion243(e);
   salto(e);
   salto(e);
   opcion244(e);
  }
 //problem5
 var problem5=function(e){
  var salto= function(e){
      var saltico= document.createElement("br");
      document.getElementById("problem25").appendChild(saltico);}
 salto(e);
 if(ale<ale2){
  reale2=ale2 + ale;}
  else if(ale>ale2){
   reale2=ale + ale2;}
do {
ale=Math.floor(Math.random()*45)+3;
ale2=Math.floor(Math.random()*45)+3;  
do{
  ale=Math.floor(Math.random()*45)+3;
  ale2=Math.floor(Math.random()*45)+3;   
  }while(ale<ale2)  
do{
  if(ale==ale2){
   ale2=Math.floor(Math.random()*45)+3;}
  }while(ale==ale2);
 if(ale<ale2){
 reale2=ale2 + ale;}
 else if(ale>ale2){
  reale2=ale + ale2;
  reale= ale - ale2;}
}while(reale2==ale || reale2==ale2 || reale==ale || reale==ale2 || ale<=ale2 || reale<=3);
    var problem=document.createTextNode("5. Pedro tenía "+ ale + " dolar(es) y compró un juguete que le costó "+ ale2 +" dolar(es). ¿Cuánto dinero le sobró?");
      var conte=document.getElementById("problem25");
       conte.appendChild(problem);
       conte.setAttribute("align","center");
       conte.setAttribute("class","problem");
 }
  //crear5
  var crear5=function(e){
    var elemento= document.createElement("div");
    elemento.setAttribute("id","form25");
    document.getElementById("opciones25").appendChild(elemento);
  }
 //opciones5
var opciones5=function(e){
  var salto= function(e){
    var saltico= document.createElement("br");
    document.getElementById("form25").appendChild(saltico);}
   var opcion251=function(e){
     var op251=document.createElement("INPUT");
     op251.setAttribute("type", "button");
     op251.setAttribute("id", "boton251");
     op251.setAttribute("class", "boton1");
     op251.setAttribute("value","A. "+ ale2 +" dolar(es)");
     document.getElementById("form25").appendChild(op251);
     var valid =function(e){
         a="A. "+ ale2 +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos25");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos26");
        cont.appendChild(poino);  
       }
    op251.addEventListener("click",valid);
    op251.addEventListener("click",puntaje);
    op251.addEventListener("click",remover25);
   }
   var opcion252=function(e){
    var op252=document.createElement("INPUT");
    op252.setAttribute("type", "button");
    op252.setAttribute("id", "boton252");
    op252.setAttribute("class", "boton2");
    op252.setAttribute("value", "B. "+ reale2 +" dolar(es)");
    document.getElementById("form25").appendChild(op252);
    var valid =function(e){
        b="B. "+ reale2 +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos25");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos26");
        cont.appendChild(poino);  
        puntos = resul;
       }
    op252.addEventListener("click",valid);
    op252.addEventListener("click",puntaje);
    op252.addEventListener("click",remover25);
  }
  var opcion253=function(e){
    var op253=document.createElement("INPUT");
    op253.setAttribute("type", "button");
    op253.setAttribute("id", "boton253");
    op253.setAttribute("class", "boton3");
    op253.setAttribute("value", "C. "+ reale +" dolar(es)");
    document.getElementById("form25").appendChild(op253);
    var valid =function(e){
        c="C. "+ reale +" dolar(es)";
        alert("Muy bien repuesta correcta, puntos ganados:" +" "+ (puntos2 + 1));
        resul = resul + puntos2 + 1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos25");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos26");
        cont.appendChild(poino);  
       }
    op253.addEventListener("click",valid);
    op253.addEventListener("click",puntaje);
    op253.addEventListener("click",remover25);
  }
  var opcion254=function(e){
    var op254=document.createElement("INPUT");
    op254.setAttribute("type", "button");
    op254.setAttribute("id", "boton254");
    op254.setAttribute("class", "boton4");
    op254.setAttribute("value", "D. "+ ale +" dolar(es)");
    document.getElementById("form25").appendChild(op254);
    var valid =function(e){
        d="D. "+ ale +" dolar(es)";
        alert("Esta no es la respuesta, sigue intentando");
        resul = resul + puntos1;  
    }
    var puntaje= function(e){
       var element=document.getElementById("puntos25");
       element.remove(element);
       var poino=document.createTextNode(valor + ", tu puntaje es: " + resul );
       var cont=document.getElementById("puntos26");
        cont.appendChild(poino); 
       }
    op254.addEventListener("click",valid);
    op254.addEventListener("click",puntaje);
    op254.addEventListener("click",remover25);
  }
  var guardar=function(e){
      var con=document.getElementById("p52");
      con.setAttribute("value", ale + " - " + ale2);
      if (a =="A. " + ale2 + " dolar(es)"){
       var conte=document.getElementById("r52");
       conte.setAttribute("value","A. "+ ale2 +" dolar(es)");
     } else if (b =="B. "+ reale2 +" dolar(es)"){
      var conte=document.getElementById("r52");
      conte.setAttribute("value","B. "+ reale2 +" dolar(es)");
     }
     else if (c =="C. "+ reale +" dolar(es)"){
      var conte=document.getElementById("r52");
      conte.setAttribute("value","C. "+ reale +" dolar(es)");
     }
     else if (d =="D. "+ ale +" dolar(es)"){
      var conte=document.getElementById("r52");
      conte.setAttribute("value","D. "+ ale +" dolar(es)");
     }
   }
  var remover25=function(e){
      guardar(e);
   if(resul<9){
               gameover2(e);
             }
             else if(resul==9){
              var chao =document.getElementById("problem25");
              chao.remove(chao); 
              var chao2 =document.getElementById("nivel2");
              chao2.remove(chao2);  
               nivel3(e);
             }
       }
   opcion251(e);
   salto(e);
   salto(e);
   opcion252(e);
   salto(e);
   salto(e);
   opcion253(e);
   salto(e);
   salto(e);
   opcion254(e); 
  }
  //termina el test-nivel2
 var gameover5=function(e){
  var chao=document.getElementById("nivel5");
   chao.remove(chao);
   resultados5(e);
   regresar5(e);
}
//estadistica de la prueba 1
var resultados5=function(e){
  var salto= function(e){
    var saltico= document.createElement("br");
    document.getElementById("final5").appendChild(saltico);}
    salto(e);
    salto(e);
    salto(e);
  var elemento=document.createTextNode(valor  + " el test ha terminado,su resultado fue: " + resul);
 document.getElementById("final5").appendChild(elemento);
 salto(e);
 salto(e);
}
// returnInicio
var regresar5=function(e){
  var boton=document.createElement("INPUT");
  boton.setAttribute("type", "submit");
  boton.setAttribute("name", "enviar");
  boton.setAttribute("id", "botonreset");
  document.getElementById("final5").appendChild(boton); 
}
  }
  }
  niveles();
})();
  