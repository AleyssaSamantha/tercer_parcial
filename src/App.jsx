import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Ofertas from "./pages/Ofertas"
import Pie from "./componentes/Pie";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ofertas" element={<Ofertas />} />
      </Routes>
      <Pie />
    </>
  );
}

export default App;
