const reviews = [
  {
    text: 'Excelente atención y trato muy cercano. El equipo me explicó todo el tratamiento con claridad y me sentí muy cómodo durante todo el proceso.',
    name: 'Paciente de Tinerdent',
    time: 'Google Reviews',
  },
  {
    text: 'Grandes profesionales. La clínica transmite confianza desde el primer momento y el resultado del tratamiento ha sido excelente.',
    name: 'Paciente de Tinerdent',
    time: 'Google Reviews',
  },
  {
    text: 'Muy contento con la atención recibida. Instalaciones modernas, personal amable y un servicio impecable.',
    name: 'Paciente de Tinerdent',
    time: 'Google Reviews',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#f6fbf7] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-500">
            Opiniones de pacientes
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-green-700 sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>

          <div className="mt-5 text-2xl tracking-[0.2em] text-[#E4B525]">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            La confianza de nuestros pacientes es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[340px] flex-col rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:min-h-[360px] sm:p-7"
            >
              <div className="mb-5 text-lg tracking-[0.18em] text-[#E4B525] sm:text-xl">
                ★★★★★
              </div>

              <p className="flex-1 text-sm leading-7 text-neutral-700 sm:text-[15px] sm:leading-8">
                {review.text}
              </p>

              <div className="mt-6 sm:mt-8">
                <p className="text-lg font-bold text-green-700 sm:text-xl">
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
  )
}

export default Testimonials