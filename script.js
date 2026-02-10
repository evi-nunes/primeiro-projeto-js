const input = document.getElementById("texto");
const resultado = document.getElementById("resultado");

const botaoMostrar = document.getElementById("mostrar");
const botaoLimpar = document.getElementById("limpar");
const botaoCor = document.getElementById("cor");

botaoMostrar.addEventListener("click", function () {
  if (input.value === "") {
    resultado.textContent = "Digite algo 🙂";
    return;
  }
  resultado.textContent = input.value;
});

botaoLimpar.addEventListener("click", function () {
  resultado.textContent = "";
  input.value = "";
});

botaoCor.addEventListener("click", function () {
  resultado.style.color = "blue";
});
