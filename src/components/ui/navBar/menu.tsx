import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const tabs = [
  { name: "SOBRE MI", path: "/" },
  { name: "EXPERIENCIA", path: "/experiencia" },
  { name: "HABILIDADES", path: "/habilidades" },
  { name: "PROYECTOS", path: "/projectos" },
];

const ChipTabs: React.FC = () => {
  const location = useLocation();
  const [selected, setSelected] = useState<string>(location.pathname);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <div className="h-full w-full  justify-between flex items-center font-ubuntu font-bold">
      {tabs.map((tab) => (
        <Chip
          text={tab.name}
          path={tab.path}
          selected={selected === tab.path}
          setSelected={setSelected}
          key={tab.path}
        />
      ))}
      <div className="dropdown">
        <button className=" xl:text-[0.8rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem] text-[0.6rem] font-ubuntu font-bold dropbtn rounded-md  text-slate-300 hover:text-celeste  hover:bg-hov">
          MAS
        </button>
        <div className="dropdown-content  bg-tertiary  font-ubuntu font-bold">
          <a
            href="estudios"
            className="text-slate-300 hover:text-celeste hover:bg-hov font-bold"
          >
            ESTUDIOS
          </a>
          <a
            href="contacto"
            className="text-slate-300 hover:text-celeste hover:bg-hov font-bold"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </div>
  );
};

interface ChipProps {
  text: string;
  path: string;
  selected: boolean;
  setSelected: (path: string) => void;
}

const Chip: React.FC<ChipProps> = ({ text, path, selected, setSelected }) => {
  return (
    <>
      <Link to={path} className="h-full content-center">
        <button
          onClick={() => setSelected(path)}
          className={`h-full ${
            selected
              ? "text-celeste"
              : "text-slate-300 hover:text-slate-200 hover:bg-hov"
          } flex items-center transition-colors px-2.5 py-0.5 rounded-md relative`}
        >
          <span className="relative z-10 xl:text-[0.8rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem] text-[0.6rem]">
            {text}
          </span>
          {selected && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-hov to-hov rounded-md"
            ></motion.span>
          )}
        </button>
      </Link>
    </>
  );
};

export default ChipTabs;
