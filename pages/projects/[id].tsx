import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Project: NextPage = () => {
  const { query } = useRouter();
  return (
    <div>
      Projeto de ID n. {query.id}
    </div>
  );
}

export default Project
