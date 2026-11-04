import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Sobre mí", path: "/" },
  { name: "Experiencia", path: "/experiencia" },
  { name: "Estudios", path: "/estudios" },
  { name: "Proyectos", path: "/projectos" },
];

const ChipTabs: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex w-full items-center justify-between gap-1">
      <div className="nav-scroll flex min-w-0 items-center gap-0.5 overflow-x-auto">
        {tabs.map((tab) => (
          <Chip
            key={tab.path}
            text={tab.name}
            path={tab.path}
            selected={pathname === tab.path}
          />
        ))}
      </div>
      <MoreMenu />
    </div>
  );
};

interface ChipProps {
  text: string;
  path: string;
  selected: boolean;
}

const Chip: React.FC<ChipProps> = ({ text, path, selected }) => {
  return (
    <Link
      to={path}
      aria-current={selected ? "page" : undefined}
      className={`relative flex shrink-0 items-center rounded-lg px-1.5 py-1.5 text-xs font-medium transition-colors duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:px-2.5 sm:text-[0.8rem] ${
        selected
          ? "text-fg"
          : "text-muted hover:bg-surface-3/70 hover:text-fg"
      }`}
    >
      {selected && (
        <motion.span
          layoutId="nav-pill"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="absolute inset-0 rounded-lg border border-line-strong bg-surface-3"
        />
      )}
      <span className="relative z-10 whitespace-nowrap">{text}</span>
    </Link>
  );
};

function MoreMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative shrink-0" ref={containerRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="more-menu"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:bg-surface-3 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:px-2.5 sm:text-[0.8rem]"
      >
        Más
        <FiChevronDown
          aria-hidden="true"
          className={`text-xs transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id="more-menu"
          className="absolute right-0 top-full z-30 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-line bg-surface-2 p-1 shadow-card"
        >
          <Link
            to="/habilidades"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-xs font-medium text-muted transition-colors duration-200 hover:bg-surface-3 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:text-sm"
          >
            Habilidades
          </Link>
        </div>
      )}
    </div>
  );
}

export default ChipTabs;
