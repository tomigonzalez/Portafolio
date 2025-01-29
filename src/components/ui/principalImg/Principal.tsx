import { RiVerifiedBadgeFill } from "react-icons/ri";
import useGithubData from "../../../services/github";

export default function Principal() {
  const { repos, loading, error } = useGithubData("tomigonzalez");

  return (
    <>
      <div className="absolute top-[-5rem] flex flex-row h-40 w-full justify-between items-center">
        <div className="m-10 mt-32">
          {loading ? (
            <p>Cargando repositorios...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <p>Repositorios: {repos ? repos.length : 0}</p> // Important null check!
          )}
        </div>
        <div className="h-full w-40 rounded-3xl border-secondary border-4 overflow-hidden">
          <img
            src="este.png"
            alt="foto de perfil"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="m-10 mt-32">
          <p>Commits: 56</p>
        </div>
      </div>
      <div className="mt-10 flex h-12 w-full items-center justify-between  sm:pl-10 sm:pr-10 pl-2 pr-2 font-ubuntu font-semibold">
        <div className="text-xs sm:text-xs font-ubuntu hidden sm:flex"></div>
        <div className="text-xs sm:text-xs font-ubuntu hidden sm:flex"></div>
      </div>
      <div className="flex w-full flex-col text-center  font-ubuntu font-semibold">
        <div className="flex w-full flex-row gap-2 items-center justify-center ">
          <h1 className="text-lg">Gonzalez Correa Tomas</h1>
          <RiVerifiedBadgeFill className="text-celeste text-xl" />
        </div>
        <h2 className={` text-[0.6rem] antialiased `}>
          DESARROLLADOR FRONT END / BACK END
        </h2>
      </div>
    </>
  );
}
