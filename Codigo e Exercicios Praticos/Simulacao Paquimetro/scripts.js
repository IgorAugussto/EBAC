/*
 * Cria uma classe para buscar a informaçãdo digitada pelo usuário
 * Cria uma classe para calcular o tempo que o carro vai ficar com base no valor do pagamento
 * Calsse para calcular o troco
 * Classe para mostrar a msg  de confirmação de pagamento e tempo que irá ficar
 */

class Paquimetro {

  constructor(valorInput) {
    this.valorInput = valorInput;
  }

  calcularTempo() {
    const valor = parseFloat(document.getElementById('valor').value);
    let tempo = 0;

    if (isNaN(valor) || valor <= 0) {
      alert('Valor insuficiente.');
      return;
    }

    if (valor >= 1 && valor < 1.75) {
      tempo = 30
    } else if (valor >= 1.75 && valor < 3) {
      tempo = 60;
    } else if (valor >= 3) {
      tempo = 120;
    }

    const horas = Math.floor(tempo / 60);
    const minutos = Math.floor(tempo % 60);

    alert(`Pagamento confirmado! Você tem direito a ${horas} horas e ${minutos} minutos de estacionamento. Troco: R$ ${this.calcularTroco()}`);
  }

  calcularTroco() {
    const valorBaseUm = 1;
    const valorBaseDois = 1.75;
    const valorBaseTres = 3;

    const valor = parseFloat(document.getElementById('valor').value);
    let troco = 0;

    if (valor > valorBaseUm && valor < valorBaseDois) {
      troco = valor - valorBaseUm;
      return troco.toFixed(2).replace('.', ',');
    } else if (valor > valorBaseDois && valor < valorBaseTres) {
      troco = valor - valorBaseDois;
      return troco.toFixed(2).replace('.', ',');
    } else if (valor > valorBaseTres) {
      troco = valor - valorBaseTres;
      return troco.toFixed(2).replace('.', ',');
    } else {
      return '0,00';
    }
    return troco.toFixed(2);
  }
}

const paquimetro = new Paquimetro();