export default function HolaMundo({ className = '' }) {
  return (
    <div className={`${className} mb-20`}>
      <h2 className="font-blueberry text-2xl">Hola Santi y Marhya</h2>
      <div className="text-teal-600 mt-1 text-sm">02 de Noviembre de 2021</div>
      <p className="text-xl mt-6">
        ¡Hola papá Santi!, ¡Hola mamá Marhya!, ¡Hola Marta, el mundo te está esperando!
        Aunque la distancia no nos permite vernos con la frecuencia que quisiéramos, hay
        cosas que no rompen ni el tiempo, ni las dificultades.
      </p>
      <p className="text-xl mt-6">
        He pensado que este blog pudiera ser simplemente un lugar donde recoger algunos de
        los pensamientos y vivencias personales de tus padres, familia y amigos que son
        familia, me comprometo a tratar de mantener actualizado este diario y que algún
        día en un futuro lo miremos con cariño.
      </p>
      <p className="text-xl mt-6">
        Esto es un pequeño borrador de lo que pudiera llegar a ser, si os gusta... to be
        continued...
      </p>

      <p className="text-xl mt-6">
        ¡Desde Bdj, se os quiere mucho, Nos vemos pronto! 👋 ❤️
      </p>
    </div>
  );
}
