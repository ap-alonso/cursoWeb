let nombreJm = "Jess", edadJm = 23, sexoJm = "femenino" ;

//Un objeto es una coleccion de carateristicas que le pertenecen a un elemento
let objetoJm = { "nombre": nombreJm, "edad": edadJm, 'sexo': sexoJm };

//impre(objetoJm.edad);

arrayBasico = ["V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7"];
    //impre(arrayBasico);

for (let i = 0; i < arrayBasico.length; i++) {
    //impre('posición: '+ i);
    //impre('valor: ' +arrayBasico[i]);
}


//Un arreglo es una coleccion de elementos.
arrayHumanos = ["jersay", "alejandro", "janet"];
//impre(arrayHumanos);

arrayDatosHumanos = [
  { nombre: "jersay", edad: "30", sexo: "masculino" },
  { nombre: "alejandro", edad: "36", sexo: "masculino" },
  { nombre: "janet", edad: "29", sexo: "femenino" },
  { nombre: "jorge", edad: "38", sexo: "no binario" },
  { nombre: "Andres", edad: "60", sexo: "Masculino" },
];
//impre(arrayDatosHumanos);
//impre(arrayDatosHumanos[0].nombre );
//impre(arrayDatosHumanos[1].nombre);
//impre(arrayDatosHumanos[2].nombre);

for (let i = 0; i < arrayDatosHumanos.length; i++) {
  //impre(arrayDatosHumanos[i].nombre);
}

 jQuery.each(arrayDatosHumanos, function (i, x) {
            
  

 });
 



arraySizeDH = arrayDatosHumanos.length;
//impre(arraySizeDH);

//   i comienza en 0,i tiene que ser menor que el tamaño del arreglo,i va a ir aumentando uno por 1
/*
for (let i = 0; i < 5; i++) {
    impre([i]);
    impre(arrayDatosHumanos[i].nombre);
} 
*/

arrayNumeros=[1,2,3];
//impre([1]);
for (let a = 0; a < arrayNumeros.length; a++) {
    //impre([1]);
}















// Función console.log
function impre(elemento) {
  console.log(elemento);
}