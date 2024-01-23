let output = document.querySelector(".text__output");
let entrada = document.querySelector(".text__input");
//funcao para capturar o valor do input
function codify() {
  output.value = "";
  let text = document.querySelector(".text__input").value;
  //alerta caso o campo esteja vazio
  if (text == "") {
    alert("Digite um texto para codificar");
    return;
  }
  let var_e = "enter";
  let var_i = "imes";
  let var_a = "ai";
  let var_o = "ober";
  let var_u = "ufat";
  let word = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "e") {
      word += var_e;
    } else if (text[i] == "i") {
      word += var_i;
    } else if (text[i] == "a") {
      word += var_a;
    } else if (text[i] == "o") {
      word += var_o;
    } else if (text[i] == "u") {
      word += var_u;
    } else word += text[i];
  }
  //   console.log(word);
  //devolve o valor para o output e reseta o campo input
  output.value = word;
  entrada.value = "";
}
//funcao para decodificar o texto do input
function decodify() {
  let text = document.querySelector(".text__input").value;
  //alerta caso o campo esteja vazio
  if (text == "") {
    alert("Digite um texto para decodificar");
    return;
  }
  let word = "";
  word = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  console.log(word);
  output.value = word;
  entrada.value = "";
}
//funcao para copiar o texto do output para a area de transferencia
function copy() {
  let text = document.querySelector(".text__output").value;
  navigator.clipboard.writeText(text);
}
