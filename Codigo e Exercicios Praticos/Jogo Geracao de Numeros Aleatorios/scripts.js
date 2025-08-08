/*
1. Fazer aparecer o ponto de interrogação. Usand replace - FEITO
2. Depois do click, gerar um alert falando se o numero é paro ou impar
3. Depois dessa primeira dica de par ou impar. Gerar as outras a partir do chute falando se é maior ou menor do que o numero 
chutado
*/

const obterElemento = (id) => document.getElementById(id);
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const palpites = obterElemento("guessInput").value;
var chancesRestantes = 3;

const aparecerInterrogacao = () => {
  const interrogacao = obterElemento("numberHint");
  interrogacao.textContent = "?";
};

const verificarParOuImpar = (numeroAleatorio) => {
  if (numeroAleatorio % 2 === 0) {
    alert("O número é par!");
  } else {
    alert("O número é ímpar!");
  }
};

const verificacaoChute = (palpites) => {
  if (palpites < 1 || palpites > 100) {
    alert("Por favor, insira um número entre 1 e 100.");
    return true;
  } else {
    return false;
  }
};

const verificacaoChances = (palpites) => {
  if (chancesRestantes <= 0) {
    alert("Você não tem mais chances. O número era " + numeroAleatorio + ".");
    return;
  }

  if (palpites === numeroAleatorio) {
    alert("Parabéns! Você acertou o número!");
    obterElemento("numberHint").textContent = numeroAleatorio; // Exibe o número correto
    return
  } else if (chancesRestantes === 0) {
    alert("Você não tem mais chances. O número era " + numeroAleatorio + ".");
    obterElemento("numberHint").textContent = numeroAleatorio;
    return;
  } else if (palpites < numeroAleatorio) {
    alert("O número é maior que o seu palpite.");
    chancesRestantes--;
  } else if (palpites > numeroAleatorio) {
    alert("O número é menor que o seu palpite.");
    chancesRestantes--;
  }
};

function gerarNumeroAleatorio() {
  aparecerInterrogacao();
  verificarParOuImpar(numeroAleatorio);
}

function Chutar() {
  const input = obterElemento("guessInput");
  const palpites = Number(input.value);

  if (verificacaoChute(palpites)) return;

  verificacaoChances(palpites);
  input.value = "";
}
