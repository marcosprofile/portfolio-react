import './rede_social.css';

export default function RedeSocial(props) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href={props.link} className="rede__link">
      <img src={props.imagem} alt={props.nome} />
      {props.nome}
    </a>
  )
}