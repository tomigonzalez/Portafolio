import React from "react";

interface LayoutProps {
  children: React.ReactNode; //significa que puede recibir y renderizar una variedad de contenido.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page-canvas relative flex min-h-screen w-full items-center justify-center overflow-x-hidden px-4 py-16 text-fg sm:py-20">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Saltar al contenido
      </a>
      {children}
    </div>
  );
};

export default Layout;
