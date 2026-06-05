const BlogImplantes = () => {
  const benefits = [
    {
      title: 'Funcionalidad al masticar',
      text: 'Permiten volver a comer con mayor seguridad y comodidad.',
    },
    {
      title: 'Estética natural',
      text: 'La corona se diseña para integrarse con el resto de dientes.',
    },
    {
      title: 'Mayor estabilidad',
      text: 'El implante actúa como una raíz artificial fija y resistente.',
    },
    {
      title: 'Conservación del hueso',
      text: 'Ayudan a reducir la pérdida ósea tras la ausencia dental.',
    },
    {
      title: 'Solución duradera',
      text: 'Con buenos cuidados, pueden mantenerse durante muchos años.',
    },
    {
      title: 'Confianza al sonreír',
      text: 'Recuperar piezas dentales mejora la seguridad al hablar y sonreír.',
    },
  ]

  const steps = [
    {
      number: '1',
      title: 'Valoración inicial',
      text: 'Estudiamos el estado de tu boca, encías y hueso para determinar si el tratamiento es adecuado.',
    },
    {
      number: '2',
      title: 'Planificación del caso',
      text: 'Diseñamos un plan adaptado a tus necesidades, explicando cada fase antes de comenzar.',
    },
    {
      number: '3',
      title: 'Colocación del implante',
      text: 'El implante se coloca en el hueso maxilar para actuar como raíz artificial.',
    },
    {
      number: '4',
      title: 'Corona definitiva',
      text: 'Tras la integración del implante, se coloca la pieza final para recuperar estética y función.',
    },
  ]

  const reasons = [
    'Atención profesional en Santa Cruz de Tenerife',
    'Estudio individual de cada paciente',
    'Tratamientos orientados a salud, función y estética',
    'Acompañamiento durante todo el proceso',
    'Clínica dental Tinerdent en Santa Cruz de Tenerife',
  ]

  return (
    <main className="bg-white pt-28">
      {/* Hero */}
      <section className="bg-[#f0faf4] py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-[#D72638] px-4 py-2 text-sm font-bold text-white">
              Implantología dental
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#00662c] sm:text-5xl">
              Implantes dentales en Tinerdent
            </h1>

            <p className="mt-6 text-xl leading-9 text-neutral-700">
              Recupera la funcionalidad de tu boca, mejora la estética de tu
              sonrisa y vuelve a masticar con confianza en nuestra clínica
              dental de Santa Cruz de Tenerife.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:922246711"
                className="inline-flex justify-center rounded-xl bg-[#D72638] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#B71F2E]"
              >
                Solicitar valoración
              </a>

              <a
                href="/#contacto"
                className="inline-flex justify-center rounded-xl border-2 border-[#008037] px-8 py-4 font-bold text-[#008037] transition hover:bg-[#008037] hover:text-white"
              >
                Ver contacto
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,128,55,0.18)]">
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80"
              alt="Implantes dentales en Tinerdent"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(0,128,55,0.10)] sm:p-10">
            <p className="text-lg leading-9 text-neutral-700">
              Perder una pieza dental no solo afecta a la estética de la
              sonrisa, sino también a funciones esenciales como masticar, hablar
              correctamente y mantener una buena salud bucodental. Cuando falta
              un diente, el resto de piezas pueden desplazarse progresivamente,
              generando problemas de mordida y dificultando la higiene oral.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700">
              Los implantes dentales son una solución eficaz, duradera y estética
              para reemplazar dientes perdidos. Gracias a su integración con el
              hueso maxilar, ofrecen una estabilidad similar a la de un diente
              natural.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700">
              En Tinerdent, clínica dental en Santa Cruz de Tenerife, estudiamos
              cada caso de forma individual para ofrecer un tratamiento seguro,
              cómodo y adaptado a las necesidades de cada paciente.
            </p>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="bg-[#f0faf4] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#D72638]">
              Beneficios principales
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#00662c] sm:text-4xl">
              Ventajas de los implantes dentales
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Los implantes ayudan a recuperar piezas perdidas de forma estable,
              cómoda y natural.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,128,55,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,128,55,0.14)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#008037] font-bold text-white">
                  ✓
                </div>

                <h3 className="text-xl font-extrabold text-[#00662c]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#D72638]">
              Paso a paso
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#00662c] sm:text-4xl">
              ¿Cómo es el proceso?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
              Antes de iniciar cualquier tratamiento, valoramos tu caso y
              resolvemos tus dudas para que conozcas cada fase.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,128,55,0.10)] sm:flex-row"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D72638] text-xl font-extrabold text-white">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#00662c]">
                    {step.title}
                  </h3>

                  <p className="mt-2 leading-7 text-neutral-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidatos */}
      <section className="bg-[#f0faf4] py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,128,55,0.14)]">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80"
              alt="Valoración para implantes dentales en Tinerdent"
              className="h-[380px] w-full object-cover"
            />
          </div>

          <div>
            <span className="inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-[#008037] shadow-sm">
              Valoración previa
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#00662c] sm:text-4xl">
              ¿Quién puede colocarse implantes dentales?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              La mayoría de personas adultas pueden beneficiarse de un
              tratamiento con implantes dentales. Para ello es importante
              disponer de una cantidad adecuada de hueso y mantener una buena
              salud general y periodontal.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700">
              Cada paciente es diferente, por eso realizamos una valoración
              previa para determinar la viabilidad del tratamiento y diseñar el
              plan más adecuado para cada caso.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué Tinerdent */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#D72638]">
              Nuestra clínica
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#00662c] sm:text-4xl">
              Implantes dentales en Tinerdent
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              En nuestra clínica dental de Santa Cruz de Tenerife trabajamos con
              un enfoque profesional, cercano y orientado a recuperar la salud
              bucodental de cada paciente.
            </p>

            <div className="mt-8 space-y-4">
              {reasons.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D72638] text-sm font-bold text-white">
                    ✓
                  </span>

                  <p className="text-lg font-medium text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80"
              alt="Clínica dental Tinerdent"
              className="h-[380px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#008037] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Recupera tu sonrisa con implantes dentales
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/85">
            Si has perdido una o varias piezas dentales, podemos ayudarte a
            recuperar la funcionalidad de tu boca y la estética de tu sonrisa
            mediante un tratamiento adaptado a tu caso.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-white/85">
            Solicita una valoración en Tinerdent y estudiaremos la mejor
            solución para ti en nuestra clínica dental de Santa Cruz de Tenerife.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:922246711"
              className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#D72638] transition hover:bg-gray-100"
            >
              Llamar al 922 246 711
            </a>

            <a
              href="/#contacto"
              className="rounded-xl border border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-[#008037]"
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogImplantes