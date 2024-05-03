const Contacts = () => {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Chisinau, Moldova</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+37379069320">+373 790 069 320</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:olarupetru991@gmail.com">olarupetru991@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    );
}
 
export default Contacts;