import Navbar from "./sections/Navbar";

import Footer from "./sections/Footer";
import Background from "./components/Background";
import "./scss/index.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import About from "./pages/About";
import Compare from "./pages/Compare";
import Pokemon from "./pages/Pokemon";

const App = () => {
  return (
    <div className="main-container">
      <Background />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/list" element={<MyList />} />
          <Route path="/about" element={<About />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="*" element={<Navigate to="/pokemon/1" />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;