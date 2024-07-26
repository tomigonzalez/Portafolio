import { ImGithub } from "react-icons/im";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export default function LinksNetwork() {
  return (
    <div className="w-full flex flex-row justify-evenly mt-6 mb-4 ">
      <a
        href="www.linkedin.com/in/tomigonzalez"
        target="_blank"
        className="animate-fade-down text-2xl sm:text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste"
      >
        <SlSocialLinkedin />
      </a>
      <a
        href="https://github.com/tomigonzalez"
        className="animate-fade-down animate-delay-[150ms] text-2xl sm:text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste "
        target="_blank"
      >
        <ImGithub />
      </a>
      <a
        href="https://www.figma.com/@tomigonnzalez"
        className="animate-fade-down animate-delay-[250ms] text-2xl sm:text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste "
        target="_blank"
      >
        <SiFigma />
      </a>

      <a
        href="https://drive.google.com/file/d/1pjINSIHgNrpw79h3wTdOCAdYTsZs9pFw/view?usp=drive_link"
        className="animate-fade-down animate-delay-[350ms] text-2xl sm:text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste "
        target="_blank"
      >
        <IoDocumentAttachOutline />
      </a>
    </div>
  );
}
