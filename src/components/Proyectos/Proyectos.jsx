import React, { useEffect, useRef } from 'react';
import proyectos from '../../data/Proyectos.json';
import { translations } from '../../data/translations';

export default function Proyectos({ language }) {
  const t = translations[language].proyectos;
  const scrollRef = useRef(null);

  useEffect(() => {
    // Solo activar el scroll automático en pantallas >= md
    if (window.innerWidth < 768) return;
    const container = scrollRef.current;
    if (!container) return;

    // Clonar proyectos para efecto infinito
    const cloneProjects = () => {
      const children = [...container.children];
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
      });
    };

    cloneProjects();

    const scrollStep = 1; // Velocidad de scroll
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        container.scrollTop -= scrollStep;
        if (container.scrollTop <= 0) {
          container.scrollTop = container.scrollHeight;
        }
      }, 20);
    };

    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => startScroll();

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    startScroll();

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="sticky top-0 min-h-screen md:min-h-0 md:h-screen flex flex-col md:flex-row bg-gradient-to-b from-black to-gray-900 p-10">
      {/* Contenedor de proyectos */}
      <div className="md:w-1/2 relative overflow-hidden rounded-lg shadow-lg min-h-[480px]">
        <div
          ref={scrollRef}
          className="h-full flex overflow-x-auto md:overflow-hidden md:grid md:grid-cols-2 md:grid-flow-row-dense gap-8 text-center"
        >
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="
                rounded-lg bg-[#899388]/80 m-2 p-4 shadow-inner shadow-black
                transform transition-transform duration-300 hover:scale-105
                flex-shrink-0 w-[80%] max-w-sm mx-auto
                md:w-auto md:flex-shrink-0
                min-h-[450px]   /* <- Ajusta esta altura a tu preferencia */
              "
            >
              <img
                src={proyecto.image}
                alt={proyecto.title}
                className="w-4/5 h-2/5 mx-auto rounded-lg shadow-2xl shadow-black"
              />
              <h1 className="text-xl font-bold py-4 text-[#abb7aa]">
                {proyecto.title}
              </h1>
               {/* Links unificados en color y estilo */}
               <p className="mb-2 flex items-center justify-center space-x-4">
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 border border-[#abb7aa] text-[#abb7aa] rounded transition-colors hover:bg-[#abb7aa] hover:text-black"
                >
                  {t.verProyecto}
                </a>
                <a
                  href={proyecto.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 border border-[#abb7aa] text-[#abb7aa] rounded transition-colors hover:bg-[#abb7aa] hover:text-black"
                >
                  {t.verCodigo}
                </a>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {proyecto.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center rounded-full border-2 px-2 py-1 gap-1 bg-white/20"
                  >
                    <img
                      src={`/icons/${lang.icon}`}
                      alt={lang.name}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-white">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Texto descriptivo */}
      <div className="md:w-1/2 flex flex-col justify-center text-center space-y-4 mt-6 md:mt-0">
        <h1 className="text-6xl font-bold text-[#899388]">{t.titulo}</h1>
        <p className="text-xl text-white max-w-md mx-auto">
          {t.descripcion}
        </p>
      </div>
    </section>
  );
}
