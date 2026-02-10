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

let azul = false;

botaoCor.addEventListener("click", function () {
  if (azul) {
    resultado.style.color = "black";
  } else {
    resultado.style.color = "blue";
  }
  azul = !azul;
});

});
