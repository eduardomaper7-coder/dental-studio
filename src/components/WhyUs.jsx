import { useEffect, useState } from 'react'

const slides = [
  {
    image: '/clinica-tinerdent-interior.jpg',
    alt: 'Interior de Clínica Dental Tinerdent en Santa Cruz de Tenerife',
    badge: 'Clínica dental moderna en Santa Cruz de Tenerife',
  },
  {
    image: '/equipo-tinerdent.webp',
    alt: 'Equipo profesional de Clínica Dental Tinerdent',
    badge: 'Atención cercana y personalizada para toda la familia',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#f6fbf7] py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        
        <div className="relative">
          <span className="absolute -left-10 top-0 hidden rotate-180 text-xs font-bold uppercase tracking-[0.4em] text-orange-500 lg:block [writing-mode:vertical-rl]">
            Clínica Dental Tinerdent
          </span>

          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white">
              Nuestro valor
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-green-700 sm:text-5xl">
              ¿Por qué elegir Tinerdent?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              En Clínica Dental Tinerdent trabajamos cada día para ofrecerte una
              atención cercana, tratamientos personalizados y la confianza que
              necesitas para cuidar tu sonrisa.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <h3 className="text-2xl font-extrabold text-green-700">
                  Atención personalizada
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Analizamos cada caso de forma individual para ofrecer el
                  tratamiento más adecuado para ti.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-green-700">
                  Equipo profesional
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Contamos con profesionales cualificados comprometidos con tu
                  salud bucodental.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-green-700">
                  Tecnología actual
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Utilizamos equipamiento moderno para conseguir diagnósticos
                  precisos y tratamientos eficaces.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-green-700">
                  Comodidad y confianza
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Queremos que te sientas cómodo y acompañado desde la primera
                  visita hasta el final del tratamiento.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(22,101,52,0.18)]">
            <div className="relative h-[500px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-green-900/20"></div>

              <div className="absolute left-6 top-6 z-10 max-w-sm rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="text-base font-bold leading-7 text-green-700">
                  {slides[currentSlide].badge}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[28px] bg-orange-500"></div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index
                    ? 'bg-orange-500'
                    : 'bg-black/20'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyUs