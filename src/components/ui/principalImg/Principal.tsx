import { RiVerifiedBadgeFill } from "react-icons/ri";
import useGithubData from "../../../services/github";
import { RepoCountSkeleton } from "../skeleton/RepoCountSkeleton";

type StatProps = {
  label: string;
  value: number;
  loading: boolean;
  error: string | null;
  className?: string;
};

function Stat({ label, value, loading, error, className = "" }: StatProps) {
  return (
    <div className={`flex w-20 flex-col items-center gap-1 ${className}`}>
      {loading ? (
        <RepoCountSkeleton />
      ) : (
        <span
          className="text-xl font-semibold tabular-nums text-fg"
          title={error ? "Métricas no disponibles" : undefined}
        >
          {error ? "—" : value}
        </span>
      )}
      <span className="text-xs font-medium text-faint">{label}</span>
    </div>
  );
}

export default function Principal() {
  const { repoCount, commitCount, loading, error } =
    useGithubData("tomigonzalez");

  return (
    <header className="relative z-10 flex flex-col items-center px-5 text-center sm:px-8">
      <div className="-mt-12 flex w-full items-end justify-center gap-6 sm:-mt-16 sm:gap-12">
        <Stat
          label="Repositorios"
          value={repoCount}
          loading={loading}
          error={error}
          className="hidden sm:flex"
        />

        <div className="relative shrink-0">
          <div
            className="absolute -inset-4 rounded-[2.25rem] bg-accent/15 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative h-28 w-28 overflow-hidden rounded-[1.75rem] border border-line-strong bg-surface-2 shadow-glow sm:h-32 sm:w-32">
            <img
              src="/este.png"
              alt="Retrato de Tomás González"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <Stat
          label="Commits"
          value={commitCount}
          loading={loading}
          error={error}
          className="hidden sm:flex"
        />
      </div>

      <div className="mt-5 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <h1 className="font-display text-[2rem] leading-[0.95] tracking-tightest text-fg sm:text-[2.7rem]">
            Tomás González
          </h1>
          <RiVerifiedBadgeFill
            className="text-lg text-accent"
            role="img"
            aria-label="Perfil verificado"
          />
        </div>
        <p className="mt-2 text-sm font-medium text-muted">
          Desarrollador front-end · Full-stack
        </p>
      </div>

      <div className="mt-4 flex items-center gap-5 sm:hidden">
        <Stat
          label="Repositorios"
          value={repoCount}
          loading={loading}
          error={error}
        />
        <span className="h-8 w-px bg-line" aria-hidden="true" />
        <Stat
          label="Commits"
          value={commitCount}
          loading={loading}
          error={error}
        />
      </div>
    </header>
  );
}
