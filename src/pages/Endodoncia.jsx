const BlogEndodoncia = () => {
  const benefits = [
    {
      title: "Conserva tu diente natural",
      text: "La endodoncia permite tratar el interior del diente y evitar extracciones cuando la pieza puede salvarse.",
    },
    {
      title: "Alivia el dolor dental",
      text: "Ayuda a eliminar la infección o inflamación de la pulpa dental, reduciendo molestias intensas.",
    },
    {
      title: "Recupera la funcionalidad",
      text: "Tras el tratamiento, el diente puede seguir cumpliendo su función al masticar correctamente.",
    },
    {
      title: "Evita complicaciones",
      text: "Tratar una infección a tiempo puede prevenir abscesos, inflamación y daños en tejidos cercanos.",
    },
    {
      title: "Tratamiento seguro",
      text: "Es un procedimiento habitual en odontología conservadora y se realiza con técnicas precisas.",
    },
    {
      title: "Mejora tu salud bucodental",
      text: "Mantener tus dientes naturales siempre que sea posible favorece el equilibrio de toda la boca.",
    },
  ];

  const symptoms = [
    "Dolor intenso o persistente en una pieza dental",
    "Sensibilidad prolongada al frío o al calor",
    "Inflamación en la encía cercana al diente",
    "Molestias al masticar o al tocar la pieza",
    "Cambio de color en el diente",
    "Aparición de flemón o infección dental",
  ];

  const steps = [
    {
      number: "1",
      title: "Valoración inicial",
      text: "Exploramos la pieza dental y analizamos los síntomas para confirmar si la endodoncia es el tratamiento indicado.",
    },
    {
      number: "2",
      title: "Limpieza del conducto",
      text: "Se elimina el tejido afectado del interior del diente y se limpian cuidadosamente los conductos radiculares.",
    },
    {
      number: "3",
      title: "Sellado del diente",
      text: "Una vez desinfectado el interior, se sellan los conductos para proteger la pieza y evitar nuevas infecciones.",
    },
    {
      number: "4",
      title: "Restauración final",
      text: "Según el caso, se reconstruye el diente o se recomienda una funda para reforzar su estructura.",
    },
  ];

  return (
    <main className="bg-white pt-28">
      <section className="bg-[#FAF9F7] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Dental Studio · Odontología conservadora
            </span>

            <h1 className="mt-6 text-5xl font-light leading-tight tracking-tight text-neutral-950 sm:text-6xl">
              Endodoncia en Dental Studio
            </h1>

            <p className="mt-6 text-xl leading-9 text-neutral-700">
              Tratamiento para salvar dientes dañados o infectados, aliviar el
              dolor y conservar tu sonrisa natural en nuestra clínica dental de
              Santa Cruz de Tenerife.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
  href="tel:922068631"
  className="inline-flex justify-center rounded-full bg-neutral-950 px-8 py-4 text-sm font-medium"
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
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80"
              alt="Endodoncia en Dental Studio"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.05)] sm:p-10">
            <p className="text-lg leading-9 text-neutral-700">
              La endodoncia es un tratamiento dental que se realiza cuando el
              interior del diente, conocido como pulpa dental, está inflamado o
              infectado. Esta situación puede producirse por caries profundas,
              traumatismos, fracturas dentales o problemas que han avanzado sin
              tratamiento.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700">
              Cuando la pulpa se ve afectada, el paciente puede experimentar
              dolor intenso, sensibilidad prolongada al frío o al calor,
              molestias al masticar e incluso inflamación. En estos casos, la
              endodoncia permite limpiar el interior del diente, eliminar el
              tejido dañado y sellar los conductos para conservar la pieza.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700">
              En Dental Studio, clínica dental en Santa Cruz de Tenerife,
              estudiamos cada caso de forma personalizada para determinar si la
              endodoncia es la mejor opción para conservar la pieza dental y
              recuperar la salud bucodental del paciente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F7] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
              alt="Tratamiento de endodoncia dental"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Salvar el diente
            </span>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
              ¿Qué es una endodoncia?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              Una endodoncia consiste en tratar el interior de una pieza dental
              afectada. Durante el procedimiento se limpian los conductos del
              diente, se elimina el tejido inflamado o infectado y se realiza un
              sellado para proteger la pieza.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700">
              El objetivo principal es conservar el diente natural y evitar su
              extracción. Mantener las piezas naturales siempre que sea posible
              ayuda a preservar la mordida, la estética y el equilibrio general
              de la boca.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Señales de alerta
            </span>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
              ¿Cuándo puede ser necesaria una endodoncia?
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Algunos síntomas pueden indicar que el nervio del diente está
              afectado. Ante molestias persistentes, conviene acudir a una
              valoración dental.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-neutral-200 bg-[#FAF9F7] p-7"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-medium text-white">
                  !
                </div>

                <h3 className="text-xl font-light leading-8 text-neutral-950">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F7] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Ventajas
            </span>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
              Beneficios de tratar el diente a tiempo
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              La endodoncia permite actuar sobre el origen del problema y
              conservar la pieza dental cuando el diagnóstico lo permite.
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
              ¿Cómo es el proceso de una endodoncia?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Antes de comenzar, se realiza una valoración para confirmar el
              diagnóstico y explicar al paciente cada fase del tratamiento.
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
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Después del tratamiento
            </span>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
              ¿Qué cuidados necesita un diente endodonciado?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              Tras una endodoncia, es importante seguir las indicaciones del
              dentista y mantener una buena higiene oral. Aunque el dolor
              relacionado con la infección suele mejorar, la pieza tratada puede
              requerir una reconstrucción para recuperar su resistencia.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700">
              En algunos casos, especialmente cuando el diente ha perdido mucha
              estructura, puede ser recomendable colocar una funda o corona
              dental para protegerlo a largo plazo. Esta decisión depende del
              estado de la pieza y de la función que cumple en la mordida.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80"
              alt="Cuidados después de una endodoncia"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            ¿Tienes dolor dental o sensibilidad persistente?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/75">
            Si notas molestias al masticar, dolor intenso o sensibilidad que no
            desaparece, una valoración a tiempo puede ayudarte a conservar tu
            diente natural y evitar complicaciones.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-white/75">
            Solicita cita en Dental Studio y deja tu tratamiento en manos de un
            equipo especializado en odontología conservadora en Santa Cruz de
            Tenerife.
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

export default BlogEndodoncia;