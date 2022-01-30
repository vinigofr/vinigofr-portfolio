import type { NextPage } from 'next';
import Header from '../../components/Header';
import { useRouter } from 'next/router';

const Project: NextPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <Header />
      Projeto de ID n. {query.id}
    </div>
  );
}

export default Project
