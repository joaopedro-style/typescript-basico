"use strict";
const produtoA = {
    nome: "TV",
    preco: 1700,
    garantia: "30 meses",
};
const produtoB = {
    nome: "Geladeira",
    preco: 3500,
    garantia: "50 meses",
};
function produtos({ nome, preco, garantia }) {
    console.log("Produto: " + nome);
    console.log("Preço: " + preco);
    console.log("Garantia: " + garantia);
}
console.log(produtoA);
console.log("-------------------------");
console.log(produtoB);
