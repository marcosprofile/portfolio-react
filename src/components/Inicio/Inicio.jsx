/* eslint-disable jsx-a11y/anchor-is-valid */
import './inicio.css';
import Curriculo from '../../assets/pdf/marcos_cv.pdf';
import Designer from '../../assets/img/designer.png'

export default function Inicio(props) {
  return (
    <div className='home' id='inicio'>
      <div className='left'>
        <h1>Olá, Eu sou <br></br>Marcos L. Ferreira</h1>
        <span>UI/UX Designer | Developer</span>
        <div className='actions'>
          <a
            className='primary'
            href={Curriculo}
            download='marcos_cv.pdf'
          >
            Download CV
          </a>
          <a href='#projetos' className='secondary'>Projetos</a>
        </div>
      </div>
      <img src={Designer} alt='Designer' draggable="false" />
    </div>
  )
}