import { separador } from "./modulos";

// 05-arrays.ts
export {};

// Sintaxe 1
const bandas: Array<string> = ["Metallica", "Slayer", "Iron Maiden"];
// bandas.push(10); // erro
bandas.push("Nightwish");
console.log(bandas);

// Sintaxe 2
const artistas: string[] = ["Jon Oliva", "Sting", "David Gilmour"];
artistas.push("Neil Peart");
console.log(artistas);

separador();

// Arrays com tipos mistos ou combinados
const pessoas: (string | number)[] = ["João", 28, "Pedro", 25];
console.log(pessoas);

separador();

// Matriz tipada
const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][0]);

separador();

/* Mini-exercício
1) Crie um array de números
2) Calcule a soma de todos os elementos e guarde numa variável
3) Mostre o resultado da soma */

const numeros: number[] = [700, 1700, 17000, 27000, 37000];
// versão tipada implicitamente (mais concisa)
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma);

// versão Tipada explicitamente (mais verbosa)
// const soma:number = numeros.reduce((acumulador:number, numero:number): number => acumulador + numero, 0);
