import ChipTabs from "./menu";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 flex w-full min-w-0 justify-center px-4 sm:px-6">
      <nav
        aria-label="Navegación principal"
        className="flex w-full min-w-0 items-center rounded-xl border border-line/80 bg-surface-2/80 p-2 backdrop-blur"
      >
        <ChipTabs />
      </nav>
    </header>
  );
}
