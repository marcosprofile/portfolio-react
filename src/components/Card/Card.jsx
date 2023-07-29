import './card.css'

export default function Card(props) {
  return (
    <div className="card" id={props.id}>
      <img src={props.imagem} alt={props.nome} />
      <div className="info">
        <h3>{props.nome}</h3>
        <p>{props.descricao}</p>
      </div>
    </div>
  )
}