import { useState } from "react";

export default function BotaoContadorFuncao() {
    const [contador, setContador]= useState(0);

    function incContador() {      
        console.log('x:',contador);
        setContador(contador+1);
        console.log('y:',contador);
    }

    return (
        <button onClick={() => incContador()}>Contador: {contador}</button>
    )
}