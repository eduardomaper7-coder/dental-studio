const FeaturedBox = () => {
  return (
    <section className="bg-[#FAF9F7] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[40px]">

          <img
            src="/clinica-dental.jpg"
            alt="Dental Studio"
            className="h-[700px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-8 md:px-16">

              <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                Dental Studio · Santa Cruz de Tenerife
              </span>

              <h2 className="mt-6 text-5xl font-light leading-tight text-white md:text-7xl">
                La sonrisa es una verdadera fuerza vital.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                La única capaz de mover lo inamovible. Diseñamos sonrisas que
                transmiten confianza, bienestar y naturalidad.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:922068631"
                  className="rounded-full bg-white px-8 py-4 text-center text-sm font-medium text-black"
                >
                  Llamar al 922 068 631
                </a>

                <a
                  href="#contacto"
                  className="rounded-full border border-white/30 px-8 py-4 text-center text-sm font-medium text-white backdrop-blur-sm"
                >
                  Solicitar valoración
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedBox;