type TechBadgeProps = {
  label: string;
};

const TechBadge = ({ label }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-md border border-accent/20 bg-accent/10 px-1.5 py-0.5 text-[0.7rem] font-medium leading-none text-accent">
      {label}
    </span>
  );
};

export default TechBadge;
