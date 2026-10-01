import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>VA PARA O CONTADOR</h1>
      <Link to="/contador">Ir para o contador</Link> <br></br>


      <Link to="/Descricao"> Ir para descricao</Link>
    </div>
  );
}

export default App;
