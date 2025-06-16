export default function Acordeon() {
  return (
    <div className="w-full max-w-md p-2 mx-auto bg-white rounded-md shadow-md">
      <div tabIndex={0} className="collapse collapse-arrow border border-red-400 bg-red-200 rounded-box mb-2">

        <input type="checkbox" className="peer" /> 
        <div className="collapse-title text-xl font-medium">
          Danza de Los Valles
        </div>
        <div className="collapse-content">
          <p>La Morenada es una danza típica de los Valles bolivianos.
            Vestimenta:
Los bailarines, especialmente los morenos y caporales (capataces), usan máscaras que resaltan los rasgos faciales de las personas afrodescendientes, con labios abultados, piel oscura, nariz chata y pelo ensortijado. 
Música y baile:
La música es melancólica, con un ritmo lento y pesado que evoca el cansancio y el sufrimiento de los esclavos. Los bailarines realizan movimientos que simulan el cansancio, con pasos rítmicos y el sonido de las matracas que representan las cadenas. 
Significado:
La Morenada es una forma de expresión cultural que recuerda la historia de la esclavitud en Bolivia y la lucha por la libertad. También se interpreta como una crítica a la explotación laboral y social, así como una celebración de la resistencia. 
Día Nacional:
El 7 de septiembre se celebra el Día Nacional de la Morenada en Bolivia, una jornada de conmemoración de esta danza y su significado cultural. 
          </p>
        </div>
      </div>

      <div tabIndex={1} className="collapse collapse-arrow border border-red-400 bg-red-200 rounded-box mb-2">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title text-xl font-medium">
          Danza del Altiplano
        </div>
        <div className="collapse-content">
          <p>La Diablada es una danza tradicional del Altiplano boliviano.
            Personajes:
La danza incluye figuras como el diablo mayor (Lucifer), las chinas supay (diablas), diablos menores representando los pecados capitales, el Arcángel San Miguel, el cóndor, y otros personajes como los "morenos" y los "ch'utas". 
Indumentaria:
Los trajes y máscaras son elaborados y coloridos, con detalles que varían según el personaje y la fraternidad a la que pertenecen. 
Música y Danza:
La música, interpretada por bandas y grupos de instrumentos andinos, acompaña los movimientos y coreografías, que son aprendidos y transmitidos de generación en generación. 
Significado:
La Diablada es una expresión de fe, devoción y tradición, donde los bailarines muestran su entrega a la Virgen del Socavón, patrona del Carnaval de Oruro. 
Importancia Cultural:
La Diablada es considerada una de las danzas más representativas de Bolivia, y su celebración en el Carnaval de Oruro atrae a miles de turistas cada año. 
Ha sido declarada Patrimonio Cultural de Bolivia y forma parte de las expresiones culturales que representan la identidad boliviana. 
La danza también tiene presencia en otras regiones de Bolivia y en países como Perú, donde se interpreta como parte de sus celebraciones folclóricas. 
          </p>
        </div>
      </div>

      <div tabIndex={2} className="collapse collapse-arrow border border-red-400 bg-red-200 rounded-box mb-2">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title text-xl font-medium">
          Danza del Oriente
        </div>
        <div className="collapse-content">
          <p>El Caporales es una danza popular del Oriente boliviano.
            Ritmo:
La danza se caracteriza por su ritmo rápido y enérgico, con movimientos acrobáticos, saltos y giros. 
Movimientos:
Los hombres realizan saltos, giros y patadas al aire, mientras que las mujeres resaltan su sensualidad y femineidad a través de sus movimientos. 
Vestimenta:
La vestimenta es llamativa y colorida, con variaciones entre las diferentes fraternidades. 
Personajes:
La danza representa el personaje del caporal, un capataz mulato, así como a los trabajadores que supervisa. 
La danza de Caporales es una expresión cultural vibrante y representativa de la identidad boliviana, con una historia rica y en constante evolución. 
          </p>
        </div>
      </div>

      <div tabIndex={3} className="collapse collapse-arrow border border-red-400 bg-red-200 rounded-box mb-2">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title text-xl font-medium">
          Danza del Chaco
        </div>
        <div className="collapse-content">
          <p>La Danza del Chaco refleja las tradiciones culturales de esa región.
            Sí, la danza del Chaco en Bolivia, como la chacarera, la copla chaqueña y la cueca chaqueña, refleja las tradiciones culturales de la región chaqueña, que abarca partes de los departamentos de Chuquisaca, Tarija y Santa Cruz. Estas danzas son expresiones identitarias importantes para la población chaqueña y están vinculadas a sus costumbres y realidades sociales
          </p>
        </div>
      </div>

      <div tabIndex={4} className="collapse collapse-arrow border border-red-400 bg-red-200 rounded-box mb-2">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title text-xl font-medium">
          Danza del Norte de Potosí
        </div>
        <div className="collapse-content">
          <p>La Diablada Puneña es típica del norte de Potosí.
            Origen:
La Diablada tiene sus raíces en las tradiciones prehispánicas y la colonización española, donde se fusionaron elementos indígenas con la religión católica. 
Simbolismo:
La danza representa la lucha entre las fuerzas del mal, personificadas por los diablos, y las fuerzas del bien, representadas por el Arcángel San Miguel, en un contexto de fe y devoción a la Virgen de la Candelaria, patrona de los mineros en Oruro. 
Festividades:
Es una danza central en el Carnaval de Oruro, declarado Obra Maestra del Patrimonio Oral e Intangible de la Humanidad por la UNESCO. También se presenta en otras festividades religiosas y celebraciones en diversas regiones de Bolivia 
          </p>
        </div>
      </div>
    </div>
  )
}
