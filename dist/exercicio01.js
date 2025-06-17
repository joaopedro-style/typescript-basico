"use strict";
function exibirCor(nome, cor) {
    if (cor) {
        return `O ${nome} gosta da cor ${cor}`;
    }
    return `Olá ${nome} você não escolheu uma cor.`;
}
console.log(exibirCor("João Pedro", "Dourado"));
console.log(exibirCor("João Pedro"));
