/*
let re1 = new RegExp("abc");
let re2 = /[0-9]/;

result = re1.test("abc"); //true
console.log(result);
result = re2.test("aniversario en 1985"); // es ture por qué tiene digitos 
console.log(result); //true

//let re3 = /\d+-\d+-\d+/; así solo acepta como separador el guión -, si se pone / no lo cepta
let re3 = /\d+[-|/]\d+[-|/]\d+/; //acepta las dos formas de separador - o /
console.log(re3.test("13/7/1991")); //true
console.log(re3.test("18-06-1999")); //true

let re4 = /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let re5 = /(\d{1,2})[-|/](\d{1,2})[-|/](\d{4})/;

let re6 = /[aeiou]/; //este caso determina si existe una vocal, en caso contrario [aeiou] lo determina como cadena completa
console.log(re6.test("start")); // true

// Remplazo todas las voclaes en la palabra correcaminos
let mensaje = "correcaminos";
let newMensaje = mensaje.replace(/[^aeiou]$/g, "*");
console.log(newMensaje);

let mensaje2 = "el 20 de enero de 2019 se dio inicio a la 3 semana nacional de tecnologia";
let newMensaje2 = mensaje2.replace(/[a-z]{5,}/g, "");
console.log(newMensaje2);

*/

var historia = " JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico";
var expresion = /[A-Z][^aeiou][a-z]+/g;
result = historia.match(expresion);
console.log(result);