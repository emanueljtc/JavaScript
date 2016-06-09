var amigos =["Carlos","Marucio","Cesar"];
  //amigos[0] = "Ana"; //Cambiando valor de la posicion 0
    //document.write("Tienes "+ amigos.length +" amigos");
      //amigos[amigos.length] = "Fernando"; //AGREGAR VALOR A POSCION FINAL
        //amigos.push("Luis","Oscar","Fifo"); //AGREGAR VARIOS ELEMENTOS AL FINAL
          //amigos.pop(); //ELIMINAR POSCION FINAL
//UNIR arreglos
//var amigos2 = ["Luis","Daniela","Laura"];
  //var amigos3 = amigos.concat(amigos2);
    //document.write(amigos3);

  //document.write(amigos.join(" , ")); //separar valores por el caracter definido
//ORDENAR ELEMENTOS
    var ordenados = amigos.sort();

    var ordenados2 = amigos.reverse();
    document.write(ordenados+" - "+ ordenados2);
