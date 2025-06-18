"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
const bandas = ["Metallica", "Slayer", "Iron Maiden"];
bandas.push("Nightwish");
console.log(bandas);
const artistas = ["Jon Oliva", "Sting", "David Gilmour"];
artistas.push("Neil Peart");
console.log(artistas);
(0, modulos_1.separador)();
const pessoas = ["João", 28, "Pedro", 25];
console.log(pessoas);
(0, modulos_1.separador)();
const linguagens = [
    ["JS", "TS"],
    ["HTML", "CSS", "Bootstrap"],
];
console.log(linguagens[0][0]);
console.log(linguagens[1][0]);
(0, modulos_1.separador)();
const numeros = [700, 1700, 17000, 27000, 37000];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma);
