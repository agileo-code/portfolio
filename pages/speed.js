import Layout from '../components/layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="bg-corporative-blue p-10 flex" />
      <div className="flex flex-col">
        <h2>
          ¿Cuanto dinero pierde por cada segundo que tarda en cargar su
          aplicación web?
        </h2>
        <div>
          <p>
            ¿Sabia que la mayoria de la gente que tiene una idea rentable de
            negocio, fracasa estrepitosamente solo por no hacer una inversión
            razonable en su herramienta de ventas?
          </p>
          <p>
            Esto es totalmente cierto, pueden perder los ahorros de toda su vida
            o incluso su casa si no se toman esto en serio.
          </p>
        </div>
        <div>
          <p>
            Muchas veces cuando creamos un negocio, nos damos cuenta que uno de
            los canales mas importantes de ventas es internet y en ese momento
            nos decidimos a crear nuestra propia aplicación web para gestionar
            nuestras ventas online.
          </p>
          <p>
            Habitualmente tenemos que tomar muchas decisiones y hacer
            importantes inversiones en diferentes ambitos para que nuestro
            producto o servicio salga adelante. El primer problema que se nos
            plantea a la hora de crear la aplicación web es cuantas tecnologias
            tenemos disponibles y que coste tienen. Una de las tecnologias que
            los autónomos suelen usar es el CMS Wordpress, esta es una solucion
            muy flexible y <strong>bastante buena</strong>
          </p>
          <p>
            Permite al emprendedor gestionar su propio contenido, mantenerlo y
            modificiarlo, además muchas empresas se ofrecen a facitiltar el
            alojamiento o hosting para Wordpress con todo preconfigurado.
          </p>
          <p>
            Tambien hay muchos desarrolladores de estos CMS que ofrecen sus
            servicios a un precio muy competitivo...pero...
          </p>
          <p>
            Esto esconde un problema más profundo que puede convertir el negicio
            en una ruina.{' '}
            <strong>
              Hay que tener en cuenta el comportamiento del usuario.
            </strong>
          </p>
          <p>
            Segun un informe de{' '}
            <a
              className="text-corporative-blue"
              href="https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Deloitte
            </a>{' '}
            <strong>
              Si tu aplicación web tarda entre 1 y 3 segundos en cargar la
              probabilidad de abandono aumenta en un 32%, pero si el tiempo de
              carga se encuentra en el rango de entre 1 y 5 segundos, la
              probabilidad de abandono aumenta hasta en un 90%
            </strong>
          </p>
          <div className="flex justify-center">
            <img src="/images/speed/pageLoad.webp" alt="pageload" />
          </div>
          ¿Vale y cuanto tarda un wordpress en cargar?
        </div>
      </div>
    </Layout>
  );
}
