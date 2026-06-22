import { Phone, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#FAF9F7] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8E2DA]/40 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-16">

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block mb-6 px-4 py-2 text-xs tracking-[0.25em] uppercase border border-neutral-300 rounded-full text-neutral-700">
              Clínica Dental Premium · Santa Cruz de Tenerife
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-neutral-900">
              Sonrisas
              <span className="block font-medium">
                diseñadas con precisión
              </span>
            </h1>

            <p className="mt-8 text-lg text-neutral-600 leading-relaxed max-w-xl">
              En Dental Studio combinamos tecnología avanzada,
              odontología estética y atención personalizada para crear
              tratamientos exclusivos que cuidan tu salud y potencian tu sonrisa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
  href="tel:922068631"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-white transition-all hover:bg-neutral-800"
>
  <Phone size={18} className="text-white" />
  <span className="text-white">922 068 631</span>
</a>

              <a
                href="#tratamientos"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-300 rounded-full hover:border-neutral-900 transition-all"
              >
                Ver tratamientos
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="flex items-center gap-10 mt-14 pt-8 border-t border-neutral-200">
              <div>
                <p className="text-3xl font-light">+1000</p>
                <span className="text-sm text-neutral-500">
                  Pacientes satisfechos
                </span>
              </div>

              <div>
                <p className="text-3xl font-light">5★</p>
                <span className="text-sm text-neutral-500">
                  Atención personalizada
                </span>
              </div>

              <div>
                <p className="text-3xl font-light">Digital</p>
                <span className="text-sm text-neutral-500">
                  Tecnología avanzada
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[40px]">
              <img
                src="/hero-web.webp"
                alt="Dental Studio"
                className="w-full h-[750px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-xs">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Estética Dental
              </p>
              <p className="text-neutral-900">
                Carillas, implantes, ortodoncia y tratamientos avanzados
                para una sonrisa natural y elegante.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;