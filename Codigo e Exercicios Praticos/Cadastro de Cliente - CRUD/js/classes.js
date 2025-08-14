import { clientes } from "./utils.js";

//Função GET

const clientes = new clientes();
export class ListaClientes {
  constructor(clientes = new clientes(), url) {
    // Inicializa a referência à tabela onde os clientes serão exibidos
    this.clientes = clientes;
    this.url = url;
  }

  // Método para buscar e exibir os clientes
  async carregarClientes() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) throw new Error("Erro ao buscar clientes");
      const listaDeClientes = await response.json();

      // Limpa a tabela antes de adicionar novos itens
      //this.tabela.innerHTML = "";

      // Itera sobre a lista de clientes e cria as linhas da tabela
      listaDeClientes.forEach((clientes) => {
        const item = document.createElement("tr");
        item.innerHTML = `
          <td scope="row">${clientes.nome}</td>
          <td scope="row">${clientes.email}</td>
          <td scope="row">${clientes.telefone}</td>
          <td scope="row">${clientes.endereco}</td>
          <td scope="row">${clientes.acoes || ""}</td>`; // 'acoes' pode ser opcional

        this.clientes.appendChild(item);
      });
    } catch (erro) {
      console.error("Erro ao carregar clientes:", erro);
    }
  }
}


//==========================================================================================================================
//Função POST
export class CadastrarCliente {
  constructor(url) {
    this.url = url;
  }

  async cadastrar(cliente) {
    try {
      const response = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar cliente");
      }

      const data = await response.json();
      console.log("Cliente cadastrado com sucesso:", data);
      location.reload(); // Recarrega a página para mostrar o novo cliente
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  }
}