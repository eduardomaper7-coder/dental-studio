const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200/60 bg-white/90 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <a
          href="#inicio"
          className="relative flex w-[180px] items-center"
        >
          <img
            src="/logo-dental-studio.png"
            alt="Dental Studio"
            className="absolute -top-8 h-24 w-auto md:-top-10 md:h-32"
          />
        </a>

        {/* Menú */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#inicio"
            className="text-[15px] font-medium text-neutral-800 transition hover:text-black"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="text-[15px] font-medium text-neutral-800 transition hover:text-black"
          >
            Tratamientos
          </a>

          <a
            href="#tarifas"
            className="text-[15px] font-medium text-neutral-800 transition hover:text-black"
          >
            Precios
          </a>

          <a
            href="#contacto"
            className="text-[15px] font-medium text-neutral-800 transition hover:text-black"
          >
            Contacto
          </a>
        </nav>

        {/* Botón teléfono */}
        <a
          href="tel:922068631"
          className="flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
        >
          <span className="text-pink-500">●</span>
          <span className="text-white">922 068 631</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;