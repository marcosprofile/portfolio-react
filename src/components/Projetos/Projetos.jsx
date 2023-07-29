import Card from '../Card/Card';
import './projetos.css';

export default function Projetos() {
  return (
    <div className="divContainer" id="projetos">
      <h2>Projetos</h2>
      <div className="container__projetos">
        <Card
          nome="Projeto 1"
          descricao="Descrição de demonstração sobre o projeto"
          />
        <Card
          nome="Projeto 2"
          descricao="Descrição de demonstração sobre o projeto"
          />
        <Card
          nome="Projeto 3"
          descricao="Descrição de demonstração sobre o projeto"
          />
        <Card
          nome="Projeto 4"
          descricao="Descrição de demonstração sobre o projeto"
          />
        <Card
          nome="Projeto 5"
          descricao="Descrição de demonstração sobre o projeto"
          />
      </div>
    </div>
  )
}