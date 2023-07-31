/* eslint-disable jsx-a11y/anchor-is-valid */

import Curriculo from '../../assets/pdf/marcos_cv.pdf';
import Designer from '../../assets/img/designer.png';
import Modal from '../Modal/Modal';
import './inicio.css';

export default function Inicio(props) {
  return (
    <div className='home' id='inicio'>
      <div className='left'>
        <h1>Olá, Eu sou <br></br>Marcos L. Ferreira</h1>
        <span>UI/UX Designer | Developer</span>
        <div className='actions'>
          <Modal className="secondary" />
          <a
            className='secondary'
            href={Curriculo}
            download='marcos_cv.pdf'
          >
            Download CV
          </a>
        </div>
      </div>
      <img src={Designer} alt='Designer' draggable="false" />
    </div>
  )
}