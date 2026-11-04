import { useState } from "react";
import type { FormEvent } from "react";
import PageHeader from "../../components/ui/pageHeader/PageHeader";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: conectar con un servicio de envío real antes de publicar la ruta.
    console.log({ name, email, message });
  };

  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <PageHeader title="Contacto" meta="Hablemos" />

      <form
        onSubmit={handleSubmit}
        className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-y-auto pr-1"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-xs font-medium text-muted"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2.5 text-sm text-fg placeholder:text-faint focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Tu nombre"
              autoComplete="name"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium text-muted"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2.5 text-sm text-fg placeholder:text-faint focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="tu@email.com"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-xs font-medium text-muted"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2.5 text-sm text-fg placeholder:text-faint focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
            rows={4}
            placeholder="Contame sobre la oportunidad o proyecto"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            Enviar mensaje
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
