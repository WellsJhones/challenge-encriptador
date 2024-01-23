let output = document.querySelector(".text__output");
function codify() {
  let text = document.querySelector(".text__input").value;
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
  output.innerHTML = word;
}
function decodify() {
  let text = document.querySelector(".text__input").value;
  let word = "";
  word = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  console.log(word);
  document.querySelector(".text__output").innerHTML = word;
}
function copy() {
  let text = document.querySelector(".text__output").innerHTML;
  navigator.clipboard.writeText(text);
}
