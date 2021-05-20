// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArray = []
  for (let prop in objeto) {
    nuevoArray.push([prop, objeto[prop]]);
} return nuevoArray;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var nuevoObjeto = {};
  for (let i in string) {
    if (!nuevoObjeto.hasOwnProperty([string[i]])) {
      nuevoObjeto[string[i]] = 1}
      else {
      nuevoObjeto[string[i]] += 1
      }
    } return nuevoObjeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var array = s.split('')
  var nuevoObjeto1 = []
  var nuevoObjeto2 = []
  for (var i = 0; i < array.length; i++) {
       if (array[i].charCodeAt() >= 65 && array[i].charCodeAt() <= 90) {
               nuevoObjeto1.push(array[i]);
           } else {
               nuevoObjeto2.push(array[i]);
           }
       }
    return nuevoObjeto1.join('') + nuevoObjeto2.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
    var cadenaInvertida = [];
    var nuevoArray = str.split(' ');
    for (var i = 0; i < nuevoArray.length ; i ++) {
        for (var j = nuevoArray[i].length -1; j >= 0; j --) {
        cadenaInvertida.push(nuevoArray[i][j]);
      } cadenaInvertida.push(' ');
    } cadenaInvertida.pop();
   return cadenaInvertida.join('')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var nuevoNumero = numero.toString()
  if (nuevoNumero === nuevoNumero.split('').reverse().join('')) {
      return 'Es capicua'
  } else {
      return 'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadena1 = cadena.split('');
  var nuevaCadena = []
  for (var i = 0; i <cadena1.length; i ++) {
    if (cadena1[i] === 'a' || cadena1[i] === 'b' || cadena1[i] === 'c') {
      cadena1[i] = false
    } else {
      nuevaCadena.push(cadena1[i])
    }
  } return nuevaCadena.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nuevaMatriz = []
  nuevaMatriz = arr.sort((a, b) => a.length - b.length)
  return nuevaMatriz
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray = [];
  for (var i = 0; i < arreglo1.length; i ++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        nuevoArray.push(arreglo1[i])
      }
    }
  } return nuevoArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
