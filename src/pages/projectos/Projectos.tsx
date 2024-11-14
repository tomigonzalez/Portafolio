import { useState } from "react";
import proyectosData from "../../data/proyectos";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";
import SimpleSlider from "../../components/ui/carrousel/Carrousel";

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
    <div className="w-4/5 h-[30vh] sm:h-[40vh] lg:h-[30vh] pr-2 overflow-y-auto overflow-x-hidden flex flex-col gap-4">
      {data.map((item, index) => (
        <div key={index}>
          <Button
            variant="flat"
            onPress={() => handleOpen(index)}
            className=" capitalize w-full bg-tertiary rounded-lg h-auto mb-2 border-tertiary border hover:border-celeste"
          >
            <div className="flex flex-row items-center w-full justify-between text-white p-2">
              <div className="flex flex-col text-lg text-left font-ubuntu w-1/4">
                <SimpleSlider imgUrl={item.imgUrl}></SimpleSlider>
              </div>
              <div className="flex flex-col sm:text-lg text-base text-left font-ubuntu w-8/12 gap-2">
                <h2>{item.title}</h2>

                {item.techonolgies && (
                  <ul className=" flex flex-row gap-2 w-full flex-wrap">
                    {item.techonolgies
                      .split(",")
                      .map((technology, techIndex) => (
                        <li
                          key={techIndex}
                          className="bg-celeste xl:text-[0.6rem] lg:text-[0.5rem] md:text-[0.4rem] sm:text-[0.3rem] text-[0.3rem] font-medium rounded text-center h-5 flex items-center pl-1 pr-1 text-white"
                        >
                          <p className="h-4 flex items-center">
                            {" "}
                            {technology.trim()}
                          </p>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          </Button>

          <Modal
            backdrop={"blur"}
            isOpen={openModal === index}
            onClose={handleClose}
          >
            <ModalContent className="bg-secondary text-slate-300 self-center ">
              {() => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {item.title}
                  </ModalHeader>
                  <ModalBody className="items-center">
                    <div className=" h-1/4 w-2/6">
                      <SimpleSlider imgUrl={item.imgUrl}></SimpleSlider>
                    </div>

                    <p>{item.info}</p>
                  </ModalBody>
                  <div className="w-full  h-full text-center mb-4 mt-4">
                    <a
                      href={item.link}
                      target="_blank"
                      className="rounded p-2 m-2 bg-tertiary"
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default Projectos;
