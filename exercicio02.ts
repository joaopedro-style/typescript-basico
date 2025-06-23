// exercicio02.ts

/* 1) Crie uma interface para representar um produto com as propriedades nome, preço, e garantia. */

/* 2) Cria uma função que receba um objeto baseado na interface produto e que mostre nome, preço, e garantia. obs.: o objeto deve ser desestruturado como parâmetros individuais. */

/* 3) Use a função pelo menos 2x passando produtos diferentes. */

interface Produto {
  nome: string;
  preco: number;
  garantia: string;
}

const produtoA: Produto = {
  nome: "TV",
  preco: 1700,
  garantia: "30 meses",
};

const produtoB: Produto = {
  nome: "Geladeira",
  preco: 3500,
  garantia: "50 meses",
};

function produtos({ nome, preco, garantia }: Produto): void {
  console.log("Produto: " + nome);
  console.log("Preço: " + preco);
  console.log("Garantia: " + garantia);
}

console.log(produtoA);
console.log("-------------------------");
console.log(produtoB);
