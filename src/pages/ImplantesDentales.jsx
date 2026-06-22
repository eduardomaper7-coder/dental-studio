const BlogImplantes = () => {
  const benefits = [
    {
      title: "Funcionalidad al masticar",
      text: "Permiten volver a comer con mayor seguridad y comodidad.",
    },
    {
      title: "Estética natural",
      text: "La corona se diseña para integrarse con el resto de dientes.",
    },
    {
      title: "Mayor estabilidad",
      text: "El implante actúa como una raíz artificial fija y resistente.",
    },
    {
      title: "Conservación del hueso",
      text: "Ayudan a reducir la pérdida ósea tras la ausencia dental.",
    },
    {
      title: "Solución duradera",
      text: "Con buenos cuidados, pueden mantenerse durante muchos años.",
    },
    {
      title: "Confianza al sonreír",
      text: "Recuperar piezas dentales mejora la seguridad al hablar y sonreír.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Valoración inicial",
      text: "Estudiamos el estado de tu boca, encías y hueso para determinar si el tratamiento es adecuado.",
    },
    {
      number: "2",
      title: "Planificación del caso",
      text: "Diseñamos un plan adaptado a tus necesidades, explicando cada fase antes de comenzar.",
    },
    {
      number: "3",
      title: "Colocación del implante",
      text: "El implante se coloca en el hueso maxilar para actuar como raíz artificial.",
    },
    {
      number: "4",
      title: "Corona definitiva",
      text: "Tras la integración del implante, se coloca la pieza final para recuperar estética y función.",
    },
  ];

  const reasons = [
    "Atención profesional en Santa Cruz de Tenerife",
    "Estudio individual de cada paciente",
    "Tratamientos orientados a salud, función y estética",
    "Acompañamiento durante todo el proceso",
    "Dental Studio en Santa Cruz de Tenerife",
  ];

  return (
    <main className="bg-white pt-28">
      <section className="bg-[#FAF9F7] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Dental Studio · Implantología dental
            </span>

            <h1 className="mt-6 text-5xl font-light leading-tight tracking-tight text-neutral-950 sm:text-6xl">
              Implantes dentales en Dental Studio
            </h1>

            <p className="mt-6 text-xl leading-9 text-neutral-700">
              Recupera la funcionalidad de tu boca, mejora la estética de tu
              sonrisa y vuelve a masticar con confianza en nuestra clínica
              dental de Santa Cruz de Tenerife.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:922068631"
                className="inline-flex justify-center rounded-full bg-neutral-950 px-8 py-4 text-sm font-medium text-white"
                style={{ color: "#FFFFFF" }}
              >
                Solicitar valoración
              </a>

              <a
                href="/#contacto"
                className="inline-flex justify-center rounded-full border border-neutral-300 px-8 py-4 text-sm font-medium text-neutral-950"
              >
                Ver contacto
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80"
              alt="Implantes dentales en Dental Studio"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.05)] sm:p-10">
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
              En Dental Studio, clínica dental en Santa Cruz de Tenerife,
              estudiamos cada caso de forma individual para ofrecer un
              tratamiento seguro, cómodo y adaptado a las necesidades de cada
              paciente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F7] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Beneficios principales
            </span>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
              Ventajas de los implantes dentales
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Los implantes ayudan a recuperar piezas perdidas de forma estable,
              cómoda y natural.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-[0_25px_80px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-medium text-white">
                  ✓
                </div>

                <h3 className="text-2xl font-light text-neutral-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Paso a paso
            </span>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
              ¿Cómo es el proceso?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Antes de iniciar cualquier tratamiento, valoramos tu caso y
              resolvemos tus dudas para que conozcas cada fase.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-5 rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-[0_25px_80px_rgba(0,0,0,0.04)] sm:flex-row"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-lg font-medium text-white">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-2xl font-light text-neutral-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-8 text-neutral-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F7] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80"
              alt="Valoración para implantes dentales en Dental Studio"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Valoración previa
            </span>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
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

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Nuestra clínica
            </span>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
              Implantes dentales en Dental Studio
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              En nuestra clínica dental de Santa Cruz de Tenerife trabajamos con
              un enfoque profesional, cercano y orientado a recuperar la salud
              bucodental de cada paciente.
            </p>

            <div className="mt-8 space-y-4">
              {reasons.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-medium text-white">
                    ✓
                  </span>

                  <p className="text-lg text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80"
              alt="Clínica Dental Studio"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            Recupera tu sonrisa con implantes dentales
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/75">
            Si has perdido una o varias piezas dentales, podemos ayudarte a
            recuperar la funcionalidad de tu boca y la estética de tu sonrisa
            mediante un tratamiento adaptado a tu caso.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-white/75">
            Solicita una valoración en Dental Studio y estudiaremos la mejor
            solución para ti en nuestra clínica dental de Santa Cruz de Tenerife.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:922068631"
              className="rounded-full bg-white px-8 py-4 text-base font-medium"
              style={{ color: "#000000" }}
            >
              Llamar al 922 068 631
            </a>

            <a
              href="/#contacto"
              className="rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white"
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogImplantes;