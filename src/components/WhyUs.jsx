import { useEffect, useState } from "react";

const slides = [
  {
    image: "/clinica-tinerdent-interior.jpg",
    alt: "Interior de Dental Studio",
    badge: "Tecnología avanzada y atención personalizada",
  },
  {
    image: "/equipo-tinerdent.webp",
    alt: "Equipo Dental Studio",
    badge: "Un equipo comprometido con tu sonrisa",
  },
];

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Dental Studio
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-light leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Una experiencia dental diseñada alrededor de ti
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Combinamos experiencia clínica, tecnología avanzada y un trato
            cercano para ofrecer tratamientos precisos, cómodos y adaptados a
            cada paciente.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-neutral-200 bg-[#FAF9F7] p-8">
              <h3 className="text-2xl font-light text-neutral-950">
                Atención personalizada
              </h3>
              <p className="mt-3 leading-8 text-neutral-600">
                Cada sonrisa es diferente. Diseñamos tratamientos adaptados a
                tus necesidades y objetivos.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-[#FAF9F7] p-8">
              <h3 className="text-2xl font-light text-neutral-950">
                Tecnología avanzada
              </h3>
              <p className="mt-3 leading-8 text-neutral-600">
                Utilizamos herramientas digitales y técnicas modernas para
                ofrecer diagnósticos precisos y tratamientos eficaces.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-[#FAF9F7] p-8">
              <h3 className="text-2xl font-light text-neutral-950">
                Equipo especializado
              </h3>
              <p className="mt-3 leading-8 text-neutral-600">
                Profesionales comprometidos con la excelencia clínica y el
                bienestar de nuestros pacientes.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-[#FAF9F7] p-8">
              <h3 className="text-2xl font-light text-neutral-950">
                Comodidad y confianza
              </h3>
              <p className="mt-3 leading-8 text-neutral-600">
                Queremos que cada visita sea tranquila, cómoda y positiva desde
                el primer momento.
              </p>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <div className="relative h-[650px]">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.image}
                    alt={slide.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                      currentSlide === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] bg-white/95 p-6 backdrop-blur-md">
                  <p className="text-lg font-medium text-neutral-900">
                    {slides[currentSlide].badge}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    currentSlide === index ? "bg-neutral-900" : "bg-neutral-300"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;