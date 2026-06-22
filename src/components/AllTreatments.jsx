import { Link } from "react-router-dom";

const treatments = [
  {
    name: "Implantes dentales",
    image: "/implantes-dentales-usera.jpg",
    url: "/#contacto",
  },
  {
    name: "Endodoncia",
    image: "/endodoncia-usera.png",
    url: "/endodoncia",
  },
  {
    name: "Fundas de porcelana",
    image: "/funda-porcelana-siliconio-usera.jpg",
    url: "/#contacto",
  },
  {
    name: "Fundas de zirconio",
    image: "/fundas-zirconio-usera.jpg",
    url: "/#contacto",
  },
  {
    name: "Frenectomía",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    url: "/#contacto",
  },
  {
    name: "Tratamiento de encías",
    image: "/tratamiento-encias-usera.jpg",
    note: "Raspajes",
    url: "/#contacto",
  },
  {
    name: "Blanqueamiento dental",
    image: "/blanqueamiento-dental-usera.jpg",
    url: "/#contacto",
  },
  {
    name: "Prótesis total",
    image: "/protesis-total-usera.jpg",
    url: "/#contacto",
  },
  {
    name: "Limpieza dental",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    url: "/#contacto",
  },
  {
    name: "Empastes",
    image: "/empastes-usera.jfif",
    url: "/#contacto",
  },
  {
    name: "Cirugía dental",
    image: "/cirugia-dental-usera.jpg",
    note: "Tercer molar incluido",
    url: "/#contacto",
  },
  {
    name: "Exodoncia",
    image: "/exodoncia-usera.webp",
    url: "/#contacto",
  },
];

const AllTreatments = () => {
  return (
    <main className="bg-[#FAF9F7] pb-24 pt-36">
      <section className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Dental Studio
          </span>

          <h1 className="mt-5 text-5xl font-light tracking-tight text-neutral-950 sm:text-6xl">
            Tratamientos dentales
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Odontología estética, restauradora y preventiva diseñada para
            ayudarte a recuperar la funcionalidad, la salud y la confianza en tu
            sonrisa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} en Dental Studio Santa Cruz de Tenerife`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                
              </div>

              <div className="p-7">
                <h2 className="text-2xl font-light text-neutral-950">
                  {treatment.name}
                </h2>

                {treatment.note && (
                  <p className="mt-2 text-sm text-neutral-500">
                    {treatment.note}
                  </p>
                )}

                <Link
                  to={treatment.url}
                  className="mt-7 inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900"
                >
                  Más información
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] bg-neutral-950 px-8 py-10 text-white md:flex md:items-center md:justify-between md:px-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Valoración personalizada
            </span>

            <h2 className="mt-3 text-3xl font-light tracking-tight md:text-4xl">
              ¿Buscas un tratamiento específico?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
              Nuestro equipo puede orientarte y diseñar un plan adaptado a tus
              necesidades y objetivos.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 md:mt-0 md:flex-row">
            <a
              href="tel:922068631"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-medium"
              style={{ color: "#000000" }}
            >
              Llamar al 922 068 631
            </a>

            <a
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white"
            >
              Solicitar valoración
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllTreatments;