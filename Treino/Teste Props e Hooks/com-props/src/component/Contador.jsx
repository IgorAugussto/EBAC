import { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contagem: 0,
    };
  }

  incrementar = () => {
    this.setState({ contagem: this.state.contagem + 1 });
  };

  render() {
    return (
      <div>
        <h2>Contador de Cliques</h2>
        <p>Você clicou {this.state.contagem} vezes</p>
        <button onClick={this.incrementar}>Clique aqui</button>
      </div>
    );
  }
}

export default Contador;