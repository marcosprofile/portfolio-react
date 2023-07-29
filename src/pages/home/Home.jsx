import Sobre from '../../components/Sobre/Sobre'
import Inicio from '../../components/Inicio/Inicio'
import Projetos from '../../components/Projetos/Projetos'
import Servicos from '../../components/Servicos/Servicos'

export default function Home() {
  return (
    <div className="home__container">
      <Inicio />
      <Sobre />
      <Servicos />
      <Projetos />
    </div>
  )
}