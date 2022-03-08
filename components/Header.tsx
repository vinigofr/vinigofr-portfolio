import type { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => (
  <header>
    <div>
      <div className="vinicius-logo">{'<Vinicius Gouveia />'}</div>
      <nav className="header-menu">
        <Link href="/">
          <a className="nav-link">Inicio</a>
        </Link>
        <Link href="/projects">
          <a className="nav-link">Projetos</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">Sobre</a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
