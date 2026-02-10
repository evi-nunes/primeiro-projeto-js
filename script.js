const input = document.getElementById("texto");
const resultado = document.getElementById("resultado");

const botaoMostrar = document.getElementById("mostrar");
const botaoLimpar = document.getElementById("limpar");
const botaoCor = document.getElementById("cor");

let azul = false; // controla a cor (estado)

// Mostrar texto
botaoMostrar.addEventListener("click", function () {
  if (input.value === "") {
    resultado.textContent = "Digite algo 🙂";
    return;
  }

  resultado.textContent = input.value;
});

// Limpar tudo
botaoLimpar.addEventListener("click", function () {
  resultado.textContent = "";
  input.value = "";
});

// Mudar cor (alternando)
botaoCor.addEventListener("click", function () {
  if (azul) {
    resultado.style.color = "black";
  } else {
    resultado.style.color = "blue";
  }

  azul = !azul; // inverte a cor
});
