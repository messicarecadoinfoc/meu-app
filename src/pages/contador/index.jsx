import './index.scss';
import { useState } from 'react';



export default function Contador() {

  const [contador, setContador] = useState(0);

function Adicionar(){

    setContador(contador + 1);
  
}

function Diminuir(){
  setContador(contador - 1);
  
}





return(
   <div className="Contador-Pagina">
      <h1>Contador</h1>
      
      <div className="botoes">
        <button onClick={Adicionar} className='Adicionar'>+ Adicionar</button> 
      <h2>{contador}</h2>
      <button onClick={Diminuir} className='Diminuir'>- Diminuir</button>
      
     

      </div>
      
               

      </div>

)}