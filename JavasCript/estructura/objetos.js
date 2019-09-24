const saludar = () => {
    return "hola a todos";
}

let persona = {
    nombre: "Juan",
    apellido: "perez",
    edad: 25,
    peso: 60.5,
    hobbies: ["musicas", "futboll", "internet"],
    saludar
};

persona.apellido = "perez sosa";
console.log(persona.nombre + " " + persona.apellido);
console.log(persona.hobbies);
console.log(persona.saludar);

//Arreglos de objeto
let frutas = [{
        nombre: "grosellas",
        familia: "saxi franceas",
        calorias: 29.0
    },
    {
        nombre: "limon",
        familia: "ruleceas",
        calorias: 40.2
    },
    {
        nombre: "piña",
        familia: "bromeliaceas",
        calorias: 46
    }
];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}