export default function Ofertas() {
  return (
    <div className="p-6 min-h-[calc(100vh-5rem-4rem)] bg-gradient-to-br from-pink-100 via-white to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-8">Ofertas de Cursos de Danza</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 - Caporales */}
        <div className="card shadow-xl bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 text-white">
          <figure>
            <img 
              className="w-full h-90 object-cover"
              src="https://images.pexels.com/photos/31320030/pexels-photo-31320030/free-photo-of-vibrant-parade-with-traditional-dancers-in-festive-attire.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Caporales" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caporales</h2>
            <p>Curso intensivo con ritmo enérgico y trajes tradicionales.</p>
            <button 
              className="btn bg-red-800 text-white hover:bg-red-900" 
              onClick={() => document.getElementById('modal1').showModal()}
            >
              Ver precio
            </button>
            <dialog id="modal1" className="modal">
              <div className="modal-box bg-white text-black">
                <h3 className="font-bold text-lg">Caporales</h3>
                <p className="py-4">Precio del curso: 150 Bs.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* Card 2 - Saya */}
        <div className="card shadow-xl bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 text-white">
          <figure>
            <img 
              className="w-full h-90 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50ksjPBInP4dgvwfmWiXyEjJyyX0fQ-UL0yn93j9sL2BFc9SXZoMDsj_uWu0H-AAvDHk" 
              alt="Saya" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Saya Afroboliviana</h2>
            <p>Aprende los orígenes y pasos de esta danza afrodescendiente.</p>
            <button 
              className="btn bg-red-800 text-white hover:bg-red-900" 
              onClick={() => document.getElementById('modal2').showModal()}
            >
              Ver precio
            </button>
            <dialog id="modal2" className="modal">
              <div className="modal-box bg-white text-black">
                <h3 className="font-bold text-lg">Saya Afroboliviana</h3>
                <p className="py-4">Precio del curso: 120 Bs.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* Card 3 - Morenada */}
        <div className="card shadow-xl bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 text-white">
          <figure>
            <img 
              className="w-full h-90 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Mascara_de_la_morenada_2012_Oruro.JPG/250px-Mascara_de_la_morenada_2012_Oruro.JPG" 
              alt="Morenada" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Morenada</h2>
            <p>Pasos lentos con trajes brillantes y mucha historia.</p>
            <button 
              className="btn bg-red-800 text-white hover:bg-red-900" 
              onClick={() => document.getElementById('modal3').showModal()}
            >
              Ver precio
            </button>
            <dialog id="modal3" className="modal">
              <div className="modal-box bg-white text-black">
                <h3 className="font-bold text-lg">Morenada</h3>
                <p className="py-4">Precio del curso: 180 Bs.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* Card 4 - Tinku */}
        <div className="card shadow-xl bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 text-white">
          <figure>
            <img 
              className="w-full h-90 object-cover"
              src="https://png.pngtree.com/thumb_back/fh260/background/20220321/pngtree-tinku-dance-group-chilean-dance-movement-photo-image_21783196.jpg" 
              alt="Tinku" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tinku</h2>
            <p>Danza ritual con fuerza y simbolismo andino.</p>
            <button 
              className="btn bg-red-800 text-white hover:bg-red-900" 
              onClick={() => document.getElementById('modal4').showModal()}
            >
              Ver precio
            </button>
            <dialog id="modal4" className="modal">
              <div className="modal-box bg-white text-black">
                <h3 className="font-bold text-lg">Tinku</h3>
                <p className="py-4">Precio del curso: 140 Bs.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* Card 5 - Diablada */}
        <div className="card shadow-xl bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 text-white">
          <figure>
            <img 
              className="w-full h-90 object-cover"
              src="https://images.pexels.com/photos/26926707/pexels-photo-26926707/free-photo-of-golden-ornamented-buddha-figurine.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Diablada" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Diablada</h2>
            <p>Una danza con máscaras y trajes espectaculares.</p>
            <button 
              className="btn bg-red-800 text-white hover:bg-red-900" 
              onClick={() => document.getElementById('modal5').showModal()}
            >
              Ver precio
            </button>
            <dialog id="modal5" className="modal">
              <div className="modal-box bg-white text-black">
                <h3 className="font-bold text-lg">Diablada</h3>
                <p className="py-4">Precio del curso: 160 Bs.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* Card 6 - Cueca */}
        <div className="card shadow-xl bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 text-white">
          <figure>
            <img 
              className="w-full h-90 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wH-b16A5zGRGUD6xnklkg6FnoGcazT4lCg&s" 
              alt="Cueca" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cueca Boliviana</h2>
            <p>Danza de conquista, con pañuelos y coqueteo.</p>
            <button 
              className="btn bg-red-800 text-white hover:bg-red-900" 
              onClick={() => document.getElementById('modal6').showModal()}
            >
              Ver precio
            </button>
            <dialog id="modal6" className="modal">
              <div className="modal-box bg-white text-black">
                <h3 className="font-bold text-lg">Cueca Boliviana</h3>
                <p className="py-4">Precio del curso: 130 Bs.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
