const reviews = [
  {
    text: "Excelente atención y trato muy cercano. Me explicaron todo con claridad y el resultado fue justo lo que buscaba.",
    name: "Paciente de Dental Studio",
    time: "Google Reviews",
  },
  {
    text: "Una clínica elegante, moderna y con un equipo muy profesional. Desde el primer momento transmite confianza.",
    name: "Paciente de Dental Studio",
    time: "Google Reviews",
  },
  {
    text: "Muy buena experiencia. Atención personalizada, instalaciones cuidadas y un trato impecable durante todo el proceso.",
    name: "Paciente de Dental Studio",
    time: "Google Reviews",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#FAF9F7] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Opiniones
            </span>

            <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight text-neutral-950 sm:text-5xl">
              La confianza también se sonríe.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600 lg:ml-auto">
            Cada paciente vive una experiencia única. Nuestro compromiso es que
            cada visita sea cercana, clara y cuidadosamente acompañada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[360px] flex-col justify-between rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.05)]"
            >
              <div>
                <div className="text-sm tracking-[0.25em] text-neutral-900">
                  ★★★★★
                </div>

                <p className="mt-8 text-lg font-light leading-8 text-neutral-700">
                  “{review.text}”
                </p>
              </div>

              <div className="mt-10 border-t border-neutral-200 pt-6">
                <p className="text-base font-medium text-neutral-950">
                  {review.name}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {review.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;