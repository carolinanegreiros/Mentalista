var numeroSorteado = 0;
function Sortear() {
  numeroSorteado = Math.round(Math.random() * 10);
}

Sortear();
var numeroTentativa = 3;

function chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute > 10 || chute < 0 || isNaN(chute)) {
    elementoResultado.innerText =
      "Chute inválido, digite um número de 0 a 10 " +
      "- Tentativas restantes (" +
      numeroTentativa +
      ").";
  } else if (chute == numeroSorteado) {
    elementoResultado.innerText =
      "Parabéns! Você acertou, o número é " +
      numeroSorteado +
      ". Um novo número foi sorteado, continue jogando.";
    Sortear();
    numeroTentativa = 3; //Total de quantidade de Tentativas
  } else {
    --numeroTentativa;
    if (chute > numeroSorteado) {
      elementoResultado.innerText =
        "Errou, tente um valor menor " +
        "- Tentativas restantes (" +
        numeroTentativa +
        ").";
    } else {
      elementoResultado.innerText =
        "Errou, tente um valor maior " +
        "- Tentativas restantes (" +
        numeroTentativa +
        ").";
    }
  }

  if (numeroTentativa == 0) {
    elementoResultado.innerText =
      "Que pena, suas chances acabaram! O número era " +
      numeroSorteado +
      ". Um novo número foi sorteado e suas tentativas zeradas. Continue jogando!";
    Sortear();
    numeroTentativa = 3; // Quantidade de Tentativas
  }
}