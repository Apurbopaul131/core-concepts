import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My name is Apurbo paul</p>
        <london></london>
      </header>
    </div>
  );
}
function london(){
  return (<div>
    <h1>My name: Apurbo paul </h1>
    <p>My father name is Shanti rangan paul</p>
  </div>);
}


export default App;
