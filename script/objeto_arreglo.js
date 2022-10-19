//Un objeto es una coleccion de carateristicas que le pertenecen a un elemento
let objetoJersay = { nombre: "jersay", edad: "30", sexo: "masculino" };
//impre(objetoJersay.nombre);

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
// impre(arrayDatosHumanos);
// impre(arrayDatosHumanos[2].nombre );
// impre(arrayDatosHumanos[2].edad );
 



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
impre([1]);
for (let a = 0; a < arrayNumeros.length; a++) {
    //impre([1]);
}















// Función console.log
function impre(elemento) {
  console.log(elemento);
}