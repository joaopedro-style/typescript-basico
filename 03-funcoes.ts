// 03-funcoes.ts
export {};

function saudacao(nome: any): string {
  return `Olá ${nome}!`;
}

console.log(saudacao("João"));
// console.log( saudacao(10) ); // erro, é passado number
// console.log( saudacao(true) ); // erro, é passado boolean
