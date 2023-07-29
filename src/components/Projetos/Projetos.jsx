import Card from '../Card/Card';
import Frontend from '../../assets/img/servicos/coder.png';
import './projetos.css';

export default function Projetos() {
  return (
    <div className="divContainer" id="projetos">
      <h2>Projetos</h2>
      <div className="container__projetos">
        <Card
          nome="Projeto 1"
          imagem={Frontend}
          descricao="Descrição de demonstração sobre o projeto"
          />
        <Card
          nome="Projeto 2"
          imagem={Frontend}
          descricao="Descrição de demonstração sobre o projeto"
          />
        <Card
          nome="Projeto 3"
          imagem={Frontend}
          descricao="Descrição de demonstração sobre o projeto"
          />
        <Card
          nome="Projeto 4"
          imagem={Frontend}
          descricao="Descrição de demonstração sobre o projeto"
          />
        <Card
          nome="Projeto 5"
          imagem={Frontend}
          descricao="Descrição de demonstração sobre o projeto"
          />
      </div>
    </div>
  )
}