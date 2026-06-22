const Location = () => {
  return (
    <section className="bg-[#FAF9F7] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Ubicación
          </span>

          <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
            Ven a visitarnos
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Te esperamos en el centro de Santa Cruz de Tenerife en un espacio
            diseñado para ofrecer una experiencia cómoda, cercana y profesional.
          </p>

          <p className="mt-6 text-lg font-medium text-neutral-900">
            C. Méndez Núñez, 38, 38003 Santa Cruz de Tenerife
          </p>

          <div className="mt-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=C.+Mendez+Nunez+38+38003+Santa+Cruz+de+Tenerife"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-neutral-950 px-8 py-4 text-sm font-medium text-white"
            >
              Cómo llegar
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
          <iframe
            src="https://www.google.com/maps?q=C.%20Mendez%20Nunez%2038%2C%2038003%20Santa%20Cruz%20de%20Tenerife&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Dental Studio"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;