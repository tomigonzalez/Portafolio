import { useEffect, useState } from "react";

const BottomNotification = () => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      handleClose();
    }, 9000);

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
        fixed bottom-5 left-0 z-50 w-full px-4 transition-all duration-300 ease-out
        sm:bottom-6 sm:left-1/2 sm:w-auto sm:-translate-x-1/2 sm:px-0
        ${show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
      `}
    >
      <div className="relative w-full rounded-2xl border border-line bg-surface/95 px-5 py-4 pr-10 text-sm text-muted shadow-card backdrop-blur-md sm:max-w-md">
        <span
          aria-hidden="true"
          className="absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-full bg-accent"
        />
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar aviso"
          className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-3 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
        >
          ✕
        </button>

        <p role="status" aria-live="polite" className="text-center leading-relaxed">
          La idea de este portafolio es ser lo más{" "}
          <span className="font-semibold text-fg">simple y minimalista</span>{" "}
          posible, para que cualquiera pueda navegar fácilmente y encontrar
          información sobre mis trabajos.
        </p>
      </div>
    </div>
  );
};

export default BottomNotification;
