const FeaturedBox = () => {
  return (
    <section className="bg-[#f6fbf7] py-16 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] bg-green-50 min-h-[auto] lg:min-h-[520px]">

          {/* Imagen */}
          <div className="h-[260px] w-full lg:h-[520px] lg:w-[62%]">
            <img
              src="/clinica-dental.jpg"
              alt="Clínica Dental Tinerdent"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja texto */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(22,101,52,0.14)] sm:p-8 md:p-10">

              <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                Clínica Dental en Santa Cruz de Tenerife
              </span>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-green-700 sm:text-4xl">
                Cuidamos tu sonrisa con una atención{' '}
                <span className="text-orange-500">personalizada</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                En Clínica Dental Tinerdent estudiamos cada caso de forma
                individual para ofrecer tratamientos adaptados a las necesidades
                de cada paciente. Nuestro objetivo es ayudarte a mantener una
                sonrisa sana, funcional y estética con la máxima confianza.
              </p>

              {/* Botones */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:922290395"
                  className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-xl bg-green-700 px-6 py-4 text-base font-bold text-white transition hover:bg-green-800"
                >
                  📞 Llamar al 922 290 395
                </a>

                <a
                  href="#contacto"
                  className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-xl bg-orange-500 px-6 py-4 text-base font-bold text-white transition hover:bg-orange-600"
                >
                  Solicitar cita
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox