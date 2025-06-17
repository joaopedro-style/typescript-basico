"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saudacao(nome) {
    return `Olá ${nome}!`;
}
console.log(saudacao("João"));
// console.log( saudacao(10) ); // erro, é passado number
// console.log( saudacao(true) ); // erro, é passado boolean
