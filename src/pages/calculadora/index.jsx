import './index.scss';
import { use, useState } from 'react';

export default function Calculadora() {

    const [num1, setnum1] = useState(0)
    const [num2, setnum2] = useState(0);
    const [resp, setresp] = useState(0)

    function somar(){

        let soma = Number(num1) + Number(num2)
        setresp(soma)
    }

    
    function subtrair(){

        let sub = Number(num1) - Number(num2)
        setresp(sub)
    }

    
    function multiplicar(){

        let mult = Number(num1) * Number(num2)
        setresp(mult)
    }

    
    function dividir(){

        let div = Number(num1) / Number(num2)
        setresp(div)
    }

    function potenciação(){

        let  pot = Number(num1) ** Number(num2)
        setresp(pot)
    }

    function resto(){

        let resto = Number(num1) % Number(num2)
        setresp(resto)
    }





    return(
        <div className="page-calculadora">
            <div className="calculadora">

            <h1>Calculadora</h1>
            <input type="text"  value={num1} onChange={(e) => setnum1(e.target.value)} />
            <input type="text"  value={num2} onChange={(e) => setnum2(e.target.value)} />
            <button onClick={somar}>Somar</button>
            <button onClick={subtrair}>Subtrair</button>
            <button onClick={multiplicar}>Multiplicar</button>
            <button onClick={dividir}>Dividir</button>
            <button onClick={potenciação}>Potenciação</button>
            <button onClick={resto}>Resto</button>

            <h1> Resposta: {resp}</h1>
            </div>
        </div>




    )

}