import './project.css'
import { NavLink } from 'react-router-dom';

const ProjectComponent = ( {title, img, id} ) => {
  return (
    <li className="project">
      <NavLink to={"/project/"+id}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
};

export default ProjectComponent;
