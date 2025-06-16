import { Link } from "react-router-dom";

export function Navegar() {
    return (
        <header>
            <div className="bg-gray-800 text-white flex items-center px-12 h-29"
            style={{
                backgroundImage: "url('https://st2.depositphotos.com/3769671/7957/v/450/depositphotos_79571820-stock-illustration-watercolor-abstract-background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
                <img 
                src="https://images.vexels.com/media/users/3/215450/isolated/preview/802ffce60ea0d1816103f667b90131e3-personaje-de-disfraz-de-diablo-boliviano.png" alt="Logo de la Academia"
                className="h-30 w-30 mr-4" 
                />
                <h1 className="text-2xl font-bold">RAÍCES DE BOLIVIA Aleyssa Samantha Cuba Mamani</h1>
            </div>
            <nav className="h-50 px-12 text-white flex items-center gap-8"
            style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/07/40/22/20/240_F_740222080_NSpwQro4CIrry21cVq0sDxiazjAAb5Iv.jpg')"}}
            >
                <Link to="/" className="text-2xl font-bold">
                Inicio
                </Link>
                <Link to="/Ofertas" className="text-2xl font-bold">
                Oferta de Cursos
                </Link>

            </nav>
        </header>
    )
}
export default Navegar