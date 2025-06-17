// exercicio01.ts

/* Crie uma função chamda "exibirCor" que aceite:
- nome da pessoa (obrigatório)
- cor preferida da pessoa (opcional) 

Atenção: O parâmetro cor deve ser do tipo Cor e aceitar somente 5 cores.

2) Chame a função pelo menos 2x:
- Na primeira, passe o nome e uma cor (das possíveis)
- Na segunda, passe somente o nome */

type Cores = "Preto" | "Vermelho" | "Laranja" | "Dourado" | "Amarelo";

function exibirCor(nome: string, cor?: Cores) {
  if (cor) {
    return `O ${nome} gosta da cor ${cor}`;
  }
  return `Olá ${nome}`;
}

console.log(exibirCor("João Pedro", "Dourado"));
console.log(exibirCor("João Pedro"));
