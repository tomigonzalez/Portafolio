import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import proyectosData from "../../data/proyectos";
import SimpleSlider from "../../components/ui/carrousel/Carrousel";
import TechBadge from "../../components/ui/badge/TechBadge";
import PageHeader from "../../components/ui/pageHeader/PageHeader";

const Projectos = () => {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const data = proyectosData;

  const handleOpen = (index: number) => {
    setOpenModal(index);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <PageHeader title="Proyectos" meta={`${data.length} proyectos`} />

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
                className="group w-full rounded-2xl border border-line bg-surface-2/60 p-3 text-left transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:border-accent/35 hover:bg-surface-2 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border border-line bg-ink transition-colors duration-200 group-hover:border-accent/30 sm:h-24 sm:w-32">
                    <SimpleSlider imgUrl={item.imgUrl} alt={item.title} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg leading-tight tracking-tight text-fg sm:text-xl">
                        {item.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-sm text-faint transition-colors duration-200 group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted sm:text-sm">
                      {item.info}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {techs.map((technology) => (
                        <TechBadge key={technology} label={technology} />
                      ))}
                    </div>
                  </div>
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
                      <ModalHeader className="border-b border-line/70 pb-4">
                        <h2 className="font-display text-2xl leading-none tracking-tight text-fg">
                          {item.title}
                        </h2>
                      </ModalHeader>

                      <ModalBody className="gap-4 py-5">
                        <div className="h-48 w-full overflow-hidden rounded-xl border border-line bg-ink sm:h-56">
                          <SimpleSlider imgUrl={item.imgUrl} alt={item.title} />
                        </div>

                        <p className="text-sm leading-relaxed text-muted">
                          {item.info}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {techs.map((technology) => (
                            <TechBadge key={technology} label={technology} />
                          ))}
                        </div>
                      </ModalBody>

                      {item.link && (
                        <div className="flex justify-end border-t border-line/70 px-6 py-4">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                          >
                            Ver proyecto
                            <span aria-hidden="true">↗</span>
                          </a>
                        </div>
                      )}
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

export default Projectos;
