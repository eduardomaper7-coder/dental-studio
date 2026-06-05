const Location = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">

        {/* Título */}
        <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl">
          Ven a visitarnos
        </h2>

        {/* Dirección */}
        <p className="mt-6 text-lg font-medium text-neutral-700">
          C. de Pérez de Rozas, 18, 38004 Santa Cruz de Tenerife
        </p>

        {/* CTA */}
        <div className="mt-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=C.+de+Perez+de+Rozas+18+38004+Santa+Cruz+de+Tenerife"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Cómo llegar
          </a>
        </div>

        {/* Mapa */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(22,101,52,0.12)]">
          <iframe
            src="https://www.google.com/maps?q=C.%20de%20Perez%20de%20Rozas%2018%2C%2038004%20Santa%20Cruz%20de%20Tenerife&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica Dental Tinerdent"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Location