import Card from '../Card/Card';
import Gooday from '../../assets/img/projetos/gooday.png';
import Variables from '../../assets/img/projetos/variables.png';
import Eticket from '../../assets/img/projetos/eticket.png';
import MultStep from '../../assets/img/projetos/multstep.png';
import TodoList from '../../assets/img/projetos/todolist.png';
import JornadaMilhas from '../../assets/img/projetos/jornadamilhas.png';
import PrimeFlix from '../../assets/img/projetos/primeflix.png';

import './projetos.css';

export default function Projetos() {
  return (
    <div className="divContainer" id="projetos">
      <h2>Projetos</h2>
      <div className="container__projetos">
        <Card
          imagem={Gooday}
          nome="Gooday"
          descricao="A Gooday é uma plataforma para pessoas que buscam uma vida saudável e ativa."
          link="https://www.behance.net/gallery/174834333/Gooday"
          botao="Ver projeto"
          />
        <Card
          imagem={Variables}
          nome="Variables"
          descricao="Este projeto foi realizado apenas para por em pratica a nova feature de variáveis."
          link="https://www.figma.com/proto/s2uExbTQudPuZqpjO7p72K/Variables?page-id=0%3A1&type=design&node-id=1-8&viewport=250%2C-128%2C0.32&t=Eo8hhnvACjjENEKF-1&scaling=contain&starting-point-node-id=1%3A8&mode=design"
          botao="Ver projeto"
          />
        <Card
          imagem={Eticket}
          nome="e-ticket"
          link="https://www.behance.net/gallery/167433779/Projeto-e-ticket"
          botao="Ver projeto"
          />
        <Card
          imagem={MultStep}
          nome="Multi Step"
          descricao="Formulário para preenchimento de campos em etapas."
          link="https://multi-step-form-ten-beta.vercel.app/"
          botao="Ver projeto"
          />
        <Card
          imagem={TodoList}
          nome="ToDo List"
          descricao="Projeto realizado com Angular para listar, editar e remover tarefas."
          link="https://todo-list-angular-ecru.vercel.app/"
          botao="Ver projeto"
          />
        <Card
          imagem={JornadaMilhas}
          nome="Jornada Milhas"
          descricao="Projeto realizado com Angular com o foco na criação e utilização de componentes do Angular Material."
          link="https://jornada-milhas-three.vercel.app/"
          botao="Ver projeto"
          />
        <Card
          imagem={PrimeFlix}
          nome="Prime Flix"
          descricao="Projeto realizado com React consumindo uma API externa para listar filmes, visualizar trailer, salvar filmes e listar filmes salvos."
          link="https://prime-flix-one.vercel.app/"
          botao="Ver projeto"
          />
      </div>
    </div>
  )
}