import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutSecundario: React.FC = () => {
  return (
    <div className="surface-card animate-fade relative flex h-[calc(100dvh-8rem)] min-h-[540px] w-full min-w-0 max-w-[780px] flex-col rounded-[28px] border border-line/80 text-fg shadow-card sm:h-[calc(100dvh-10rem)] sm:max-h-[880px]">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-8">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-lg text-sm font-medium text-muted transition-colors duration-200 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Volver
        </Link>
        <span className="text-xs text-faint">Tomás González</span>
      </div>
      <section
        id="contenido"
        className="mt-4 flex min-h-0 min-w-0 flex-1 flex-col px-4 pb-5 sm:px-6"
      >
        <Outlet />
      </section>
    </div>
  );
};

export default LayoutSecundario;
