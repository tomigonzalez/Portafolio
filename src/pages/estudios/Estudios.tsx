import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import userData from "../../data/estudios";
import TechBadge from "../../components/ui/badge/TechBadge";
import PageHeader from "../../components/ui/pageHeader/PageHeader";

const Estudios = () => {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const data = userData;

  const handleOpen = (index: number) => {
    setOpenModal(index);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <PageHeader title="Estudios" meta={`${data.length} formaciones`} />

      <div className="min-h-0 min-w-0 flex-1 space-y-2.5 overflow-y-auto pr-1">
        {data.map((item, index) => {
          const techs = item.techonolgies
            .split(",")
            .map((technology) => technology.trim())
            .filter(Boolean);

          return (
            <div key={`${item.title}-${index}`}>
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
                    <h3 className="text-base font-semibold leading-snug text-fg sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted sm:text-sm">
                      {item.from}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-line bg-surface/60 px-2 py-0.5 text-[0.7rem] font-medium tabular-nums text-faint">
                    {item.age}
                  </span>
                </div>

                {techs.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {techs.map((technology) => (
                      <TechBadge key={technology} label={technology} />
                    ))}
                  </div>
                )}
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
                          {item.age}
                        </span>
                      </ModalHeader>

                      <ModalBody className="gap-4 py-5">
                        <h3 className="text-base font-semibold leading-snug text-fg">
                          {item.title}
                        </h3>

                        {techs.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {techs.map((technology) => (
                              <TechBadge key={technology} label={technology} />
                            ))}
                          </div>
                        )}
                      </ModalBody>

                      <div className="flex flex-wrap justify-end gap-2 border-t border-line/70 px-6 py-4">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                        >
                          Ver institución
                          <span aria-hidden="true">↗</span>
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

export default Estudios;
