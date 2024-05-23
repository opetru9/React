import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layers/Header";
import MainHome from "./Layers/MainPages/MainHome";
import Footer from "./Layers/Footer/Footer";
import Category from "./Layers/MainPages/Category/Category";
import rolleProducts from "./Products/Rolle";
import tempuraProducts from "./Products/Tempura";
import Error from "./Components/Error/Error";
import AboutUS from "./Layers/MainPages/AboutUs/AboutUs";
import './app.css'
import OnlyProduct from "./Layers/MainPages/OnlyProduct/OnlyProduct";
import seturiProducts from "./Products/Seturi";
import bauturiProducts from "./Products/Bauturi";

const App = () => {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/product/:category/:id" element={<OnlyProduct />} />
          <Route
            path="/category=rolle"
            element={<Category products={rolleProducts} />}
          />
          <Route
            path="/category=tempura"
            element={<Category products={tempuraProducts} />}
          />
          <Route
            path="/category=seturi"
            element={<Category products={seturiProducts} />}
          />
          <Route
            path="/category=bauturi"
            element={<Category products={bauturiProducts} />}
          />
          <Route path="category=despre-noi" element={<AboutUS />} />
          <Route path="*" element={<Error />} /> {/* ??? */}
        </Routes>
      </Router>

      <Footer />
    </>
  );
};

export default App;
