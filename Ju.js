const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome: ");
let letra = prompt("Digite uma letra: ");

const maiusculo = texto => texto.toUpperCase();

const minusculo = texto => texto.toLowerCase();

console.log(
"Aluno: " + nome + "!\n" +
"O nome digitado foi: " + nome + "\n" +
"A letra pesquisada foi: " + letra + "\n" +
"A posição da letra pesquisada foi: " + nome.indexOf(letra) + "\n" +
"O nome possui " + nome.length + " caracteres\n" +
"Todo o texto em maiúsculo: " + maiusculo(nome) + "\n" +
"Todo o texto em minúsculo: " + minusculo(nome)
);
