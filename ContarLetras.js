let frase = prompt("Digite a frase: ");

function contarLetras(frase) {
  let fraseSemEspaco = frase.replace(/ /g, "");
  console.log(fraseSemEspaco.length);
}

contarLetras(frase);
