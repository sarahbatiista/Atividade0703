let a = parseFloat(prompt("Digite o valor de A: "));
let b = parseFloat(prompt("Digite o valor de B: "));

function calcularHipotenusa(a, b) {
  let c = a * a + b * b;
  console.log(Math.sqrt(c));
}

calcularHipotenusa(a, b);
