import { useState } from "react"

function Contador() {

  // const [nome_estado, funcao_mudaState] = useState(valor_inicial_do_estado)
  const [valor, setValor] = useState(0) //hook useState

  //fucao typescript 
  function handleClick(){
    setValor(valor+1) //atualiza o estado valor - react
  }

  function removerValor(){
    setValor(valor -1)
  }

  function reset(){
    setValor(0)
  }

  return (
    <div>
      <h2>Componente Contador</h2>

      <p>O valor atual do meu estado é: {valor}</p>

      <button onClick={handleClick} >Adicionar +1</button>

      <button onClick={removerValor}>Remover -1</button>

      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Contador