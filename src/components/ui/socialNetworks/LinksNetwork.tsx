import { ImGithub } from "react-icons/im";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tomigonzalez",
    icon: <SlSocialLinkedin aria-hidden="true" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/tomigonzalez",
    icon: <ImGithub aria-hidden="true" />,
  },
  {
    label: "Figma",
    href: "https://www.figma.com/@tomigonnzalez",
    icon: <SiFigma aria-hidden="true" />,
  },
  {
    label: "CV",
    href: "https://drive.google.com/file/d/1K0BycTyO2tdljKP0SQ6PiuEHr5i6uxF-/view?usp=sharing",
    icon: <IoDocumentAttachOutline aria-hidden="true" />,
  },
];

export default function LinksNetwork() {
  return (
    <div className="relative z-10 mt-2 mb-2 flex items-center justify-center gap-3 px-5 sm:gap-[3.5rem]">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className="group flex flex-col items-center gap-1.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2/70 text-lg text-muted transition-all duration-200 ease-smooth group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent group-hover:shadow-glow-soft">
            {link.icon}
          </span>
          <span className="text-xs font-medium text-faint transition-colors duration-200 group-hover:text-muted">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}
