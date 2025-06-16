import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Ofertas from "./pages/Ofertas"
import Navegar from "./componentes/Navegar";
import Footer from "./componentes/footer";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ofertas" element={<Ofertas />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
