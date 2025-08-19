export const tabela = () => document.getElementById("tabela-clientes");


const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const endereco = document.getElementById("endereco").value;
const acoes = document.getElementById("acoes").value;

export const cliente = {
    nome,
    email,
    telefone,
    endereco,
    acoes
  };
