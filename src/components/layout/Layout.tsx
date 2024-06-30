import React from "react";

interface LayoutProps {
  children: React.ReactNode; //significa que puede recibir y renderizar una variedad de contenido.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen justify-center items-center bg-primary text-white flex ">
      {children}
    </div>
  );
};

export default Layout;
