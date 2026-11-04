import type { ReactNode } from "react";
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
import { FaGithub } from "react-icons/fa6";
import SkillItem from "./SkillItem";
import PageHeader from "../../components/ui/pageHeader/PageHeader";

type Skill = {
  label: string;
  icon: ReactNode;
};

type SkillGroup = {
  title: string;
  items: Skill[];
};

const groups: SkillGroup[] = [
  {
    title: "Front end",
    items: [
      { icon: <FaHtml5 aria-hidden="true" />, label: "HTML" },
      { icon: <FaCss3 aria-hidden="true" />, label: "CSS" },
      { icon: <FaJsSquare aria-hidden="true" />, label: "JavaScript" },
      { icon: <FaReact aria-hidden="true" />, label: "React" },
      { icon: <TbBrandNextjs aria-hidden="true" />, label: "Next.js" },
      { icon: <RiTailwindCssFill aria-hidden="true" />, label: "Tailwind" },
      { icon: <BiLogoTypescript aria-hidden="true" />, label: "TypeScript" },
      { icon: <FaAngular aria-hidden="true" />, label: "Angular" },
      { icon: <FaBootstrap aria-hidden="true" />, label: "Bootstrap" },
      { icon: <FaWordpress aria-hidden="true" />, label: "WordPress" },
    ],
  },
  {
    title: "Back end",
    items: [
      { icon: <FaNodeJs aria-hidden="true" />, label: "Node.js" },
      { icon: <SiExpress aria-hidden="true" />, label: "Express" },
      { icon: <IoLogoFirebase aria-hidden="true" />, label: "Firebase" },
      { icon: <FaPhp aria-hidden="true" />, label: "PHP" },
      { icon: <FaJava aria-hidden="true" />, label: "Java" },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { icon: <BiLogoMongodb aria-hidden="true" />, label: "MongoDB" },
      { icon: <SiMysql aria-hidden="true" />, label: "MySQL" },
      { icon: <SiSqlite aria-hidden="true" />, label: "SQLite" },
      { icon: <IoLogoFirebase aria-hidden="true" />, label: "Firestore" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { icon: <SiVisualstudiocode aria-hidden="true" />, label: "VS Code" },
      { icon: <SiPostman aria-hidden="true" />, label: "Postman" },
      { icon: <SiRedux aria-hidden="true" />, label: "Redux" },
      { icon: <SiAxios aria-hidden="true" />, label: "Axios" },
      { icon: <SiAdobephotoshop aria-hidden="true" />, label: "Photoshop" },
      { icon: <FaFigma aria-hidden="true" />, label: "Figma" },
      { icon: <FaDocker aria-hidden="true" />, label: "Docker" },
      { icon: <FaGithub aria-hidden="true" />, label: "GitHub" },
    ],
  },
];

const Habilidades = () => {
  const total = groups.reduce((count, group) => count + group.items.length, 0);

  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <PageHeader
        title="Habilidades"
        meta={`${total} tecnologías`}
        level={1}
      />

      <div className="min-h-0 min-w-0 flex-1 space-y-5 overflow-y-auto pr-1">
        {groups.map((group, index) => (
          <section
            key={group.title}
            className={index > 0 ? "border-t border-line/70 pt-5" : undefined}
          >
            <div className="mb-2.5 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg leading-none tracking-tight text-fg">
                {group.title}
              </h3>
              <span className="text-[0.7rem] text-faint">
                {group.items.length}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-6">
              {group.items.map((skill) => (
                <SkillItem
                  key={skill.label}
                  icon={skill.icon}
                  label={skill.label}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
