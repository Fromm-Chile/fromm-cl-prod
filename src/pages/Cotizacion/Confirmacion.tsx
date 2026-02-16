import { Button } from "../../components/ui/Button";

export const Confirmacion = () => {
  return (
    <>
      <title>Solicitud Enviada | FROMM Chile</title>
      <meta
        name="description"
        content="Tu solicitud de cotización ha sido enviada con éxito. El equipo de FROMM Chile te contactará a la brevedad."
      />
      <div className="bg-primaryGray mb-20 pt-12 px-3 pb-5">
      <h2 className="text-center mb-10 text-xl md:text-4xl font-medium">
        SOLICITUD ENVIADA
      </h2>
      <div className="border border-black p-5 md:py-10 md:px-3 bg-white mb-10 md:max-w-[1150px] md:m-auto md:mb-10 flex flex-col items-center">
        <p className="text-center text-lg md:text-2xl text-textGray">
          Tu solicitud ha sido enviada con éxito, te contactaremos a la
          brevedad.
        </p>
        <img src="/icons/sent-mail.svg" className="w-[300px] h-[300px]" alt="Solicitud enviada exitosamente" />
      </div>
      <div className="flex justify-center">
        <Button
          link="/"
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Volver al Inicio
        </Button>
      </div>
    </div>
    </>
  );
};
