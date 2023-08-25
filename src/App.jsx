// import viteLogo from '/vite.svg'
import { Navigate,Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Home } from './pages/Home';
import { Curriculum } from "./pages/Curriculum";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='proyectos' element={<Projects />} />
        <Route path='about' element={<Curriculum />} />
      </Routes>
      <footer className='footer'>Created with ღ by AleSalazarD</footer>
    </>
  );
}

export default App;
