import type { ReactNode } from "react";

type SkillItemProps = {
  icon: ReactNode;
  label: string;
};

const SkillItem = ({ icon, label }: SkillItemProps) => {
  return (
    <div className="group flex flex-col items-center gap-1.5 rounded-xl border border-line/70 bg-surface-2/50 px-2 py-3 text-muted transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-2 hover:text-fg hover:shadow-glow-soft">
      <div className="text-2xl text-accent/80 transition-colors duration-200 group-hover:text-accent">
        {icon}
      </div>
      <span className="text-center text-[0.7rem] font-medium leading-none">
        {label}
      </span>
    </div>
  );
};

export default SkillItem;
