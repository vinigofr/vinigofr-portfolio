import type { NextPage } from 'next';
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../fake apis/projects';

const Projects: NextPage = () => (
  <div>
    <Header />
    {
      projects.map((project: project) => <ProjectCard project={project} />)
    }
  </div>
);

export default Projects;
