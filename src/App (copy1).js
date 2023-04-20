import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: 'Nome como estado',
    counter: 0
  };
  
  /*
  constructor(props) {
    super(props);
    // this.handlePClick = this.handlePClick.bind(this); // bind para usar this nos metodos
  }
  */
  
  handlePClick = () => {
    this.setState({name: 'New Name -> jj'})
    // const { name } = this.state;
    // console.log(`<p> clicado ${name}`);
  }

  handleAClick = (event) => {
    event.preventDefault();   // previne o salto para o link
    const { counter } = this.state;
    this.setState({ counter: counter + 1});
  }

  render() {
    const { name, counter } = this.state;  // destructuring

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={ this.handlePClick }>
            {name} {counter}
          </p>
          <a 
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn MY React
          </a>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn MY React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
