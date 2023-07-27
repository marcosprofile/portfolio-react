import Sobre from '../../components/Sobre/Sobre'
import Inicio from '../../components/Inicio/Inicio'

export default function Home() {
  return (
    <div className='container'>
      <Inicio
        nome='Marcos L. Ferreira'
        cargo='UI/UX Designer | Developer'
      />
      <Sobre
        linkGithub='https://github.com/marcosprofile'
        linkBehance='https://www.behance.net/marcoslferreira'
        linkLinkedin='https://www.linkedin.com/in/marcosdesigntech/'
        linkOutlook='mailto:marcos.designtech@hotmail.com'
      />
    </div>
  )
}