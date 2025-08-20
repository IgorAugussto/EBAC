import { useState } from "react";
import Tarefa from "./components/Tarefa";

function App() {
  // Aqui a variavel "tarefas" é um arrey qye está recebendo a to-do list inicial
  const [tarefas, setTarefas] = useState ([
    { id: 1, texto: 'Estudar React' },
    { id: 2, texto: 'Praticar JavaScript' },
    { id: 3, texto: 'Ler um livro' }
  ]);

  // Aqui a variavel "novaTarefa" é usada para iniciar com o campo vazio e monitorar o que o usuário digita
  const [novaTarefa, setNovaTarefa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (novaTarefa.trim() === '') {
      return; // Não adiciona tarefa vazia
    }

    // Aqui estamos criando um novo objeto de tarefa com um id único e o texto da nova tarefa
    const novoId = tarefas[tarefas.length - 1].id + 1;

    // Aqui estamos criando um novo objeto de tarefa com o id e o texto da nova tarefa
    const nova = {
      id: novoId,
      texto: novaTarefa
    }

    // Aqui estamos atualizando o estado de "tarefas" para incluir a nova tarefa, criando um novo array que contém as tarefas existentes mais a nova tarefa
    setTarefas([...tarefas, nova]);
    setNovaTarefa(''); // Limpa o campo de entrada após adicionar a tarefa
  }

  return (
    <main>
      <h1>To-Do List App</h1>
      <form onSubmit={handleSubmit} >
        {/**Aqui o input está criando o campo para o usuraio digitar e o valor inicial está sendo "novaTarefa" que inicia com nenhum
         * valor, e o "onChange" está monitorando o que o usuário digita
         */}
        <input type="text" placeholder="Digite sua nova Terefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tarefas.map(tarefa => <Tarefa key={tarefa.id} texto={tarefa.texto} />)}
      </ul>
    </main>
  )
}

export default App
