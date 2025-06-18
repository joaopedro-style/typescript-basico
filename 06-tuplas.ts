// 06-tuplas.ts
export {};

/* Tuplas
São um tipo de array especial usada quando precisamos armazenar um conjunto fixo de elementos de tipos diferentes. obs.: se usar readonly, a tupla não poderá modificar (somente leitura) */
const usuario: /* readonly */ [string, number, boolean] = ["João", 28, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");

usuario[1] = 30; // atualizado um valor da tupla (desde que não seja readonly)
console.log(usuario[1] + " anos.");
