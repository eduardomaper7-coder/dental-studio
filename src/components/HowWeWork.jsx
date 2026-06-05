import { FaStethoscope, FaMagic, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Valoración y diagnóstico personalizado',
    text: 'Estudiamos tu caso con detalle para ofrecerte el tratamiento dental más adecuado según tus necesidades.',
  },
  {
    icon: <FaMagic />,
    title: 'Tratamientos modernos',
    text: 'Trabajamos con técnicas actuales para cuidar tu salud bucodental de forma cómoda, precisa y eficaz.',
  },
  {
    icon: <FaAward />,
    title: 'Equipo profesional',
    text: 'En Tinerdent contamos con profesionales cualificados para ayudarte a mejorar tu salud y estética dental.',
  },
  {
    icon: <FaUsers />,
    title: 'Atención cercana',
    text: 'Te acompañamos en cada visita con un trato amable, claro y personalizado en Santa Cruz de Tenerife.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#f6fbf7] py-24">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl">
            ¿Cómo trabajamos en Tinerdent?
          </h2>

          <p className="mt-4 text-neutral-600">
            Cuidamos tu sonrisa desde la primera visita con un trato cercano,
            profesional y personalizado.
          </p>
        </div>

        {/* Caja principal */}
        <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(22,101,52,0.08)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                
                {/* Icono */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl text-white">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-extrabold text-green-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork