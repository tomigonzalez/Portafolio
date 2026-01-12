import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaWordpress,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiExpress,
  SiMysql,
  SiSqlite,
  SiVisualstudiocode,
  SiPostman,
  SiRedux,
  SiAxios,
  SiAdobephotoshop,
} from "react-icons/si";
import SkillItem from "./SkillItem";
import { FaGithub } from "react-icons/fa6";

const Habilidades = () => {
  return (
    <div className="w-4/5 h-56 overflow-y-auto overflow-hidden flex flex-col gap-6 pb-2 animate-fade">
      {/* Front End */}
      <section className="flex flex-col gap-3">
        <h2 className="text-slate-300 text-sm tracking-wide">Front End</h2>
        <div className="grid grid-cols-5 gap-4">
          <SkillItem icon={<FaHtml5 />} label="HTML" />
          <SkillItem icon={<FaCss3 />} label="CSS" />
          <SkillItem icon={<FaJsSquare />} label="JavaScript" />
          <SkillItem icon={<FaReact />} label="React" />
          <SkillItem icon={<TbBrandNextjs />} label="Next js" />
          <SkillItem icon={<RiTailwindCssFill />} label="Tailwind" />
          <SkillItem icon={<BiLogoTypescript />} label="TypeScript" />
          <SkillItem icon={<FaAngular />} label="Angular" />
          <SkillItem icon={<FaBootstrap />} label="Bootstrap" />
          <SkillItem icon={<FaWordpress />} label="WordPress" />
        </div>
      </section>

      {/* Back End */}
      <section className="flex flex-col gap-3">
        <h2 className="text-slate-300 text-sm tracking-wide">Back End</h2>
        <div className="grid grid-cols-5 gap-4">
          <SkillItem icon={<FaNodeJs />} label="Node.js" />
          <SkillItem icon={<SiExpress />} label="Express" />
          <SkillItem icon={<IoLogoFirebase />} label="Firebase" />
          <SkillItem icon={<FaPhp />} label="PHP" />
          <SkillItem icon={<FaJava />} label="Java" />
        </div>
      </section>

      {/* Database */}
      <section className="flex flex-col gap-3">
        <h2 className="text-slate-300 text-sm tracking-wide">Database</h2>
        <div className="grid grid-cols-5 gap-4">
          <SkillItem icon={<BiLogoMongodb />} label="MongoDB" />
          <SkillItem icon={<SiMysql />} label="MySQL" />
          <SkillItem icon={<SiSqlite />} label="SQLite" />
          <SkillItem icon={<IoLogoFirebase />} label="Firestore" />
        </div>
      </section>

      {/* Herramientas */}
      <section className="flex flex-col gap-3">
        <h2 className="text-slate-300 text-sm tracking-wide">Herramientas</h2>
        <div className="grid grid-cols-5 gap-4">
          <SkillItem icon={<SiVisualstudiocode />} label="VS Code" />
          <SkillItem icon={<SiPostman />} label="Postman" />
          <SkillItem icon={<SiRedux />} label="Redux" />
          <SkillItem icon={<SiAxios />} label="Axios" />
          <SkillItem icon={<SiAdobephotoshop />} label="Photoshop" />
          <SkillItem icon={<FaFigma />} label="Figma" />
          <SkillItem icon={<FaDocker />} label="Docker" />
          <SkillItem icon={<FaGithub />} label="Git Hub" />
        </div>
      </section>
    </div>
  );
};

export default Habilidades;
