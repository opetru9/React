import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Project from './pages/Project'
import ScrollToTop from './utils/scrollToTop'
import Error from './components/Error'
import './styles/master.css'
import './styles/reset.css'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route element={<Error/>} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
