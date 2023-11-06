// Declaración de variables
var firstName = "Juan";
var lastName = "López";
var country = "Mexico";
var city = "Playa del carmen";
var age = 18;
var isMarried = false;
var year = 2023;

// Verificar tipos de datos usando typeof
console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

// Verificar igualdad usando typeof
console.log(typeof 10 === typeof 3); // true
console.log(typeof parseInt('9.8') === typeof 4); // true

// Verificar cualquier valor booleano true o false
var booleanValue = true;
console.log(typeof booleanValue === 'boolean'); // true

// Declaraciones que proporcionan un valor verdadero
console.log(5 > 3); // true
console.log('JavaScript' === 'JavaScript'); // true
console.log(10 !== 5); // true

// Declaraciones que proporcionan un valor falso
console.log(4 < 2); // false
console.log('Hello' === 'World'); // false
console.log(20 === '20'); // false


// Confirmar resultados usando console.log()
console.log(4 > 3);      // true
console.log(4 >= 3);     // true
console.log(4 < 3);      // false
console.log(4 <= 3);     // false
console.log(4 == 4);     // true
console.log(4 === 4);    // true
console.log(4 != 4);     // false
console.log(4 !== 4);    // false
console.log(4 != '4');   // false
console.log(4 == '4');   // true
console.log(4 === '4');  // false


// Obtener la fecha actual
var fechaActual = new Date();

// ¿Qué año es hoy?
var añoActual = fechaActual.getFullYear();
console.log("Año actual: " + añoActual);

// ¿Qué mes es hoy con un número? (0 = enero, 1 = febrero, ..., 11 = diciembre)
var mesActual = fechaActual.getMonth();
console.log("Mes actual: " + mesActual);

// ¿Qué fecha es hoy?
var fechaDelDia = fechaActual.getDate();
console.log("Fecha actual: " + fechaDelDia);

// ¿Qué día es hoy con un número? (0 = domingo, 1 = lunes, ..., 6 = sábado)
var diaDeLaSemana = fechaActual.getDay();
console.log("Día de la semana actual: " + diaDeLaSemana);

// ¿Cuál es la hora actual?
var horaActual = fechaActual.getHours();
console.log("Hora actual: " + horaActual);

// ¿Cuántos minutos hay actualmente?
var minutosActuales = fechaActual.getMinutes();
console.log("Minutos actuales: " + minutosActuales);

// ¿Cuántos segundos han transcurrido desde el 1 de enero de 1970 hasta ahora?
var segundosDesde1970 = Math.floor(fechaActual.getTime() / 1000);
console.log("Segundos transcurridos desde 1970: " + segundosDesde1970);


// Solicitar al usuario que ingrese la base y la altura del triángulo
var base = prompt("Ingrese la base del triángulo:");
var altura = prompt("Ingrese la altura del triángulo:");

// Convertir las entradas a números
base = parseFloat(base);
altura = parseFloat(altura);

// Calcular el área del triángulo (área = 0.5 * base * altura)
var areaTriangulo = 0.5 * base * altura;

// Mostrar el resultado
console.log("El área del triángulo es: " + areaTriangulo);