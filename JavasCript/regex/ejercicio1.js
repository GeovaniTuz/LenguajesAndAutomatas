// PRIMER EJERCICIO
let mensaje2 = "el 20 de enero de 2019 se dio inicio a la 3 semana nacional de tecnologia";
let newMensaje2 = mensaje2.replace(/[a-z]{7,}/g, "");
console.log(newMensaje2);

// SEGUNDO EJERCICIO
let letra = /[aeiou]/;
console.log(letra.test("start"));
let palabra = /[^aeiou]$/g;
console.log(palabra.test("hora"));

//TERCER EJERCICIO

let palabra1 = /[m,M][^aeiou]/;
console.log(palabra1.test("morca"));
console.log(palabra1.test("Mharca"));


//CUARTO EJERCICIO
let palabra5 = /["''"]/;
console.log(palabra5.test("el 20 de enero de 2019 se dio 'inicio' a la 3 semana nacional de tecnologia"));
/*
let palabra6 = /['""']/;
console.log(palabra6.test('el 20 de enero de 2019 se dio "inicio" a la 3 semana nacional de tecnologia'));4
*/
//QUINTO EJERCICIO

let palabra6 = /[0-90[.][0-9][1-9]/;
console.log(palabra6.test("estos son los formatos de la direccion ip 10.128.1.255"));

//SEXTO EJERCICIO
let palabra7 = /["H:MM:SS"]/;
console.log(palabra7.test("muchos salen a caminar 5:00 "));

//SEPTIMO EJERCICIO
let palabra8 = /[a-z][@][a-z][a-z]/;
console.log(palabra8.test("cual podria ser un correo valido jesus.maykauil@itsva.edu.mx"));

// OCTAVO EJERCICIO
let palabra9 = /[0-9]{10,}/;
console.log(palabra9.test("cual podria un numero valido esto 98712667  o 9858525803"));

//NOVENO EJERCICIO

let palabra10 = /[a-z]["."][a-z]["."][a-z] && [a-z][^"."][a-z][^"."][a-z]/;
console.log(palabra10.test("cual podria un numero valido esto http//www.casas.com"));

//DECIMO EJERCICIO
let palabra11 = /[0-9]{5,}/;
console.log(palabra11.test("cual podria un numero valido esto 957762"));