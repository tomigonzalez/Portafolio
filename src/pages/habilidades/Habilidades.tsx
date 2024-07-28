import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaVuejs,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiAxios,
  SiExpress,
  SiMysql,
  SiPostman,
  SiRedux,
  SiSqlite,
  SiVisualstudiocode,
} from "react-icons/si";

const Habilidades = () => {
  return (
    <div className="w-4/5 h-56 overflow-y-auto flex flex-col gap-4 pb-1  animate-fade">
      <div className="flex flex-col gap-2">
        <h2 className="text-slate-300">Front End</h2>
        <div className="flex flex-row w-full gap-2 text-3xl">
          <FaHtml5 className="icon" />
          <FaCss3 className="icon" />
          <FaJsSquare className="icon" />
          <FaReact className="icon" />
          <FaVuejs className="icon" />
          <RiTailwindCssFill className="icon" />
          <BiLogoTypescript className="icon" />
          <FaAngular className="icon" />
          <FaBootstrap className="icon" />
          <FaWordpress className="icon" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-slate-300">Back End</h2>
        <div className="flex flex-row w-full gap-2 text-3xl">
          <FaNodeJs className="icon" />
          <SiExpress className="icon" />
          <IoLogoFirebase className="icon" />
          <FaPhp className="icon" />
          <FaJava className="icon" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-slate-300">Database</h2>
        <div className="flex flex-row w-full gap-2 text-3xl">
          <BiLogoMongodb className="icon" />
          <SiMysql className="icon" />
          <SiSqlite className="icon" />
          <IoLogoFirebase className="icon" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-slate-300">Herramientas</h2>
        <div className="flex flex-row w-full gap-2 text-3xl">
          <SiVisualstudiocode className="icon" />
          <SiPostman className="icon" />
          <SiRedux className="icon" />
          <SiAxios className="icon" />
          <SiAdobephotoshop className="icon" />
          <FaFigma className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
