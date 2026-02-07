import React from 'react';
import Habilidades3D from './Habilidades3d';
import { translations } from '../../data/translations';

export default function Skills({ language }) {
  const t = translations[language].skills;
  
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#899388] to-gray-800 p-6 md:p-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-8 md:mb-10">
          {t.titulo}
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Sección de Texto */}
          <div className="md:w-1/2 text-lg md:text-xl text-white leading-relaxed text-center md:text-left">
            <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.p2 }} />
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.p3 }} />
          </div>

          {/* Sección de Habilidades 3D */}
          <div className="md:w-1/2 flex justify-center">
            <Habilidades3D />
          </div>
        </div>
      </div>
    </section>
  );
}
