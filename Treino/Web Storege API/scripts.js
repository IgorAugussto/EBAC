const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {
  //Verificar se o usuário tem um tema salvo
  const temaAtual = localStorage.getItem("tema");
  //Verificar qual o tema e inverter
  const novoTema = temaAtual === "dark" ? "light" : "dark";
  //Adicionara classe dark no elemento body
  document.body.classList.toggle(novoTema);
  //Salvar as preferencias no localStorage
  localStorage.setItem("tema", novoTema);
  //Atualizar o texto do botão
  botaoTema.textContent = novoTema === "dark" ? "☀️" : "🌙";
});

document.addEventListener("DOMContentLoaded", () => {
  //Verificar se o usuário tem um tema salvo
  const temaSalvo = localStorage.getItem("tema");

  //Se for dark , adiciona a calsse a altera o btoão
  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }
});
