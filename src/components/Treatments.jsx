import { Link } from "react-router-dom";

const services = [
  {
    title: "Implantes dentales",
    description:
      "Soluciones fijas, seguras y naturales para recuperar piezas dentales perdidas con planificación personalizada.",
    image: "/implantes-dentales-usera.jpg",
  },
  {
    title: "Ortodoncia",
    description:
      "Alineamos tu sonrisa y mejoramos tu mordida con tratamientos discretos, cómodos y adaptados a cada paciente.",
    image: "/tratamiento-encias-usera.webp",
  },
  {
    title: "Estética dental",
    description:
      "Carillas, blanqueamiento y tratamientos estéticos para conseguir una sonrisa luminosa, armónica y natural.",
    image: "/funda-porcelana-siliconio-usera.jpg",
  },
  {
    title: "Endodoncia",
    description:
      "Tratamientos conservadores para aliviar el dolor, eliminar infecciones y preservar tus dientes naturales.",
    image: "/endodoncia-usera.png",
  },
];

const Treatments = () => {
  return (
    <section
      id="servicios"
      className="scroll-mt-28 bg-[#FAF9F7] px-4 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
              Tratamientos exclusivos
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-light leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Odontología estética y avanzada en Santa Cruz de Tenerife
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600 lg:ml-auto">
            En Dental Studio combinamos precisión clínica, tecnología avanzada
            y una atención cercana para diseñar tratamientos dentales naturales,
            funcionales y elegantes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_100px_rgba(0,0,0,0.10)]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} en Dental Studio Santa Cruz de Tenerife`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full bg-white/85 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-700 backdrop-blur-md">
                  Dental Studio
                </div>

                <h3 className="absolute bottom-6 left-6 right-6 text-3xl font-light tracking-tight text-white">
                  {service.title}
                </h3>
              </div>

              <div className="p-7">
                <p className="text-base leading-8 text-neutral-600">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <Link
                    to="/tratamientos"
                    className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
                  >
                    Más información
                    <span className="ml-3">→</span>
                  </Link>

                  <span className="text-sm text-neutral-400">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-neutral-950 px-8 py-10 text-white md:flex md:items-center md:justify-between md:px-12">
  <div>
    <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
      Valoración personalizada
    </span>


<h3 className="mt-3 text-3xl font-light tracking-tight md:text-4xl">
  ¿Quieres saber qué tratamiento necesitas?
</h3>

<p className="mt-4 max-w-2xl leading-7 text-neutral-300">
  Nuestro equipo puede orientarte y diseñar un plan adaptado a tu
  sonrisa, tu salud dental y tus objetivos estéticos.
</p>


  </div>

  <div className="mt-8 flex flex-col gap-3 md:mt-0 md:flex-row">
    <a
      href="tel:922068631"
      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-medium"
      style={{ color: "#000000" }}
    >
      Llamar al
      <span style={{ color: "#000000", marginLeft: "6px" }}>
        922 068 631
      </span>
    </a>


<Link
  to="/tratamientos"
  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white"
>
  Ver todos los tratamientos
</Link>


  </div>
</div>



      </div>
    </section>
  );
};

export default Treatments;