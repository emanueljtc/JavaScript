// function saludo(nombre) {
//       document.write("Bienvenido al Sistema" + nombre);
// }
//   saludo(" Emanuel");

// function suma(num1, num2){
//     var num1 = num1;
//     var num2 = num2;
//
//     return num1 + num2;
//
// }
//     document.write( suma(10,20));
    //FUNCIONES ANONIMAS
    numeroMaximo = function (valor1 , valor2){
      if(valor1 > valor2){
          return valor1;
      }else {
        return valor2;
      }
    }
  document.write("El numero Maximo es: " + numeroMaximo(2,6));
