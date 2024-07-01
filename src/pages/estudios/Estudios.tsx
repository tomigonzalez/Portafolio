import { useState } from "react";
import userData from "../../data/estudios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

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
    <div className="w-4/5 h-full pr-2 overflow-y-auto overflow-x-hidden flex flex-col gap-4">
      {data.map((item, index) => (
        <div key={index} className="w-full h-full ">
          <Button
            variant="flat"
            onPress={() => handleOpen(index)}
            className="text-slate-300 capitalize z-50 w-full flex flex-col p-2 bg-tertiary rounded-lg h-auto   border-tertiary border hover:border-celeste"
          >
            <div className="flex lg:flex-row lg:items-center items-start flex-col  w-full justify-between ">
              <div className="flex flex-col text-lg text-left">
                <h2>{item.title}</h2>

                <p>{item.from}</p>
              </div>

              <div className="">
                <p>{item.age}</p>
              </div>
            </div>
            {item.techonolgies && (
              <ul className="flex flex-row gap-2 w-full flex-wrap">
                {item.techonolgies.split(",").map((technology, techIndex) => (
                  <li
                    key={techIndex}
                    className="bg-celeste text-xs rounded p-1 text-center text-white"
                  >
                    {technology.trim()}
                  </li>
                ))}
              </ul>
            )}
          </Button>

          <Modal
            backdrop={"blur"}
            isOpen={openModal === index}
            onClose={handleClose}
            className="items-center"
          >
            <ModalContent className="bg-tertiary text-slate-300 self-center ">
              {() => (
                <>
                  <ModalHeader className="flex flex-col gap-1 ">
                    <a href={item.link} target="_blank">
                      {item.from}
                    </a>
                  </ModalHeader>
                  <ModalBody></ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default Estudios;
