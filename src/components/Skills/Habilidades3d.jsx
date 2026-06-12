import React, { useEffect } from "react";

const Habilidades3D = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.goat1000.com/tagcanvas.min.js";
    script.async = true;
    script.onload = () => {
      if (window.TagCanvas) {
        window.TagCanvas.Start("habilidadesCanvas", "habilidadesTags", {
          textColour: "#ffffff", // Color del texto
          outlineColour: "#00000000", // Color del contorno
          reverse: true, // Reversa la rotación
          depth: 0.8, // Profundidad de 3D
          maxSpeed: 0.05, // Velocidad máxima
          wheelZoom: false, // Evitar zoom con el mouse
          textHeight: 15, // Tamaño del texto en px
          imageScale: 0.3, // Escala de las imágenes
          initial: [0.1, 0.2], // Posición inicial de rotación
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="text-center">
      {/* Etiquetas para las habilidades */}
      <div id="habilidadesTags" className="hidden">
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <a href="#" className="flex flex-col items-center">
              <img src="/icons/html-icon.png" alt="HTML" className="w-10 h-10 mb-1" />
              <span className="text-sm text-white">HTML</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center">
              <img src="/icons/css-icon.png" alt="CSS" className="w-10 h-10 mb-1" />
              <span className="text-sm text-white">CSS</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center">
              <img src="/icons/js-icon.png" alt="JavaScript" className="w-10 h-10 mb-1" />
              <span className="text-sm text-white">JavaScript</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center">
              <img src="/icons/react-icon.png" alt="React" className="w-10 h-10 mb-1" />
              <span className="text-sm text-white">React</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center">
              <img src="/icons/tailwind-css-icon.png" alt="Tailwind" className="w-10 h-10 mb-1" />
              <span className="text-sm text-white">Tailwind</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center">
              <img src="/icons/mongodb-icon.png" alt="MongoDB" className="w-10 h-10 mb-1" />
              <span className="text-sm text-white">MongoDB</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center">
              <img src="/icons/node-js-icon.png" alt="Node.js" className="w-10 h-10 mb-1" />
              <span className="text-sm text-white">Node.js</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center">
              <img src="/icons/python-icon.png" alt="Python" className="w-10 h-10 mb-1" />
              <span className="text-sm text-white">Python</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Canvas donde se renderiza la esfera */}
      <div className="mx-auto w-full max-w-[500px] aspect-square">
        <canvas
          id="habilidadesCanvas"
          width="500"
          height="500"
          className="w-full h-full"
        ></canvas>
      </div>
    </div>
  );
};

export default Habilidades3D;
