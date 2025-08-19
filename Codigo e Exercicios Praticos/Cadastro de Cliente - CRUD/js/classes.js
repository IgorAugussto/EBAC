import { tabela } from "./util.js";

export class Cliente {
  #nome;
  #email;
  #telefone;
  #endereco;
  #acoes;
  constructor({ nome, email, telefone, endereco, acoes }) {
    this.#nome = nome;
    this.#email = email;
    this.#telefone = telefone;
    this.#endereco = endereco;
    this.#acoes = acoes;
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get telefone() {
    return this.#telefone;
  }

  get endereco() {
    return this.#endereco;
  }

  get acoes() {
    return this.#acoes;
  }

  //===========================================================================================================================
  // Função POST
  adicionarCliente(fomulario) {
    document.getElementById("cadastrar").addEventListener("click", () => {
      //pega os valores dos campos do formulário
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const endereco = document.getElementById("endereco").value;
      const acoes = document.getElementById("acoes").value;

      //Cria um objeto cliente com os valores dos campos
      const cliente = {
        nome,
        email,
        telefone,
        endereco,
        acoes,
      };
      //Criação de fato do método POST, criando o header para saber o tipo do conteúdo que está sendo enviado
      //E o body que é o objeto cliente convertido para JSON
      fetch(
        "https://crudcrud.com/api/0db23e4efa704b5f9c9bd399103896cf/clientes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cliente),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          location.reload(); // Recarrega a página para mostrar o novo cliente
        })
        .catch((error) => console.error("Erro ao cadastrar cliente:", error));
    });
  }

  //===========================================================================================================================
  // Função GET
  carregarClientes() {
    fetch("https://crudcrud.com/api/0db23e4efa704b5f9c9bd399103896cf/clientes")
      .then((response) => response.json())
      .then((listaDeClientes) => {
        const clientes = tabela();
        listaDeClientes.forEach((cliente) => {
          const item = document.createElement("tr");
          item.innerHTML = `
            <td scope="row">${cliente.nome}</td>
            <td scope="row">${cliente.email}</td>
            <td scope="row">${cliente.telefone}</td>
            <td scope="row">${cliente.endereco}</td>
            <td scope="row">${cliente.acoes}</td>`;
          clientes.appendChild(item);
        });
      });
  }
  //===========================================================================================================================
  // Função DELETE
  exlcuirCliente() {
    let idClienteParaExcluir;

    document.getElementById("excluir").addEventListener("click", () => {
      const email = prompt("Digite o email do cliente que deseja excluir:");

      if (email === null || email.trim() === "") {
        alert("Operação cancelada ou email inválido.");
        return;
      }

      // Passo 1: Busca a lista de clientes da API (substitua pela URL da sua API)
      fetch(
        "https://crudcrud.com/api/0db23e4efa704b5f9c9bd399103896cf/clientes"
      ) // Exemplo de endpoint GET
        .then((response) => response.json())
        .then((clientesExcluir) => {
          clientesExcluir.forEach((cliente) => {
            const nome = cliente.nome;
            const email = cliente.email;
            const telefone = cliente.telefone;
            const endereco = cliente.endereco;
            const acoes = cliente.acoes;
            const id = cliente._id;

            const clienteParaExcluir = {
              nome,
              email,
              telefone,
              endereco,
              acoes,
              id,
            };

            if (clienteParaExcluir.email === email) {
              idClienteParaExcluir = clienteParaExcluir.id;
            }
            return idClienteParaExcluir;
          });

          // Passo 3: Faz a requisição DELETE usando o ID
          fetch(
            `https://crudcrud.com/api/0db23e4efa704b5f9c9bd399103896cf/clientes/${idClienteParaExcluir}`,
            {
              method: "DELETE",
            }
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Erro ao excluir o cliente");
              }
              alert("Cliente excluído com sucesso!");
              // Opcional: Atualize a UI ou recarregue a lista de clientes aqui
            })
            .then(() => {
              location.reload(); // Recarrega a página para mostrar a lista atualizada
            })
            .catch((erro) => {
              console.error(erro);
              alert("Erro ao excluir: " + erro.message);
            });
        })
        .catch((erro) => {
          console.error(erro);
          alert("Erro ao buscar clientes: " + erro.message);
        });
    });
  }
}
