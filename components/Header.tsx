import type { NextPage } from 'next';
import Link from 'next/link';

const Project: NextPage = () => (
  <header data-testid="header">
    <div>
      <div className="vinicius-logo">{'<Vinicius Gouveia />'}</div>
      <nav className="header-menu">
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/projects">
          <a>Projetos</a>
        </Link>
        <Link href="/about">
          <a>Sobre</a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Project;
