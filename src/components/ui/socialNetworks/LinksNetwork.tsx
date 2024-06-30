import { ImGithub } from "react-icons/im";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export default function LinksNetwork() {
  return (
    <div className="w-full flex flex-row justify-evenly mt-6 mb-4 ">
      <a
        href="#"
        className="text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste"
      >
        <SlSocialLinkedin />
      </a>
      <a
        href="#"
        className="text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste "
      >
        <ImGithub />
      </a>
      <a
        href="#"
        className="text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste "
      >
        <SiFigma />
      </a>

      <a
        href="#"
        className="text-3xl text-slate-300 border-tertiary border bg-tertiary hover:border-celeste p-2 rounded-md hover:text-celeste "
      >
        <IoDocumentAttachOutline />
      </a>
    </div>
  );
}
