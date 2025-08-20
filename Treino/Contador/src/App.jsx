import { useEffect, useState } from "react";
import Tarefa from "./components/Tarefa";

const API_URL = 'https://crudcrud.com/api/0db23e4efa704b5f9c9bd399103896cf/tarefas';

function App() {
  // Aqui a variavel "tarefas" é um arrey qye está recebendo a to-do list inicial
  const [tarefas, setTarefas] = useState ([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        // Aqui estamos definindo o estado de "tarefas" com os dados recebidos da API
        setTarefas(data);
      })
      .catch(error => console.error('Erro ao buscar tarefas:', error));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (novaTarefa.trim() === '') {
      return; // Não adiciona tarefa vazia
    }


    const nova = {texto: novaTarefa.trim()};
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nova)
    })
      .then(response => response.json())
      .then(data => {setTarefas(data);
          setTarefas([...tarefas, nova]);
        setNovaTarefa('');
      })
      .catch(error => console.error('Erro ao buscar tarefas:', error));

    // Aqui estamos atualizando o estado de "tarefas" para incluir a nova tarefa, criando um novo array que contém as tarefas existentes mais a nova tarefa
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
        {tarefas.map(tarefa => <Tarefa key={tarefa._id} texto={tarefa.texto} />)}
      </ul>
    </main>
  )
}

export default App
