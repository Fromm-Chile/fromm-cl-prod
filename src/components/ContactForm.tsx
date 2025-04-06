import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaController } from "../components/TextareaController";
import { useNavigate } from "react-router-dom";
import { InputController } from "./InputController";
import { Button } from "./commons/Button";
import { useState } from "react";
import { apiUrl } from "../assets/variables";
import axios from "axios";
import { Loader } from "./Loader";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

type ContactFormProps = {
  titulo: string;
  descripcion: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Nombre es requerido"),
  email: yup.string().email().required("Correo es requerido"),
  phone: yup.string(),
  company: yup.string().required("El nombre de la empresa es requerido"),
  message: yup.string().required("Mensaje es requerido"),
});

export const ContactForm = ({ titulo, descripcion }: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      await axios(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...data,
          contactType: "CONTACT",
        },
      });
      navigate("/confirmacion");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mb-20 pt-12 px-0 pb-5">
          <div className="bg-primaryGray p-5 md:px-20 md:py-5 md:max-w-[1350px] md:m-auto md:flex md:flex-row-reverse md:justify-between md:items-center">
            <div className="md:grid md:grid-cols-1 md:gap-0 my-10 mb-14 md:w-[80%]">
              <div>
                <h2 className="text-left text-textGray mb-3 text-3xl md:text-4xl font-bold uppercase mt-5">
                  {titulo}
                </h2>
                <p className="text-left font-xl text-textGray font-light mb-5">
                  {descripcion}
                </p>
              </div>
              <InputController
                control={control}
                name="name"
                placeholder="Nombre*"
                error={errors.name?.message}
              />
              <InputController
                control={control}
                name="email"
                placeholder="Correo*"
                error={errors.email?.message}
              />
              <InputController
                control={control}
                name="phone"
                placeholder="Teléfono"
              />
              <InputController
                control={control}
                name="company"
                placeholder="Empresa*"
              />
              <TextareaController
                control={control}
                name="message"
                placeholder="Mensaje*"
              />
              <div className="flex justify-center">
                <Button
                  className="border border-black text-textGray font-bold uppercase"
                  link=""
                  whiteButton
                  onClick={handleSubmit(onSubmit)}
                >
                  ENVIAR
                </Button>
              </div>
            </div>
            <div className="px-6 py-2 mt-8 rounded-lg max-w-[90%] md:w-[50%]">
              <div className="md:w-[250px] md:h-[250px] h-[100px] w-[100px] m-auto mb-10">
                <img src="/icons/contacthelp.svg" />
              </div>
              <div className="flex items-center justify-start gap-4 mb-2">
                <img src="/icons/Layout/phone.svg" height={30} width={30} />
                <p className="text-textGray font-light">+56 2 2571 1100</p>
              </div>
              <div className="flex items-center justify-start gap-4 mb-2">
                <img src="/icons/Layout/mail.svg" height={30} width={30} />
                <a
                  href="mailto:contacto@fromm-pack.cl"
                  className="text-textGray font-light hover:underline hover:font-bold transition-hover duration-300 ease-linear"
                >
                  contacto@fromm-pack.cl
                </a>
              </div>
              <div className="flex items-center justify-start gap-4 mb-2">
                <img src="/icons/instantmessage.svg" height={30} width={30} />
                <a
                  href="https://api.whatsapp.com/send?phone=56939522069"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-textGray font-light hover:underline hover:font-bold transition-hover duration-300 ease-linear">
                    Nuestro Whatsapp
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
