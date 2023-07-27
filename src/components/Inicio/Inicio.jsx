/* eslint-disable jsx-a11y/anchor-is-valid */
import './inicio.css';
import Curriculo from '../../assets/pdf/marcos_cv.pdf';
import Designer from '../../assets/img/designer.svg'

export default function Inicio(props) {
  return (
    <div className='home animate__fadeInLeft' id='inicio'>
      <div className='left'>
        <h1>Olá, Eu sou <br></br>{props.nome}</h1>
        <span>{props.cargo}</span>
        <div className='actions'>
          <a
            className='primary'
            href={Curriculo}
            download='marcos_cv.pdf'
          >
            Download CV
          </a>
          <a href='' className='secondary'>Projetos</a>
        </div>
      </div>
      <img src={Designer} alt='Designer' />
    </div>
  )
}