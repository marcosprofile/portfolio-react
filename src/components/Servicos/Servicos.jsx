import Card from '../Card/Card';
import Designer from '../../assets/img/servicos/designer.png';
import Frontend from '../../assets/img/servicos/coder.png';
import './servicos.css';

export default function servicos() {
  return (
    <div className="divContainer servicos" id="servicos">
      <h2>Serviços</h2>
      <div className="servicos__container">
        <Card
          nome="UI/UX Designer"
          imagem={Designer}
          mostrarBotao="ocultar"
          />
        <Card
          nome="Front-end"
          imagem={Frontend}
          mostrarBotao="ocultar"
          />
      </div>
    </div>
  )
}