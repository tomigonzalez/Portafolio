import { RiVerifiedBadgeFill } from "react-icons/ri";
import useGithubData from "../../../services/github";
import { RepoCountSkeleton } from "../skeleton/RepoCountSkeleton";

export default function Principal() {
  const { repoCount, commitCount, loading, error } =
    useGithubData("tomigonzalez");

  return (
    <>
      <div className="absolute top-[-5rem] flex flex-row h-40 w-full justify-between items-center">
        <div className="m-10 mt-32 sm:w-1/5 w-[10%] flex flex-col items-center">
          {loading ? (
            <RepoCountSkeleton />
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <p className="sm:text-xl text-lg sm:font-bold font-semibold">
              {repoCount}{" "}
            </p> // Important null check!
          )}
          <p className="font-medium sm:text-sm text-[0.7rem]">REPOSITORIOS</p>
        </div>
        <div className="h-full w-40 rounded-3xl border-secondary border-4 overflow-hidden">
          <img
            src="este.png"
            alt="foto de perfil"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="m-10 mt-32 sm:w-1/5 w-[10%] flex flex-col items-center">
          {loading ? (
            <RepoCountSkeleton />
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <p className="sm:text-xl text-lg sm:font-bold font-semibold">
              {commitCount}{" "}
            </p> // Important null check!
          )}
          <p className="font-medium sm:text-sm text-[0.7rem]">COMMITS</p>
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
