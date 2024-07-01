import React from "react";
import { Outlet } from "react-router-dom";

const LayoutSecundario: React.FC = () => {
  return (
    <div className="h-5/6  xl:w-2/4 lg:w-4/6 md:w-9/12 sm:w-9/12 w-11/12 flex flex-col items-center  justify-evenly rounded-3xl bg-secondary  text-white ">
      <div className=" w-11/12 flex flex-row justify-between hover:text-celeste">
        <a href="/">Volver</a>
      </div>
      <section className="h-3/4 w-11/12 flex justify-center  font-ubuntu font-semibold">
        <Outlet />
      </section>
    </div>
  );
};

export default LayoutSecundario;
