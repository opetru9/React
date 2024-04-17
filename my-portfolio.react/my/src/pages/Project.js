import { useParams } from 'react-router-dom';
import BtnGitHub from "../components/BtnGitHub/BtnGitHub";
import projectsList from '../helpers/projectsList'; 
import '../components/BtnGitHub/btnGitHub.css'


const Project = () => {
  const { id } = useParams(); 
  const project = projectsList[id]

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">
            {project.title}
          </h1>

          <img src={project.img} alt="" className="project-details__cover" />

          <p className='description'>
            {project.description}
          </p>
          
          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default Project;
