
interface homeProps{
  titulo: string;
  texto: string;
}

//hocks - funcoes que executam tarefas especoficas  

function Home(props: homeProps) { //vai receber como parâmetro um titulo e um texto
  return (
    <div>
      <h1>Componente Home</h1>
      <h2>{props.titulo}</h2> {/*titulo da postagem passado pelo componente App e renderiza na tela */}
      <p>{props.texto}</p> 
    </div>
  )
}

export default Home