import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import experienciaData from "../../data/experiencia";
import TechBadge from "../../components/ui/badge/TechBadge";
import PageHeader from "../../components/ui/pageHeader/PageHeader";

const Experiencia = () => {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const data = experienciaData;

  const handleOpen = (index: number) => {
    setOpenModal(index);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <PageHeader title="Experiencia" meta={`${data.length} etapas`} />

      <div className="min-h-0 min-w-0 flex-1 space-y-2.5 overflow-y-auto pr-1">
        {data.map((item, index) => {
          const techs = item.techonolgies
            .split(",")
            .map((technology) => technology.trim())
            .filter(Boolean);
          const hasSite = item.link && item.link !== "#";

          return (
            <div key={`${item.from}-${index}`}>
              <button
                type="button"
                onClick={() => handleOpen(index)}
                aria-haspopup="dialog"
                className="group relative w-full overflow-hidden rounded-2xl border border-line bg-surface-2/60 p-3.5 text-left transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:border-accent/35 hover:bg-surface-2 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:p-4"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-3 left-0 w-0.5 rounded-full bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />

                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-fg sm:text-lg">
                      {item.from}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted sm:text-sm">
                      {item.area}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-line bg-surface/60 px-2 py-0.5 text-[0.7rem] font-medium tabular-nums text-faint">
                    {item.age}
                  </span>
                </div>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {item.descrpcion}
                </p>

                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {techs.map((technology) => (
                    <TechBadge key={technology} label={technology} />
                  ))}
                </div>
              </button>

              <Modal
                backdrop="blur"
                isOpen={openModal === index}
                onClose={handleClose}
                size="lg"
              >
                <ModalContent className="border border-line bg-surface text-fg">
                  {() => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 border-b border-line/70 pb-4">
                        <h2 className="font-display text-2xl leading-none tracking-tight text-fg">
                          {item.from}
                        </h2>
                        <span className="text-xs font-normal text-muted">
                          {item.area} · {item.age}
                        </span>
                      </ModalHeader>

                      <ModalBody className="gap-4 py-5">
                        <div className="flex flex-wrap gap-1.5">
                          {techs.map((technology) => (
                            <TechBadge key={technology} label={technology} />
                          ))}
                        </div>
                        <p className="text-sm leading-relaxed text-muted">
                          {item.descrpcion}
                        </p>
                      </ModalBody>

                      <div className="flex flex-wrap justify-end gap-2 border-t border-line/70 px-6 py-4">
                        {hasSite && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                          >
                            Ver sitio
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}
                        <a
                          href="https://github.com/tomigonzalez"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                        >
                          GitHub
                        </a>
                      </div>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiencia;
