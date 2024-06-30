import { useState } from "react";
import experienciaData from "../../data/experiencia";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

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
    <div className="w-4/5 h-56 overflow-y-auto">
      {data.map((item, index) => (
        <div key={index}>
          <Button
            variant="flat"
            onPress={() => handleOpen(index)}
            className="capitalize w-full bg-tertiary rounded-lg h-auto mb-4 border-tertiary border hover:border-celeste"
          >
            <div className="flex flex-row items-center w-full justify-between text-white p-2">
              <div className="flex flex-col text-lg text-left font-ubuntu">
                <h2>{item.from}</h2>
                <p className="text-sm font-ubuntu">{item.area}</p>
              </div>
              <div className="font-ubuntu">
                <p>{item.age}</p>
              </div>
            </div>
          </Button>

          <Modal
            backdrop={"blur"}
            isOpen={openModal === index}
            onClose={handleClose}
          >
            <ModalContent className=" bg-secondary text-slate-300">
              {() => (
                <>
                  <ModalHeader className="flex flex-col  ">
                    <a href={item.link} target="_blank">
                      {item.from}
                    </a>
                  </ModalHeader>
                  <ModalBody>
                    <p>Tecnologías: {item.techonolgies}</p>
                    <p>{item.descrpcion}</p>
                  </ModalBody>
                  <div className="w-full  h-full text-center mb-4 mt-4">
                    <a
                      href="https://github.com/tomigonzalez"
                      target="_blank"
                      className="rounded p-2 m-2 bg-tertiary"
                    >
                      GitHub
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

export default Experiencia;
