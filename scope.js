// Global - Podemos acceder desde cualquier parte del codigo
// Locales - Variables Cradas dentro de una funcion que solo pueden ser
            //accedidas desde la misma funcion u otra anidada


// miFuncion();
// //alert(variableLocal);

//PROTEGER FUNCIONES

  (function(){
    var variableGlobal = "Esta es Global";
     var miFuncion = function(){
               var variableLocal = "Esta es Local";
               //alert(variableGlobal);
               //variableGlobal = "Esta es Global, Modificada";
               //alert(variableLocal);ç
               var funcionlocal = function(){
                   var variableLocal = "Local dentro de funcion local";
                   alert(variableLocal);
               }
               funcionlocal();
    }
    miFuncion();
  }())
