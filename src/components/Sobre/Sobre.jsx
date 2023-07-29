/* eslint-disable react/jsx-no-target-blank */
import RedeSocial from '../RedeSocial/RedeSocial';
import './sobre.css';


export default function Sobre(props) {
  return (
    <div className='divContainer' id='sobre'>
      <div className="sobre">
        <h2>Sobre mim</h2>
        <p>
          Apaixonado por tecnologia e cursando o 4/5 semestre em análise e desenvolvimento de sistemas.
          Há quase 2 anos, venho atuando como UI/UX Designer, combinando minha formação em tecnologia
          com minha paixão pelo design, buscando sempre construir soluções completas, mergulhando nas
          necessidades dos usuários e transformando ideias em designs funcionais,combinando estética
          e uma experiência intuitiva.
        </p>
      </div>
      <div className="container_redes">
        <RedeSocial
          link="https://github.com/marcosprofile"
          imagem="img/redes/github.png"
          nome="GitHub"
        />
        <RedeSocial
          link="https://behance.com/marcosprofile"
          imagem="img/redes/behance.png"
          nome="Behance"
        />
        <RedeSocial
          link="https://linkedin.com/marcosprofile"
          imagem="img/redes/linkedin.png"
          nome="LinkedIn"
        />
        <RedeSocial
          link="https://outlook.com/marcosprofile"
          imagem="img/redes/outlook.png"
          nome="Outlook"
        />
      </div>
    </div>
  )
}