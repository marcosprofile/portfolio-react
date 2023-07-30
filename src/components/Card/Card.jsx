/* eslint-disable react/jsx-no-target-blank */
import './card.css'

export default function Card(props) {
  return (
    <div className="card" id={props.id}>
      <img src={props.imagem} alt={props.nome} draggable="false" />
      <div className="info">
        <h3>{props.nome}</h3>
        <p>{props.descricao}</p>
        <a class="card__link" href={props.link} id={props.mostrarBotao} target="_blank">
          {props.botao}
        </a>
      </div>
    </div>
  )
}