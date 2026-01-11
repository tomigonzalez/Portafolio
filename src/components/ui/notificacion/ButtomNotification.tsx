import { useEffect, useState } from "react";

const BottomNotification = () => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animación de entrada
    setShow(true);

    // Auto close
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setVisible(false), 300); // espera a que termine la animación
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="relative max-w-md rounded-2xl bg-black/50 px-6 py-4 text-sm text-white shadow-xl backdrop-blur-md">
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
