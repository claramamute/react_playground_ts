
import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  // const [nome_estado, funcao_setState] = useState(valor_inicial_do_estado) funcao resposavel 

  return (
    <>
        <Home 
          titulo= 'Minha primeira postagem' 
          texto='Texto da postagem' 
        /> {/*tem que passar as propriedades para usar no componente Home(abaixo)*/}
        <Contador />
        <Tarefa />
    </>
  )
}

export default App
