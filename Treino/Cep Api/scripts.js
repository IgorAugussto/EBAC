//1. Ouvir o evento de quando o usuário sair o campo de CEP
document.getElementById('cep').addEventListener('blur', (evento) => {
  const elemento = evento.target;
  const cepInformado = elemento.value;

  //2. Validar CEP
  if (!(cepInformado.length === 8)) {
    alert('CEP inválido. O CEP deve conter 8 dígitos.');
    return;
  }

  //3. Fazer a requisição para a API ViaCEP
  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(response => response.json())
    .then(data => {
      //3.2 Processamento da pagina
      if (!data.erro) {
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.uf;
        return;
      } else {
        alert('CEP não encontrado.');
      }
    })
    .catch(error => console.error('Erro ao buscar CEP:', error));
  
})