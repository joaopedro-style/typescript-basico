// 08-interfaces.ts
export {};

/* Interfaces são usadas para definir a forma de um objeto, especializando os tipos de suas propriedades e métodos. São úteis para garantir que os objetos sigam uma estrutura específica. */

interface Usuario {
  nome: string;
  idade: number;
  ativo: boolean;
  email?: string;
}

const usuarioA: Usuario = {
  nome: "João",
  idade: 28,
  ativo: true,
};

const usuarioB: Usuario = {
  nome: "Pedro",
  idade: 23,
  ativo: false,
  email: "Pedro007@gmail.com",
};

console.log(usuarioA);
console.log(usuarioB);
