import { ImGithub } from "react-icons/im";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export default function LinksNetwork() {
  return (
    <div className="w-full flex flex-row justify-evenly mt-6 mb-4 ">
      <div className="flex flex-col text-center animate-fade-down">
        <a
          href="https://www.linkedin.com/in/tomigonzalez"
          target="_blank"
          className=" self-center text-2xl sm:text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste"
        >
          <SlSocialLinkedin />
        </a>
        <p className="xl:text-[0.8rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem] text-[0.5rem] font-semibold text-slate-300">
          Likedin
        </p>
      </div>

      <div className="flex flex-col text-center animate-fade-down animate-delay-[150ms] ">
        <a
          href="https://github.com/tomigonzalez"
          className="self-center text-2xl sm:text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste "
          target="_blank"
        >
          <ImGithub />
        </a>
        <p className="xl:text-[0.8rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem] text-[0.5rem] font-semibold text-slate-300">
          Git hub
        </p>
      </div>
      <div className="flex flex-col text-center animate-fade-down animate-delay-[250ms]">
        <a
          href="https://www.figma.com/@tomigonnzalez"
          className="self-center text-2xl sm:text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste "
          target="_blank"
        >
          <SiFigma />
        </a>
        <p className="xl:text-[0.8rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem] text-[0.5rem] font-semibold text-slate-300">
          Figma
        </p>
      </div>
      <div className="flex flex-col text-center animate-fade-down animate-delay-[350ms]">
        <a
          href="https://drive.google.com/file/d/1pjINSIHgNrpw79h3wTdOCAdYTsZs9pFw/view?usp=drive_link"
          className="self-center text-2xl sm:text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste "
          target="_blank"
        >
          <IoDocumentAttachOutline />
        </a>
        <p className="xl:text-[0.8rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem] text-[0.5rem] font-semibold text-slate-300">
          {" "}
          Cv
        </p>
      </div>
    </div>
  );
}
