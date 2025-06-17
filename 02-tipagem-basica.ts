// 02-tipagem-basica.ts
export {};

// Exemplo de tipos básicos
let idade: number = 30;
let ativo: boolean = true;
let nome: string = "Beltrano";

console.log(`${nome} tem ${idade} anos.`);

// Nova atribuição
idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`Status: ${ativo ? "Ativo" : "Inativo"}`);
