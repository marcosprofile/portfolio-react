/* eslint-disable react/jsx-no-target-blank */
import RedeSocial from '../RedeSocial/RedeSocial';
import GitHub from '../../assets/img/redes/github.png';
import Behance from '../../assets/img/redes/behance.png';
import LinkedIn from '../../assets/img/redes/linkedin.png';
import Outlook from '../../assets/img/redes/outlook.png';

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
          imagem={GitHub}
          nome="GitHub"
        />
        <RedeSocial
          link="https://www.behance.net/marcoslferreira"
          imagem={Behance}
          nome="Behance"
        />
        <RedeSocial
          link="https://www.linkedin.com/in/marcosdesigntech/"
          imagem={LinkedIn}
          nome="LinkedIn"
        />
        <RedeSocial
          link="mailto:marcos.designtech@hotmail.com"
          imagem={Outlook}
          nome="Outlook"
        />
      </div>
    </div>
  )
}