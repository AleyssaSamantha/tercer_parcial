import Acordeon from "../componentes/Acordeon";
import Carrusel from "../componentes/Carrusel"; // Si tienes un componente Carrusel, lo puedes usar aquí

const imagenesIzquierda = [
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5J0qyKQ4y6W6XrQqA-pioZ1O7AitPLpbntptwyNik8LVvUCVA",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSQSHEKyIlUA6vpZJMCt7UXG4o2KCnOExgtCBPNQc29JL0KljLtkvxEsRmDFjllHRbF8XoKi3lRROFehJUm8AMZFJhd-Wm78C2_-oQzkJ1-_56BJdVnFAgxCsMlG2SsoJmk8ru2NYD7Xdm/s1600/puno_saya_000a.jpg",
  "https://www.cochabamba.bo/img/noticias/l6W6h0WBcUtdPGUg83w3TrFidrETiCHqjDmwCO5i.jpeg"
];

const imagenesDerecha = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvtFC9dNFy1xoz5nEbv2BntM_bzOuunn4MQ&s",
  "https://i.pinimg.com/736x/b6/5a/fe/b65afe9ecdbbe7dee396165776e5dcba.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4tOx9C6qtJPacBqZl96-OcGqDCZscMkTbA&s"
];

export default function Inicio() {
  return (
    <div className="flex min-h-[calc(100vh-5rem-4rem)] px-6 py-4 gap-4 bg-gradient-to-r from-yellow-200 via-pink-100 to-blue-200">

      
      {/* Carrusel izquierda */}
      <div className="w-1/5 h-full flex items-center justify-center">
        <Carrusel images={imagenesIzquierda} />
      </div>

      {/* Acordeón */}
      <div className="w-3/5 h-full flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-4">Danzas tradicionales de Bolivia</h1>
        <div className="flex-grow overflow-auto">
          <Acordeon />
        </div>
      </div>

      {/* Carrusel derecha */}
      <div className="w-1/5 h-full flex items-center justify-center">
        <Carrusel images={imagenesDerecha} />
      </div>
    </div>
  );
}
