import projects from "../helpers/projectsList";
import ProjectComponent from "../components/project/Project-component";

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">

            {projects.map((project) => (
                <ProjectComponent title      = {project.title} 
                                  img        = {project.img} 
                                  key        = {project.id}
                                  id         = {project.id}  />
            ))}

            
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
