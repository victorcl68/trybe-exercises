// import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromisses = ['acordar', 'correr', 'comer', 'estudar'];

function App() {
  return (compromisses.map((eachCompromisse) => task(eachCompromisse)))
}

export default App;
