export default function HolaMundo({ className = '' }) {
  return (
    <div className={`${className} mb-20`}>
      <h2 className="font-blueberry text-2xl">
        Con todo el cariño <a href="raquel.es">Raquel</a>
      </h2>
      <div className="text-teal-600 mt-1 text-sm">25 de Diciembre de 2021</div>
      <p className="text-xl mt-6">
        Holi Marhya, holi Santi. ¿Cómo estáis?, ¿Cómo se encuentra la pequeña dentro de la
        barriguita, ya se mueve? Cuándo mi hermano me contó la gran noticia me emocioné.
        Me siento muy feliz por vosotros.
      </p>
      <p className="text-xl mt-6">
        Marta, eres una niña muy afortunada, en Nueva York tus papis te han preparado un
        lugar lleno de amor en el que vivir y disfrutar del mundo de los sentidos. Y al
        otro lado del Atlántico, en Badajoz, tus abuelos, tito y una pequeña familia de
        amigos te estamos esperando.
      </p>
      <p className="text-xl mt-6">
        Te enseñaremos las calles de en las que tus padres nacieron y te contaremos
        historias de cuándo tu papi era más joven, para que te sientas cerca de las raíces
        que tienes aquí.
      </p>
      <p className="text-xl mt-6">
        Estamos deseando conocerte, aunque la distancia haga que eso tarde un poquito, por
        eso vamos a escribirte mensajes en este blog, para poder intercambiar experiencias
        y sensaciones. Porque hay vínculos que trascienden al tiempo y al espacio.
      </p>

      <p className="text-xl mt-6">
        Juega, aprende, y disfruta pequeña Marta, nosotros aquí te esperamos con los
        brazos abiertos. ❤️💛💚
      </p>
    </div>
  );
}
