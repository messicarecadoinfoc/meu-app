import './index.scss';
import { useState } from 'react';

export default function Descricao() {
  const [descricao1, setDescricao1] = useState("Texto");
  const [descricao2, setDescricao2] = useState("Texto");
  const [descricao3, setDescricao3] = useState("Texto");


  const [cor, setCor] = useState("pedro");

  const [caixa, setCaixa] = useState(true);

  function Desc(e) {
    let novovalor = e.target.value;
    setDescricao1(novovalor);
  }
function Desc2(e) {
    let novovalor = e.target.value;
    setDescricao2(novovalor);
  }
  function trocar(){
    setDescricao3(descricao2);
  }

  function mudarCor(e){
    let novacor = e.target.value;
    setCor(novacor);
  }

  function mudarCaixa(){
    setCaixa(!caixa)
  }

  return (
    <div className="Descricao-Pagina" style={{ backgroundColor: cor }}>
      <div className='descricao1'>
        <h1>Descrição</h1>
        <h1>{descricao1}</h1>
        <input type="text" onChange={Desc} />
      </div>

      <div className='descricao2'>
        <h1>Descrição 2</h1>
        <h1>{descricao3}</h1>
        <input type="text" onChange={Desc2}/>
        <button onClick={trocar}>Trocar</button>
      </div>
      <div className="cor">
        <h1>A cor selecionada é: {cor }</h1>
        <input type="color" onChange={mudarCor}  />
      </div>


      <div className="caixa">
        <h1> Você gosta do pedro? :{caixa ? "Sim" : "Não"}</h1>
        <input type="checkbox" checked={caixa} onChange={(e) => setCaixa(e.target.checked)} />

      </div>
      
    </div>
  );
}
