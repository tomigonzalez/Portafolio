import { useEffect, useState } from "react";

const BottomNotification = () => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`
        fixed z-50 transition-all duration-300 ease-out
        left-0 top-6 w-full px-3
        sm:left-1/2 sm:top-6 sm:w-auto sm:px-0 sm:-translate-x-1/2
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
      `}
    >
      <div
        className="
          relative w-full sm:max-w-md
          rounded-2xl
          bg-black/60 px-5 py-4
          text-sm text-white shadow-xl backdrop-blur-md
        "
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-2 text-white/70 hover:text-white"
        >
          ✕
        </button>

        <p className="text-center leading-relaxed">
          La idea de este portafolio es ser lo más{" "}
          <span className="font-semibold">simple y minimalista</span> posible,
          para que cualquiera pueda navegar fácilmente y encontrar información
          sobre mis trabajos.
        </p>
      </div>
    </div>
  );
};

export default BottomNotification;
