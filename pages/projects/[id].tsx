import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

const Project: NextPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <Header />
      Projeto de ID n.
      {' '}
      {query.id}
    </div>
  );
};

export default Project;
