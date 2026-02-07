import './App.css'
import Inicio from './components/Inicio/Inicio'
import Proyectos from './components/Proyectos/Proyectos'
import Skills from './components/Skills/Skills'
import Contacto from './components/Contacto/Contacto'
import Header from "./components/Header/Header"
import ReactGA from "react-ga4"
import { useEffect, useState } from 'react'
import { translations } from './data/translations'

ReactGA.initialize("G-04YSTZ9G0M")


function App() {
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  return (
    <div className='w-full flex flex-col relative '>
      <Header t={t.nav} language={language} toggleLanguage={toggleLanguage} />
      {/* Envolver cada sección con un div que tenga el id correspondiente */}
      <div id="inicio">
        <Inicio t={t.inicio} />
      </div>
      <div id="proyectos">
        <Proyectos language={language} />
      </div>
      <div id="skills">
        <Skills language={language} />
      </div>
      <div id="contacto">
        <Contacto t={t.contacto} />
      </div>
    </div>
  )
}

export default App
