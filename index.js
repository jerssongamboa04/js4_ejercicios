
// ## 💻 Ejercicios

// ### Ejercicios: Nivel 1

/* 1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', 
pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
*/
//    ```sh
//    Ingrese su edad: 30
//    Tiene la edad suficiente para conducir.

//    Ingrese su edad:15
//    Te faltan 3 años para conducir.



/*
let age = prompt('ingresa tu edad');

if (age >= 30) {
    console.log('Tiene la edad suficiente para conducir');
}else if (age <= 15) {

    console.log('Te faltan 3 años para conducir');
}

*/


//    ```

/* 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, 
registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt
(“Ingrese su edad:”) para obtener la edad como entrada.*/

//    ```sh
//    Ingrese su edad: 30
//    Eres 5 años mayor que yo.


/*


let myAge = prompt('Ingrese su edad');
let yourAge = 30;

if (myAge < yourAge ) {

    console.log('Eres 5 años mayor que yo');

} else if (myAge > yourAge) {
    console.log('Yo soy mayor')
}

*/


//    ```

/* 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. 
Trate de implementarlo de maneras diferentes */

//    - Usando if else
// let a = prompt('Ingrese un valor para a')
// let b = 3;

// if (a > b) {
//     console.log('a es mayor que b')
// }

// else if ( a < b){
//     console.log('a es menor que b')
// }

//    - operador ternario.


// ? console.log( a > b)
// : console.log( a < b)

//    ```js
//    let a = 4;
//    let b = 3;
//    ```

//    ```sh
//      4 es mayor que 3
//    ```

// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

//    ```sh
//    Ingrese un número: 2
//    2 es un número par

// let par = parseInt(prompt('ingresa un numero par o inpar'))

// if (typeof par === "number") {
//     if (par % 2 == 0) {
//         console.log('Esto es un numero par')
//     }
//     else {
//         console.log('Esto es un numero impar')
//     }
// }else{
//     console.log("Entrada incorrecta")
// }
//    Ingrese un número: 9
//    9 es un número impar
//    ```

// ### Ejercicios: Nivel 2

// 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

// let note = prompt("ingrese la nota por favor:");

// if (note >= 0 && note <= 49) {
//     console.log("E");

// } else if (note >= 50 && note <= 59) {
//     console.log("D");

// } else if (note >= 60 && note <= 69) {
//     console.log("C");

// } else if (note >= 70 && note <= 89) {
//     console.log("B");

// } else if (note >= 80 && note <= 100) {
//     console.log("A");

// } else {
//     console.log("Formato de nota incorrecto")
// }

// 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano.
//    Si la entrada del usuario es :

//    - Septiembre, Octubre o Noviembre, la temporada es Otoño.
//    - Diciembre, Enero o Febrero, la temporada es Invierno.
//    - Marzo, Abril o Mayo, la temporada es Primavera
//    - Junio, Julio o Agosto, la temporada es Verano

let season = prompt('ingresa un mes')

switch (season) {
    case "septiembre":
      console.log("la temporada es Otoño");
      break;
    case "octubre":
      console.log("la temporada es Otoño");
      break;
    case "noviembre":
      console.log("la temporada es Otoño");
      break;
    case "diciembre":
      console.log("la temporada es Invierno");
      break;
    case "enero":
      console.log("la temporada es Invierno");
      break;
    case "febrero":
      console.log("la temporada es Invierno");
      break;
    case "marzo":
      console.log("la temporada es Primavera");
      break;

      case "abril":
      console.log("la temporada es Primavera");
      break;

      case "mayo":
      console.log("la temporada es Primavera");
      break;

      case "junio":
      console.log("la temporada es Verano");
      break;

      case "julio":
      console.log("la temporada es Verano");
      break;

      case "agosto":
      console.log("la temporada es Verano");
      break;

    default:
      console.log("No es un mes .");
  }
// 3. Compruebe si un día es un día de fin de semana o un día laborable.
//  Su script tomará el día como entrada.

// ```sh
//     ¿Qué día es hoy? Sábado
//     El sábado es fin de semana.

//     ¿Qué día es hoy? sábAdo
//     El sábado es fin de semana.

//     ¿Qué día es hoy? Viernes
//     El viernes es un día laborable.

//     ¿Qué día es hoy? ViErNes
//     El viernes es un día laborable.
// ```

let dia = prompt('ingrese un dia de la semana')
let day = dia.toLowerCase();

switch (day) {
    case "lunes":
      console.log("El lunes es un dia laborable");
      break;
    case "martes":
      console.log("El Martes es un dia laborable");
      break;
    case "miércoles":
      console.log("El Miércoles es un dia laborable");
      break;
    case "jueves":
      console.log("El Jueves es un dia laborable");
      break;
    case "viernes":
      console.log("El Viernes es un dia laborable");
      break;
    case "sábado":
      console.log("El Sábado es fin de semana");
      break;
    case "domingo":
      console.log("El Domingo es fin de semana");
      break;
    default:
      console.log("No es un día de semana.");
  }



// ### Ejercicios: Nivel 3

// 1. Escribe un programa que diga el número de días en un mes.

// ```sh
//   Introduce un mes: Enero
//   Enero tiene 31 días.

//   Introduce un mes: ENERO
//   enero tiene 31 dias

//   Introduce un mes: Febrero
//   Febrero tiene 28 días.

//   Introduce un mes: FEbrero
//   Febrero tiene 28 días.
// ```

// 2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.

let usuario = prompt('ingrese un mes')
let  usuarioMonth = usuario.toLocaleLowerCase();
let typeYears = prompt('indique el tipo de año')

switch (usuarioMonth) {
    case "septiembre":
      console.log("Septiembre tiene 30 dias");
      break;
    case "octubre":
      console.log("Octubre tiene 31 dias");
      break;
    case "noviembre":
      console.log("Noviembre tiene 30 dias");
      break;
    case "diciembre":
      console.log("Diciembre tiene 31 dias");
      break;
    case "enero":
      console.log("Enero tiene 31 días");
      break;
    case "febrero":
        if (typeYears === 'bisiesto') {
            console.log( 'febrero tiene 29 dias');
        } else {
        console.log("Febrero tiene 28 dias");
        }
      break;
    case "marzo":
      console.log("Marzo tiene 31 dias");
      break;

      case "abril":
      console.log("Abril tiene 30 dias");
      break;

      case "mayo":
      console.log("Mayo tiene 31 dias");
      break;

      case "junio":
      console.log("Junio tiene 30 dias");
      break;

      case "julio":
      console.log("Julio tiene 31 dias");
      break;

      case "agosto":
      console.log("Agosto tiene 31 dias");
      break;

    default:
      console.log("No es un mes .");
  }

