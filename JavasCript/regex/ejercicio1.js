// PRIMER EJERCICIO
console.log("\n1.-palabras con logitud mayor a 7");
let mensaje2 = "el 20 de enero de 2019 se dio inicio a la 3 semana nacional de tecnologia";
let newMensaje2 = mensaje2.replace(/[a-z]{7,}/g, "");
console.log(newMensaje2);

// SEGUNDO EJERCICIO
console.log("\n2.-expresiones que no finalicen con vocal.");
let letra = /[aeiou]/;
console.log(letra.test("start"));
let palabra = /[^aeiou]$/g;
console.log(palabra.test("hora"));

//TERCER EJERCICIO
console.log("\n3.-inicia con m y la 2da no sea vocal.")
let palabra1 = /[m,M][^aeiou]/;
console.log(palabra1.test("morca"));
console.log(palabra1.test("\nMharca"));


//CUARTO EJERCICIO
console.log("\n4.-deteccion de comillas");
let palabra5 = /['""']/;
let caminar = 'el 20 de enero de 2019 se dio "inicio" a la 3 semana nacional de tecnologia';
console.log(caminar);
console.log(palabra5.test(caminar));
caminar = '\nel 20 de enero de 2019 se dio inicio a la 3 semana nacional de tecnologia';
console.log(caminar);
console.log(palabra5.test(caminar));

//QUINTO EJERCICIO
console.log("\n5.-Deteccion de ip:\n");
let palabra6 = /[(127\.0\.0\.1)]/;
let ipss = "estos son los formatos de la direccion ip";
console.log(ipss);
console.log(palabra6.test(ipss));
ipss = "\nestos son los formatos de la direccion ip";
console.log(ipss);
console.log(palabra6.test(ipss));

//SEXTO EJERCICIO
console.log("\n6.- deteccion de hora\n");
let palabra7 = /["H:MM:SS"]/;
let hora = "muchos salen a caminar 5:00";
console.log(hora);
console.log(palabra7.test(hora));
hora = "\nmuchos salen a caminar ";
console.log(hora);
console.log(palabra7.test(hora));

//SEPTIMO EJERCICIO
console.log("\n7.- deteccion de correo.\n");
let palabra8 = /[a-z][@][a-z][a-z]/;
let correo = "esta horacion tiene un correo geovani@itsva.edu.mx";
console.log(correo);
console.log(palabra8.test(correo));
correo = "esta horacion tiene un correo geovaniitsva.edu.mx";
console.log(correo);
console.log(palabra8.test(correo));

// OCTAVO EJERCICIO
console.log("\n8.- deteccion de numero telefonico.\n");
let palabra9 = /\d\d\d+[-|" "]\d\d\d+[-|" "]\d\d+[-|" "]\d\d/;
let telefono = "cual podria un numero valido esto 985 852 58 03";
console.log(telefono);
console.log(palabra9.test(telefono));
telefono = "\ncual podria un numero valido esto ";
console.log(telefono);
console.log(palabra9.test(telefono));


//NOVENO EJERCICIO
console.log("\n9.- deteccion de url.\n");
let palabra10 = /http|htpps|tps(:)(\/)(\/)[a-z]/g;
let urlss = "cual podria un numero valido esto http://www.javascript.js.com";
console.log(urlss);
console.log(palabra10.test(urlss));
urlss = "\ncual podria un numero valido esto ";
console.log(urlss);
console.log(palabra10.test(urlss));

//DECIMO EJERCICIO
console.log("\n10.-Deteccion de codigo postal");
let palabra11 = /[0-9]{5,}/;
let postal = "cual podria un numero valido esto 957762";
console.log(postal);
console.log(palabra11.test(postal));
postal = "\ncual podria un numero valido esto";
console.log(postal);
console.log(palabra11.test(postal));