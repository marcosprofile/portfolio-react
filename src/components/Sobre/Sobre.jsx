/* eslint-disable react/jsx-no-target-blank */
import Behance from '../../assets/img/behance.png';
import Github from '../../assets/img/github.png';
import Linkedin from '../../assets/img/linkedin.png';
import Outlook from '../../assets/img/outlook.png';
import './sobre.css';


export default function Sobre(props) {
  return (
    <div className='sobre' id='sobre'>
      <h2>Sobre mim</h2>
      <p>
        Apaixonado por tecnologia e cursando o 4/5 semestre em análise e desenvolvimento de sistemas.
        Há quase 2 anos, venho atuando como UI/UX Designer, combinando minha formação em tecnologia
        com minha paixão pelo design, buscando sempre construir soluções completas, mergulhando nas
        necessidades dos usuários e transformando ideias em designs funcionais,combinando estética
        e uma experiência intuitiva.
      </p>
      <div className='redes'>
        <a
          className='rede__link' href={props.linkGithub} target='_blank' draggable='false'>
          <div className='container__rede'>
            <img src={Github} alt='Behance' />
            GitHub
          </div>
        </a>
        <a className='rede__link' href={props.linkBehance} target='_blank' draggable='false'>
          <div className='container__rede'>
            <img src={Behance} alt='Behance' />
            Behance
          </div>
        </a>
        <a className='rede__link' href={props.linkLinkedin} target='_blank' draggable='false'>
          <div className='container__rede'>
            <img src={Linkedin} alt='Behance' />
            LinkedIn
          </div>
        </a>
        <a className='rede__link' href={props.linkOutlook} target='_blank' draggable='false'>
          <div className='container__rede'>
            <img src={Outlook} alt='Behance' />
            Outlook
          </div>
        </a>
      </div>
    </div>
  )
}