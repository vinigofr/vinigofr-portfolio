import type { NextPage } from 'next';

const ProjectCard: NextPage = ({ project }) => (
  <div>
    <h4>Nome</h4>
    <img src="" alt="Imagem do projeto" />
    <p>Descrição</p>
    <div className="link-container">
      <a
        href="https://www.google.com.br"
        target="_blank"
        rel="noreferrer"
      >
        Acessar repositório
      </a>
      <a
        href="https://www.google.com.br"
        target="_blank"
        rel="noreferrer"
      >
        Acessar projeto
      </a>
    </div>
  </div>
);

export default ProjectCard;

// Título
// Foto/ícone do projeto
// Breve descrição
// Link para GitHub
// Link para acesso direto ao projeto
