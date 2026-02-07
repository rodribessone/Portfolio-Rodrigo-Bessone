import React, { useState, useEffect, useRef } from 'react';

export default function Header({ t, language, toggleLanguage }) {
  // Controla si el nav está visible u oculto al hacer scroll
  const [show, setShow] = useState(true);
  const prevScrollY = useRef(0);

  // Controla si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si se hace scroll hacia abajo y pasamos cierto umbral
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        setShow(false);
      } else {
        // Si se hace scroll hacia arriba
        setShow(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Alterna el estado del menú en mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el menú al hacer clic en una opción
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        w-full bg-[#000000] py-2 px-4 fixed z-10
        transition-transform duration-300
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo o Nombre (opcional) */}
        <div className="text-[#899388] text-xl font-bold flex items-center gap-4">
          <a href="#inicio">
            <img src='/logo.png' className='h-10' />
          </a>
        </div>

        {/* Menú desktop */}
        <ul className="hidden md:flex text-xl space-x-12 items-center">
          <li className="transform transition-transform duration-300 hover:scale-110">
            <a href="#inicio" className="text-[#899388]">
              {t.inicio}
            </a>
          </li>
          <li className="transform transition-transform duration-300 hover:scale-110">
            <a href="#proyectos" className="text-[#899388]">
              {t.proyectos}
            </a>
          </li>
          <li className="transform transition-transform duration-300 hover:scale-110">
            <a href="#skills" className="text-[#899388]">
              {t.skills}
            </a>
          </li>
          <li className="transform transition-transform duration-300 hover:scale-110">
            <a href="#contacto" className="text-[#899388]">
              {t.contacto}
            </a>
          </li>
          <li>
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 border border-[#899388] text-[#899388] rounded hover:bg-[#899388] hover:text-black transition-colors text-sm font-bold"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </li>
        </ul>

        {/* Botón hamburguesa (solo visible en mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="px-2 py-1 border border-[#899388] text-[#899388] rounded hover:bg-[#899388] hover:text-black transition-colors text-xs font-bold"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={toggleMenu}
            className="text-[#899388] focus:outline-none"
          >
            {isOpen ? (
              /* Ícono de cerrar */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              /* Ícono de menú */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center mt-2 space-y-2">
          <li className="text-[#899388] text-lg hover:scale-105 transition-transform">
            <a href="#inicio" onClick={closeMenu}>
              {t.inicio}
            </a>
          </li>
          <li className="text-[#899388] text-lg hover:scale-105 transition-transform">
            <a href="#proyectos" onClick={closeMenu}>
              {t.proyectos}
            </a>
          </li>
          <li className="text-[#899388] text-lg hover:scale-105 transition-transform">
            <a href="#skills" onClick={closeMenu}>
              {t.skills}
            </a>
          </li>
          <li className="text-[#899388] text-lg hover:scale-105 transition-transform">
            <a href="#contacto" onClick={closeMenu}>
              {t.contacto}
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
