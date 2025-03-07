let min = parseInt(prompt("Digite o valor mínimo: "));
let max = parseInt(prompt("Digite o valor máximo: "));

function gerarNumeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(gerarNumeroAleatorio(min, max));
