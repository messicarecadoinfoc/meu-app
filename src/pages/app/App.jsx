import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Paginas para fazer lição</h1>
      <Link to="/contador">Ir para o contador</Link> <br /> <br />


      <Link to="/Descricao"> Ir para descricao</Link> <br /> <br />

      <Link to="/Calculadora"> Ir para calculadora</Link> <br /> <br />
    </div>
  );
}

export default App;
