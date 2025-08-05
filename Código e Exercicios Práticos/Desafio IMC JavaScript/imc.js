function calcularImc() {
  let peso = parseFloat(document.getElementById('peso').value);
  let altura = parseFloat(document.getElementById('altura').value);

  // Verificar se os valores são válidos
  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  // Calcular o IMC
  let imc = peso / (altura * altura);
  let resultado = document.getElementById('resultado');
  resultado.textContent = imc.toFixed(2);

  // Determinar a classificação do IMC
  let classificacao;
  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 24.9) {
    classificacao = 'Peso normal';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
  } else {
    classificacao = 'Obesidade';
  }
  
  // Exibir a classificação
  let classificacaoResultado = document.getElementById('classificacao');
  classificacaoResultado.textContent = classificacao;
}