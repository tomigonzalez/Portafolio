import { Button } from "@nextui-org/react";

const SobreMi = () => {
  return (
    <>
      <div className="w-4/5  h-56 overflow-y-auto animate-fade">
        <p>
          Desarrollador web de 24 años especializado en Front-end con
          experiencia en React.
        </p>
        <p>
          Mejorando en Back-end utilizando Node.js, SQL, MongoDB y otras
          tecnologías.
        </p>
        <p>
          Soy prendiz autodidacta, aun que tambien me forme realizando bootcamp
          y estoy estudiando Sistemas en la Universidad.
        </p>

        <p>
          Actualmente estoy en el area de sistemas en la empresa "NASPERU", en
          la cual aprendi a manejar WordPress, y tambien mejorar mis habilidades
          de PHP, Laravel, JS, HTML y CSS. Tambien estoy realizando el programa
          formativo "Codo a Codo 4.0" sobre Full-stack con Node.js.
        </p>
        <p>
          A demas incursiono en UX/UI, creando mis propios diseños/maquetas e
          imagenes en Photoshop o figma para las webs que realizo.
        </p>
        <p>En constante búsqueda de desafíos , crecimiento y aprendizaje :D</p>
      </div>
      <div className="">
        <Button
          radius="lg"
          className="bg-tertiary text-white shadow-lg animate-fade-down animate-delay-[350ms]"
        >
          Descargar CV
        </Button>
      </div>
    </>
  );
};

export default SobreMi;
