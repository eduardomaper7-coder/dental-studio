import { Link } from 'react-router-dom'

const treatments = [
  {
    name: 'Implantes dentales',
    image: '/implantes-dentales-usera.jpg',
    url: '/#contacto',
  },
  {
    name: 'Endodoncia',
    image: '/endodoncia-usera.png',
    url: '/endodoncia',
  },
  {
    name: 'Fundas de porcelana',
    image: '/funda-porcelana-siliconio-usera.jpg',
    url: '/#contacto',
  },
  {
    name: 'Fundas de zirconio',
    image: '/fundas-zirconio-usera.jpg',
    url: '/#contacto',
  },
  {
    name: 'Frenectomía',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    url: '/#contacto',
  },
  {
    name: 'Tratamiento de encías',
    image: '/tratamiento-encias-usera.jpg',
    note: 'Raspajes',
    url: '/#contacto',
  },
  {
    name: 'Blanqueamiento dental',
    image: '/blanqueamiento-dental-usera.jpg',
    url: '/#contacto',
  },
  {
    name: 'Prótesis total',
    image: '/protesis-total-usera.jpg',
    url: '/#contacto',
  },
  {
    name: 'Limpieza dental',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    url: '/#contacto',
  },
  {
    name: 'Empastes',
    image: '/empastes-usera.jfif',
    url: '/#contacto',
  },
  {
    name: 'Cirugía dental',
    image: '/cirugia-dental-usera.jpg',
    note: 'Tercer molar incluido',
    url: '/#contacto',
  },
  {
    name: 'Exodoncia',
    image: '/exodoncia-usera.webp',
    url: '/#contacto',
  },
]

const AllTreatments = () => {
  return (
    <main className="bg-[#f6fbf7] pb-20 pt-32">
      <section className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white">
            Primera valoración personalizada
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-green-700 sm:text-5xl">
            Tratamientos dentales
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            En Clínica Dental Tinerdent ofrecemos tratamientos orientados a
            mejorar tu salud bucodental, recuperar la funcionalidad de tu boca y
            conseguir una sonrisa sana y estética.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(22,101,52,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(22,101,52,0.16)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} - Clínica Dental Tinerdent`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-green-700">
                    {treatment.name}
                  </h2>

                  {treatment.note && (
                    <p className="mt-1 text-sm font-semibold text-neutral-500">
                      {treatment.note}
                    </p>
                  )}
                </div>

                <Link
                  to={treatment.url}
                  className="mt-6 inline-flex font-bold text-orange-500 transition hover:text-orange-600"
                >
                  Más información →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-3xl bg-white px-8 py-10 text-center shadow-[0_10px_30px_rgba(22,101,52,0.10)]">
          <h2 className="text-3xl font-extrabold text-green-700">
            ¿Necesitas otro tratamiento?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
            Si necesitas información sobre cualquier otro tratamiento dental,
            nuestro equipo estará encantado de ayudarte. Puedes visitarnos en
            nuestra clínica o llamarnos al{' '}
            <a
              href="tel:922290395"
              className="inline-block whitespace-nowrap font-extrabold text-green-700 hover:underline"
            >
              922 290 395
            </a>
            .
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/#contacto"
              className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-orange-600"
            >
              Solicitar información
            </a>

            <a
              href="tel:922290395"
              className="rounded-xl border-2 border-green-700 px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AllTreatments