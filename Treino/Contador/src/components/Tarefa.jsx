import { useState } from "react";
import "./Tarefa.css";

function Tarefa({texto}) {

  // useState está sendo usado para colocar a variavel "concluido" como false inicialmente e monitorar seu estado
  const [concluido, setConcluido] = useState(false);

  // Função que alterna o estado de "concluido" entre true e false
  const alternarConcluido = () => {
    setConcluido(!concluido);
  }
  
  return (
    // Passando "onChange={alternarConcluido}" para o input checkbox para que quando ele for clicado, a função seja chamada e o estado seja alterado
    // "span" recebe a classe "concluido" se o estado for true, caso contrário, não recebe nenhuma classe
    <li>
      <input type="checkbox" onChange={alternarConcluido} />
      <span className= {concluido ? "concluido": ""}>{texto}</span>
      <button>Remover</button>
    </li>
  )
}
export default Tarefa;