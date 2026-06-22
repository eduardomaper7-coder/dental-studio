import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <img
              src="/logo-dental-studio.png"
              alt="Dental Studio"
              className="mb-8 h-24 w-auto brightness-0 invert"
            />

            <p className="max-w-2xl text-lg leading-8 text-white/70">
              En Dental Studio combinamos precisión clínica, estética dental y
              atención personalizada para ayudarte a sonreír con seguridad,
              naturalidad y confianza en Santa Cruz de Tenerife.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80">
                <FaInstagram />
              </a>

              <a href="#" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="lg:text-right">
            <span className="text-xs uppercase tracking-[0.35em] text-white/40">
              Contacto
            </span>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/75">
              <p>
                C. Méndez Núñez, 38
                <br />
                38003 Santa Cruz de Tenerife
              </p>

              <p>
                <a href="tel:922068631" className="font-medium text-white">
                  922 068 631
                </a>
              </p>
            </div>

            <Link
              to="/#contacto"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-medium"
              style={{ color: "#000000" }}
            >
              Solicitar valoración
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dental Studio. Todos los derechos reservados.</p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link to="/legal">Aviso legal</Link>
              <Link to="/privacidad">Política de privacidad</Link>
              <Link to="/cookies">Política de cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;