let output = document.querySelector("#text__output");
let entrada = document.querySelector(".text__input");
let copy__buton = document.querySelector("#button__h3");
let btb__codify = document.querySelector(".button__encode");
let btb__decodify = document.querySelector(".button__decode");

//funcao para capturar o valor do input
btb__codify.addEventListener("click", encript__data);
btb__decodify.addEventListener("click", decodify__data);
copy__buton.addEventListener("click", copy);

function get__text() {
  let text = entrada.value;
  return text.toLowerCase();
}
function encript__data() {
  let text = get__text();
  codify(text);
}
function decodify__data() {
  let text = get__text();
  decodify(text);
}
function codify(text) {
  output.value = "";
  //alerta caso o campo esteja vazio
  if (text == "") {
    alert("Digite um texto para codificar");
    entrada.focus();
    return;
  }
  let var_e = "enter";
  let var_i = "imes";
  let var_a = "ai";
  let var_o = "ober";
  let var_u = "ufat";
  let word = "";
  let naoTemMatch = false;
  for (let i = 0; i < text.length; i++) {
    //verifica se o texto possui caracteres especiais
    const pattern = '[a-zA-Z0-9"!. ]';
    if (!text[i].match(pattern)) {
      naoTemMatch = true;
      alert("Digite apenas letras e numeros");
      output.value = "texto invalido";
      entrada.value = "";
      entrada.focus();

      break;
    } else if (naoTemMatch == false) {
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
  }
  //devolve o valor para o output e reseta o campo input
  if (naoTemMatch == false) {
    copy__buton.classList.remove("hidden");

    output.value = word;
    entrada.value = "";
  }
}
//funcao para decodificar o texto do input
function decodify(text) {
  //alerta caso o campo esteja vazio
  entrada.focus();
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
  if (output.value == "") {
    alert("Nao ha texto para copiar");
    return;
  }
  let text = output.value;
  navigator.clipboard.writeText(text);
  alert("Texto copiado!");
}
