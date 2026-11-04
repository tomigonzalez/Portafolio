import { Link } from "react-router-dom";

const SobreMi = () => {
  return (
    <div className="flex h-full w-full min-w-0 flex-col overflow-y-auto pr-1">
      <div className="max-w-[62ch]">
        <p className="text-pretty text-base leading-relaxed text-fg sm:text-lg">
          Desarrollador <strong className="font-semibold text-fg">Full-Stack especializado en Front-End</strong>. 
          Desarrollo la arquitectura Back-End de mis proyectos e integro soluciones con 
          <strong className="font-semibold text-fg"> Inteligencia Artificial</strong> mediante agentes y flujos automatizados.
        </p>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
          <p>
            En la etapa final de la{" "}
            <strong className="font-semibold text-fg">
              Tecnicatura Universitaria en Sistemas Electrónicos Industriales Inteligentes (TUSEII)
            </strong>
            , donde sumo conocimientos en PLC, SCADA y automatización industrial.
          </p>
          <p>
            Apasionado por crear productos funcionales, escalables y en constante búsqueda de desafíos de alto impacto técnico.
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line/70 pt-4">
        <Link
          to="/projectos"
          className="group inline-flex items-center gap-2 rounded-lg text-sm font-medium text-accent transition-colors duration-200 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
        >
          Ver proyectos
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
        <span className="text-xs text-faint">
          Casos, stack y repositorios.
        </span>
      </div>
    </div>
  );
};

export default SobreMi;