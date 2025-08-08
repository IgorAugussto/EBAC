const MatrizGastos = [
  ["Alimentação", 0],
  ["Transporte", 0],
  ["Lazer", 0],
  ["Outros", 0],
  ["Total", 0],
];

// ==================================================================================//
// Funções utilitárias

// Função que obtem só o elemento HTML pelo ID
// e não o valor informado pelo usuário
const obterElemento = (id) => document.getElementById(id);

// Função para verificar se o valor informado é válido
const ValorNegativo = (valor) => valor < 0;

// Função para somar os valores
const somarValor = (total, valor) => total + valor;

// Função que reutiliza a função "obterElemento()" para pegar somente o valor do campo e em seguida mudar para vazio
const limparCampos = () => obterElemento("valor").value = "";

//Função que pega o falor que foi passado, mantém as duas casa depois da virgular que é o padrão do Brasil e também mantém a virgula ao invés do ponto
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');

// ==================================================================================//
// ==================================================================================//

// Obter valores do formulário

// Função que obtem o valor informado pelo usuário
const obterValorInformado = () => parseFloat(obterElemento("valor").value);

// Função que obtem o valor da categoria informada. o ".value" entra nessa função pq a função "obterElemento()" pega o elemento todo e dessa forma com o value eu pego o valor que foi digitado pelo usuário
const obterCategoriaInformada = () => obterElemento("categoria").value;

// ==================================================================================//
// ==================================================================================//


// Função que obtem a categoria informada no array
const obterCategoriaMatriz = (matriz, nomeCategoria) => matriz.find((itemCategoria) => itemCategoria[0] === nomeCategoria);

// Atualizar valores da matriz, pegando o indice 1 da matriz que seria o valor e somando esse indice mais o novo valor que foi informado
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somarValor(categoria[1], valor);

// Função que faz uma iteração na matriz percorrendo o nome e o valor e em seguida atualiza mantendo o nome porém atualizando o valor para o novo valor que foi adicionado na matriz
const atulizarInterface = () => {
  
  MatrizGastos.forEach(([nome, valor]) => {
    const elemento = obterElemento(nome);
    elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
  })
}

// ==================================================================================//
// ==================================================================================//

function adicionarGasto() {
  
  const valorInformado = obterValorInformado();
  const categoriaInformada = obterCategoriaInformada();

  if (ValorNegativo(valorInformado)) {
    alert("Valor inválido! Informe um valor positivo.");
    return;
  }

  const categoria = obterCategoriaMatriz(MatrizGastos, categoriaInformada);
  const total = obterCategoriaMatriz(MatrizGastos, "Total");

  atualizarValorCategoria(categoria, valorInformado);
  atualizarValorCategoria(total, valorInformado);
  atulizarInterface();
  limparCampos();

}
