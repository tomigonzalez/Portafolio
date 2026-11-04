type PageHeaderProps = {
  title: string;
  meta?: string;
  level?: 1 | 2;
};

const PageHeader = ({ title, meta, level = 2 }: PageHeaderProps) => {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className="mb-3 flex items-baseline justify-between gap-3">
      <Heading className="font-display text-2xl leading-none tracking-tight text-fg sm:text-3xl">
        {title}
      </Heading>
      {meta && <span className="text-xs text-faint">{meta}</span>}
    </div>
  );
};

export default PageHeader;
