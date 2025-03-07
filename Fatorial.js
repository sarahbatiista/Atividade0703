let n = parseInt(prompt("Digite o número que será fatorado: "));

function calcularFatorial(n) {
  if (n === 0 || n === 1) return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

console.log(calcularFatorial(n));
