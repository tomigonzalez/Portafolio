type SkillItemProps = {
  icon: React.ReactNode;
  label: string;
};

const SkillItem = ({ icon, label }: SkillItemProps) => {
  return (
    <div className="flex flex-col items-center gap-1 text-slate-300 transition-all duration-200 hover:text-white hover:scale-105">
      <div className="text-3xl">{icon}</div>
      <span className="text-[0.65rem] tracking-wide opacity-80">{label}</span>
    </div>
  );
};

export default SkillItem;
