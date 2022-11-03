import { Component } from 'react';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cronometro: 60 };
  }

  /* inserindo reload de 1 segundo para a função tick() */
  componentDidMount() {
    this.interval = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
      this.setState({
        cronometro: this.state.cronometro - 1
      });
  }

  componentDidUpdate() {
    if (this.state.cronometro === 0) {
        clearInterval(this.interval)
    }
  }

  render() {

    console.log(this.state.cronometro)
    return (
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
        <h2>{this.state.cronometro}</h2>
      </div>
    );
  }
}
