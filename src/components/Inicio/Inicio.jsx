export default function Inicio({ t }) {
  return (
    <section className="h-[100vh] relative">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/RodriInicio.webp')" }}
      ></div>

      {/* Versión para pantallas grandes (>= md) */}
      <div className="hidden md:block h-full">
        <div className="my-auto sticky top-28 h-full flex flex-col justify-center">
          <div className="flex justify-between mx-6">
            <h1 className="text-9xl font-bold text-[#899388]">RODRIGO</h1>
            <div>
              <p className="text-xl text-[#777777]">{t.rol}</p>
              <p className="text-xl text-[#777777]">
                {t.descripcion}
              </p>
            </div>
          </div>
          <h1 className="text-9xl font-bold text-[#899388] text-end mx-12">
            BESSONE
          </h1>
        </div>
      </div>

      {/* Versión para pantallas chicas (< md) */}
      <div className="md:hidden absolute bottom-0 left-0 w-full p-4 flex flex-col items-center justify-center space-y-2 text-center">
        <h1 className="text-5xl font-bold text-[#899388]">RODRIGO BESSONE</h1>
        <p className="text-lg text-[#777777]">{t.rol}</p>
        <p className="text-lg text-[#777777]">{t.descripcion}</p>
      </div>
    </section>
  );
}
