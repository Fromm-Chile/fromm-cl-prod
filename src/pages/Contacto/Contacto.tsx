import { InfoBanner } from "../../components/ui/InfoBanner";
import { ContactForm } from "../../components/form/ContactForm";

export const Contacto = () => {
  return (
    <>
      <title>Contacto | FROMM Chile - Soluciones de Embalaje</title>
      <meta
        name="description"
        content="Contáctanos para consultas sobre embalaje industrial, cotizaciones de zunchos, envolvedoras o servicio técnico. Respondemos a la brevedad."
      />
      <link rel="canonical" href="https://fromm-pack.cl/contacto" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/contacto.jpg"
        title="¿Necesitas ayuda?"
        desc="Enviamos un mensaje y nos pondremos en contacto"
        link=""
        sinBoton
        alt="contacto"
        category="CONTACTO"
      />
      <ContactForm
        titulo="FORMULARIO DE CONTACTO"
        descripcion="Envíanos un mensaje y nos pondremos en contacto contigo a la brevedad"
      />
    </>
  );
};
