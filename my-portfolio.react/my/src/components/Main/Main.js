import './Main.css'
const header = () => {
    return (
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, ReactJS, HTML, CSS, SCSS, BootStrap, Material UI, Figma</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, Docker, PostgreSQL</p>
            </li>
          </ul>
        </div>
      </main>
    );
}
 
export default header;