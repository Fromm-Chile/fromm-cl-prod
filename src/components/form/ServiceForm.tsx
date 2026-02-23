import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaController } from "./TextareaController";
import { useNavigate } from "react-router-dom";
import { InputController } from "./InputController";
import { Button } from "../ui/Button";
import { useState } from "react";
import { apiUrl } from "../../assets/variables";
import axios from "axios";
import { Loader } from "../ui/Loader";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  equipment: string;
  company?: string;
  message: string;
};

type ServiceFormProps = {
  titulo: string;
  descripcion: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Nombre es requerido"),
  email: yup.string().email().required("Correo es requerido"),
  phone: yup.string(),
  equipment: yup.string().required("Tipo de Máquina es requerido"),
  company: yup.string().required("El nombre de la empresa es requerido"),
  message: yup.string().required("Mensaje es requerido"),
});

export const ServiceForm = ({ titulo, descripcion }: ServiceFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

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
          contactType: "SERVICE",
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
        <div className="mb-20 pb-5">
          <div className="md:max-w-[1200px] md:mx-auto md:rounded-2xl overflow-hidden shadow-card">
            <div className="md:flex md:flex-row-reverse">

              {/* Panel formulario */}
              <div className="flex-1 p-6 md:p-12 bg-white">
                <h2 className="text-textGray mb-2 text-2xl md:text-3xl font-semibold">
                  {titulo}
                </h2>
                <p className="text-sm text-textGray font-light mb-8 leading-relaxed">
                  {descripcion}
                </p>
                <div className="md:grid md:grid-cols-2 md:gap-x-5">
                  <InputController
                    control={control}
                    name="name"
                    placeholder="Nombre*"
                    error={errors.name?.message}
                  />
                  <InputController
                    control={control}
                    name="email"
                    placeholder="Correo electrónico*"
                    error={errors.email?.message}
                    type="email"
                  />
                  <InputController
                    control={control}
                    name="phone"
                    placeholder="Teléfono"
                    type="tel"
                  />
                  <InputController
                    control={control}
                    name="company"
                    placeholder="Empresa*"
                    error={errors.company?.message}
                  />
                  <div className="md:col-span-2">
                    <InputController
                      control={control}
                      name="equipment"
                      placeholder="Tipo de máquina o equipo*"
                      error={errors.equipment?.message}
                    />
                  </div>
                </div>
                <TextareaController
                  control={control}
                  name="message"
                  placeholder="Descripción del servicio requerido*"
                  error={errors.message?.message}
                  rows={5}
                />
                <div className="mt-2">
                  <Button link="" onClick={handleSubmit(onSubmit)}>
                    Solicitar servicio
                  </Button>
                </div>
              </div>

              {/* Panel info */}
              <div className="md:w-[300px] bg-primaryGray p-8 md:p-10 flex flex-col gap-6 justify-center">
                <img
                  src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/servicio.png"
                  alt="Servicio técnico FROMM"
                  loading="lazy"
                  className="w-32 h-32 mx-auto object-contain"
                />
                <div className="flex flex-col gap-4">
                  <a href="tel:+5622571138" className="flex items-center gap-3 text-textGray hover:text-red group">
                    <span className="w-9 h-9 rounded-lg bg-white shadow-soft flex items-center justify-center shrink-0 group-hover:bg-red group-hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2l0 4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>
                    </span>
                    <span className="text-sm font-light leading-snug">+56 2 257 111 38<br/>+56 2 257 111 26</span>
                  </a>
                  <a href="mailto:contacto@fromm-pack.cl" className="flex items-center gap-3 text-textGray hover:text-red group">
                    <span className="w-9 h-9 rounded-lg bg-white shadow-soft flex items-center justify-center shrink-0 group-hover:bg-red group-hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
                    </span>
                    <span className="text-sm font-light">contacto@fromm-pack.cl</span>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=56932590343" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-textGray hover:text-red group">
                    <span className="w-9 h-9 rounded-lg bg-white shadow-soft flex items-center justify-center shrink-0 group-hover:bg-red group-hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>
                    </span>
                    <span className="text-sm font-light">WhatsApp Servicio</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
