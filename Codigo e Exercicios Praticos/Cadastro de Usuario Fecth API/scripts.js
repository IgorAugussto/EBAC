const obterElemento = (id) => document.getElementById(id);

//Preenchimento automatico de campos de formulário
document.getElementById("cep").addEventListener("blur", (evento) => {
  const elemento = evento.target;
  const cepInformado = elemento.value;

  if (!(cepInformado.length === 8)) {
    alert("CEP inválido. Deve conter 8 dígitos.");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.erro) {
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
        return;
      } else {
        alert("CEP não encontrado.");
      }
    })
    .catch((erro) => console.error("Erro ao buscar CEP:", erro));
});

//Salvar dados no Sotege API
obterElemento("cadatsrar").addEventListener("click", (evento) => {
  evento.preventDefault(); // Impede o envio padrão do formulário

  const nome = obterElemento("nome").value;
  const email = obterElemento("email").value;
  const telefone = obterElemento("telefone").value;
  const cep = obterElemento("cep").value;
  const logradouro = obterElemento("logradouro").value;
  const bairro = obterElemento("bairro").value;
  const cidade = obterElemento("cidade").value;
  const estado = obterElemento("estado").value;
  const numero = obterElemento("numero").value;

  if (!nome || !email || !telefone || !cep || !logradouro || !bairro || !cidade || !estado || !numero) {
    alert("Todos os campos são obrigatórios.");
    return;
  }

  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("telefone", telefone);
  localStorage.setItem("cep", cep);
  localStorage.setItem("logradouro", logradouro);
  localStorage.setItem("bairro", bairro);
  localStorage.setItem("cidade", cidade);
  localStorage.setItem("estado", estado);
  localStorage.setItem("numero", numero);

  alert("Dados salvos com sucesso!");
});

// Carregar dados salvos ao iniciar a página
document.addEventListener("DOMContentLoaded", () => {
  const nome = localStorage.getItem("nome");
  const email = localStorage.getItem("email");
  const telefone = localStorage.getItem("telefone");
  const cep = localStorage.getItem("cep");
  const logradouro = localStorage.getItem("logradouro");
  const bairro = localStorage.getItem("bairro");
  const cidade = localStorage.getItem("cidade");
  const estado = localStorage.getItem("estado");
  const numero = localStorage.getItem("numero");

  if (nome) obterElemento("nome").value = nome;
  if (email) obterElemento("email").value = email;
  if (telefone) obterElemento("telefone").value = telefone;
  if (cep) obterElemento("cep").value = cep;
  if (logradouro) obterElemento("logradouro").value = logradouro;
  if (bairro) obterElemento("bairro").value = bairro;
  if (cidade) obterElemento("cidade").value = cidade;
  if (estado) obterElemento("estado").value = estado;
  if (numero) obterElemento("numero").value = numero;
});
