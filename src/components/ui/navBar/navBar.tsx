import "../../../style/dropdown.css";
import ChipTabs from "./menu";

export default function NavBar() {
  return (
    <header className=" w-full sticky  flex justify-center z-10">
      <nav className="flex gap-2 relative sm:w-10/12 w-11/12 p-1 bg-tertiary rounded-xl ">
        <div className="flex w-full flex-row">
          <div className="flex w-full rounded-xl  overflow-hidden">
            <ChipTabs></ChipTabs>
          </div>
        </div>
      </nav>
    </header>
  );
}
