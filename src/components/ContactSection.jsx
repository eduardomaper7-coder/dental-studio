import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="scroll-mt-28 bg-[#FAF9F7] py-24"
    >
      <div className="mx-auto max-w-5xl px-4">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Contacto
          </span>

          <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
            Encuéntranos
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Estamos en el centro de Santa Cruz de Tenerife. Reserva tu
            valoración y descubre una nueva forma de cuidar tu sonrisa.
          </p>
        </div>

        <div className="space-y-6">

          {/* Dirección */}
          <div className="flex gap-5 rounded-[2rem] border border-neutral-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            <div className="pt-1 text-xl text-neutral-900">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-medium text-neutral-950">
                Dirección
              </h3>

              <p className="mt-2 text-lg text-neutral-600">
                C. Méndez Núñez, 38, 38003 Santa Cruz de Tenerife
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex gap-5 rounded-[2rem] border border-neutral-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            <div className="pt-1 text-xl text-neutral-900">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-medium text-neutral-950">
                Teléfono
              </h3>

              <a
                href="tel:922068631"
                className="mt-2 block text-lg text-neutral-600"
              >
                922 068 631
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="flex gap-5 rounded-[2rem] border border-neutral-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            <div className="pt-1 text-xl text-neutral-900">
              <FaClock />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-medium text-neutral-950">
                Horario
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  ["Lunes", "10:00–19:00"],
                  ["Martes", "10:00–19:00"],
                  ["Miércoles", "10:00–19:00"],
                  ["Jueves", "10:00–19:00"],
                  ["Viernes", "10:00–19:00"],
                  ["Sábado", "Cerrado"],
                  ["Domingo", "Cerrado"],
                ].map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-neutral-100 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="font-medium text-neutral-900">
                      {day}
                    </span>

                    <span className="text-neutral-600">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;