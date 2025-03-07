let texto = prompt("Digite o texto: ");

function ehPalindromo(texto) {
  let textoMinusculo = texto.toLowerCase();
  let textoSemEspaco = textoMinusculo.replace(/ /g, "");
  let palindromo = textoSemEspaco.split("").reverse().join("");

  if (textoSemEspaco === palindromo) {
    console.log("É um palíndromo");
  } else {
    console.log("Não é um palíndromo!");
  }
}

ehPalindromo(texto);
