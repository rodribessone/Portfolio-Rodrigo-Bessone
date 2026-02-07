import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import CopiarCorreo from './CopiarMail';

export default function Contacto({ t }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 pt-10 px-6 sm:px-10 text-white">
      <h1 className="text-4xl sm:text-6xl font-bold text-[#899388] text-center mb-8">
        {t.titulo}
      </h1>
      <div className="flex flex-col md:flex-row flex-grow gap-8">
        {/* Sección de redes y contacto */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl sm:text-4xl text-center text-[#899388]">
            {t.redes}
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/rodribessone"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={faSquareGithub} className="text-4xl sm:text-6xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-bessone/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-4xl sm:text-6xl" />
            </a>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <p className="rounded border-2 border-[#899388] text-center text-lg sm:text-xl px-4 py-2">
                rodrigo-bessone@hotmail.com
              </p>
              <div className="relative flex items-center justify-center">
                <a
                  href="mailto:rodrigo-bessone@hotmail.com"
                  className="px-4 py-2 bg-[#899388] text-white rounded flex items-center gap-2 hover:bg-[#abb7aa] focus:outline-none"
                  onMouseEnter={(e) =>
                    e.currentTarget.nextSibling.classList.remove("opacity-0")
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.nextSibling.classList.add("opacity-0")
                  }
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </a>
                {/* Tooltip */}
                <div
                  className="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-700 rounded opacity-0 transition-opacity duration-200"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {t.emailTooltip}
                </div>
                <CopiarCorreo />
              </div>
            </div>
          </div>
        </div>
        {/* Sección alternativa a la foto (ilustración) */}
        <div className="md:w-1/2 flex items-center justify-center">
          {/* Reemplaza la imagen por una ilustración o tu logo */}
          <img src="/logo.png" alt="Ilustración" className="w-2/3 sm:w-1/2" />
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 px-4">
        <p className="text-sm">&copy; 2026</p>
        <a className="text-sm cursor-pointer hover:underline">{t.footer}</a>
      </div>
    </div>
  );
}
