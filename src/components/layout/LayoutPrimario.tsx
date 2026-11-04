import React from "react";
import { Outlet } from "react-router-dom";
import Principal from "../ui/principalImg/Principal";
import NavBar from "../ui/navBar/navBar";
import LinksNetwork from "../ui/socialNetworks/LinksNetwork";

const LayoutPrimario: React.FC = () => {
  return (
    <div className="surface-card animate-fade relative flex h-[calc(100dvh-8rem)] min-h-[540px] w-full min-w-0 max-w-[780px] flex-col rounded-[28px] border border-line/80 text-fg shadow-card sm:h-[calc(100dvh-10rem)] sm:max-h-[880px]">
      <Principal />
      <LinksNetwork />
      <NavBar />
      <section
        id="contenido"
        className="mt-2 flex min-h-0 min-w-0 flex-1 flex-col items-center gap-4 px-4 pb-5 font-sans text-[0.95rem] sm:px-6"
      >
        <Outlet />
      </section>
    </div>
  );
};

export default LayoutPrimario;
