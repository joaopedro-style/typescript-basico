"use strict";
const produtoA = {
    nome: "TV",
    preco: 1700,
    garantia: 5,
};
const produtoB = {
    nome: "Geladeira",
    preco: 3500,
    garantia: 7,
};
function produtos({ nome, preco, garantia }) {
    console.log("Produto: " + nome);
    console.log("Preço: " + preco);
    console.log("Garantia: " + garantia);
}
