import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Implantes dentales',
    description:
      'Recupera piezas dentales perdidas con implantes seguros, funcionales y diseñados para devolver la estética y comodidad de tu sonrisa.',
    image: '/implantes-dentales-usera.jpg',
  },
  {
    title: 'Ortodoncia',
    description:
      'Corrige la posición de los dientes y mejora tu mordida con tratamientos adaptados a niños, jóvenes y adultos.',
    image: '/tratamiento-encias-usera.webp',
  },
  {
    title: 'Estética dental',
    description:
      'Mejora la apariencia de tu sonrisa mediante blanqueamiento dental, carillas y otros tratamientos estéticos.',
    image: '/funda-porcelana-siliconio-usera.jpg',
  },
  {
    title: 'Endodoncia',
    description:
      'Tratamiento para eliminar infecciones dentales, aliviar el dolor y conservar el diente natural siempre que sea posible.',
    image: '/endodoncia-usera.png',
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-[#f6fbf7] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Tratamientos destacados
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-green-700 sm:text-4xl">
            Tratamientos dentales en Santa Cruz de Tenerife
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-600 sm:text-xl">
            En Clínica Dental Tinerdent ofrecemos tratamientos personalizados
            para cuidar tu salud bucodental y ayudarte a conseguir una sonrisa
            sana y estética.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(22,101,52,0.10)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(22,101,52,0.16)] sm:flex-row"
            >
              <div className="h-56 w-full sm:h-auto sm:w-[40%]">
                <img
                  src={service.image}
                  alt={`${service.title} en Santa Cruz de Tenerife - Clínica Dental Tinerdent`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex w-full flex-col justify-between p-6 sm:w-[60%]">
                <div>
                  <h3 className="text-xl font-extrabold text-green-700 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-neutral-600 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to="/tratamientos"
                    className="inline-flex items-center gap-2 text-base font-semibold text-orange-500 transition hover:text-orange-600"
                  >
                    Más información →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg font-medium text-neutral-700">
            ¿Buscas otro tratamiento dental?
          </p>

          <Link
            to="/tratamientos"
            className="mt-5 inline-flex items-center rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-orange-600"
          >
            Ver todos los tratamientos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Treatments