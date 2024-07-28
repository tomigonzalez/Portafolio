import React from "react";
import { Outlet } from "react-router-dom";
import Principal from "../ui/principalImg/Principal";
import NavBar from "../ui/navBar/navBar";
import LinksNetwork from "../ui/socialNetworks/LinksNetwork";

const LayoutPrimario: React.FC = () => {
  return (
    <div className="animate-fade h-5/6  xl:w-2/4 lg:w-4/6 md:w-9/12 sm:w-9/12 w-11/12 mt-16 absolute rounded-3xl bg-secondary  text-white ">
      <Principal></Principal>
      <LinksNetwork></LinksNetwork>
      <NavBar></NavBar>
      <section className="w-full flex mt-4 flex-col items-center gap-4  font-ubuntu sm:text-[1rem] sm:font-normal text-[0.9rem]">
        <Outlet />
      </section>
    </div>
  );
};

export default LayoutPrimario;
