//1. Seleciona a lista para poder manipular
export const clientes = (id) => document.getElementById(id);

//==========================================================================================================================
//Pegar valor informado pelo usuário
const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const endereco = document.getElementById("endereco").value;
const acoes = document.getElementById("acoes").value;

//Objeto cliente com os valores dos campos
export const cliente = {
    nome,
    email,
    telefone,
    endereco,
    acoes
  };