import { tabela } from "./util.js";
import { Cliente } from "./classes.js";

tabela()
const form = document.querySelector("form");
const clientes = new Cliente(form);

clientes.carregarClientes();
clientes.adicionarCliente(form);
clientes.exlcuirCliente();
