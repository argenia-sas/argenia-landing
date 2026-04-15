import Image from "next/image";
import minipc from "@/public/assets/minipc.png";

export default function AIBoxPage() {
  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <div className="bg-black text-white font-sans selection:bg-blue-500">
        {/* Navbar */}
        <nav
          className="fixed w-full z-50 py-4 px-6 flex justify-between items-center"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              A
            </div>
            <span className="text-xl font-bold tracking-tight">
              ARGENIA{" "}
              <span className="text-blue-500 font-light">AI-BOX</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#solucion" className="hover:text-blue-400 transition">
              La Solución
            </a>
            <a href="#caracteristicas" className="hover:text-blue-400 transition">
              Funciones
            </a>
            <a href="#seguridad" className="hover:text-blue-400 transition">
              Privacidad
            </a>
          </div>
          <a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Pedir Demo
          </a>
        </nav>

        {/* Hero */}
        <section
          className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at top right, #1e293b, #0f172a, #000000)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
            }}
          />

          <div className="z-10 text-center max-w-4xl">
            <span className="inline-block px-4 py-1 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6 bg-blue-500/10">
              Soberanía Digital para Empresas
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Tu propia IA. <br />
              <span
                style={{
                  background: "linear-gradient(to right, #60a5fa, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-black"
              >
                Sin que nadie vea tus datos.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              AI-Box es el servidor todo-en-uno que lleva la potencia de la
              Inteligencia Artificial a tu red local. Sin nubes, sin
              suscripciones y sin filtraciones.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20"
              >
                Agendar Demo de 30 min
              </a>
              <a
                href="#solucion"
                className="hover:bg-white/10 px-10 py-4 rounded-xl font-bold text-lg transition-all"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Ver Hardware
              </a>
            </div>
          </div>

          <div className="mt-16 z-10 w-full max-w-5xl px-4">
            <div
              className="rounded-2xl p-4 border-blue-500/20 shadow-2xl shadow-blue-500/10"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="relative bg-black/50 rounded-xl h-64 md:h-96 overflow-hidden">
                <Image
                  src={minipc}
                  alt="Argenia AI-Box Mini PC"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* La Solución */}
        <section id="solucion" className="py-24 px-6 bg-[#050505]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Cada vez que tu equipo usa ChatGPT,{" "}
                <span className="text-red-500">regalás tus datos.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-red-500 text-2xl">
                    <i className="fas fa-exclamation-triangle" />
                  </div>
                  <p className="text-gray-400">
                    Contratos, estrategias y datos de clientes quedan en
                    servidores externos de OpenAI o Microsoft.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="text-red-500 text-2xl">
                    <i className="fas fa-exclamation-triangle" />
                  </div>
                  <p className="text-gray-400">
                    Dependés de una conexión a internet y de pagos mensuales en
                    dólares para ser productivo.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="p-10 rounded-3xl border-l-4 border-l-blue-500"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 italic">
                AI-Box lo resuelve:
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Instalamos un nodo físico en tu oficina. Todo el procesamiento
                de IA ocurre dentro de tu cableado. Tus documentos sensibles
                jamás salen a internet.
              </p>
            </div>
          </div>
        </section>

        {/* Características */}
        <section id="caracteristicas" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Todo lo que necesitás, en una caja.
              </h2>
              <p className="text-gray-400">
                Infraestructura local con herramientas de nivel mundial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "fa-comment-dots",
                  title: "Chat Inteligente",
                  desc: "Redactá, analizá y creá contenido con modelos Llama 3 o similares, sin salir de tu red.",
                },
                {
                  icon: "fa-file-pdf",
                  title: "Consulta de Documentos",
                  desc: 'Subí tus contratos o manuales y "chateá" con ellos de forma 100% privada.',
                },
                {
                  icon: "fa-language",
                  title: "Traducción Offline",
                  desc: "Traducción de alta calidad sin rastreo ni dependencia de servicios en la nube.",
                },
                {
                  icon: "fa-cloud",
                  title: "Nube Privada",
                  desc: "Almacenamiento Nextcloud integrado para compartir archivos en equipo con seguridad total.",
                },
                {
                  icon: "fa-lock",
                  title: "VPN Integrada",
                  desc: "Acceso remoto seguro para que tu equipo use la IA desde cualquier lugar.",
                },
                {
                  icon: "fa-search",
                  title: "Búsqueda Anónima",
                  desc: "Motor de búsqueda interno sin rastreadores ni publicidad comercial.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-8 rounded-2xl hover:border-blue-500/50 transition-all group"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <i className={`fas ${feature.icon}`} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / Contacto */}
        <footer
          id="contacto"
          className="bg-zinc-950 py-24 px-6 border-t border-white/5"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              ¿Tu empresa está lista para la IA privada?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Agendá una demostración técnica y sacate todas las dudas.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
              <a
                href="https://wa.me/5493416559834"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-2xl hover:text-green-400 transition"
              >
                <i className="fab fa-whatsapp" /> +54 9 341 6559834
              </a>
              <a
                href="mailto:argenia.sas@gmail.com"
                className="flex items-center gap-3 text-2xl hover:text-blue-400 transition"
              >
                <i className="far fa-envelope" /> argenia.sas@gmail.com
              </a>
            </div>

            <div className="pt-10 border-t border-white/5 text-gray-600 text-sm">
              <p>
                © 2026 - ARGENIA SAS | Granadero Baigorria, Santa Fe, Argentina
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
