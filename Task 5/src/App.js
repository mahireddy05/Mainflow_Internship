import logo from './logo.svg';
import './App.css';
import Calculator from './calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Calculator
        </p>
      </header>
      <div className="App">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
