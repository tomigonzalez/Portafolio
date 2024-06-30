import React, { useState } from "react";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor o mostrando un mensaje de éxito
    console.log({ name, email, message });
  };

  return (
    <div className="w-4/5 h-full flex-col justify-start gap-6  overflow-y-auto rounded-lg flex ">
      <div className="text-4xl text-slate-300">
        <h2>Contactate conmigo :D</h2>
      </div>
      <form onSubmit={handleSubmit} className="w-11/12">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2  border bg-tertiary  border-hov rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border bg-tertiary  border-hov rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 bg-tertiary  border-hov py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            rows={4}
            placeholder="Mensaje"
            required
          />
        </div>
        <button
          type="submit"
          className="w-40 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
