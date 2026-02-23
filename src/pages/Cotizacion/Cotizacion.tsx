import { useForm } from "react-hook-form";
import { InputController } from "../../components/form/InputController";
import { InvoiceCard } from "../../components/ui/InvoiceCard";
import { Button } from "../../components/ui/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProductStore } from "../../store/useStore";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../assets/variables";
import { Loader } from "../../components/ui/Loader";
import { useNavigate } from "react-router-dom";
import { TextareaController } from "../../components/form/TextareaController";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Nombre es requerido"),
  email: yup.string().email().required("Correo es requerido"),
  phone: yup.string(),
  company: yup.string().required("El nombre de la empresa es requerido"),
  message: yup.string(),
});

export const Cotizacion = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const products = useProductStore((state) => state.products);
  const { removeProduct, updateProduct, reset } = useProductStore();

  const onSubmit = async (data: FormData) => {
    if (products.length === 0) {
      setError("Debes incluir al menos 1 producto en la cotización!");
      return;
    }

    try {
      setIsLoading(true);
      await axios(`${apiUrl}/invoices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...data,
          invoiceDetails: products.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
            name: product.name,
          })),
        },
      });

      reset();
      navigate("/confirmacion");
    } catch (error) {
      setError("Ocurrió un error al enviar la cotización, intenta de nuevo");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <title>Cotización de Productos | FROMM Chile</title>
      <meta
        name="description"
        content="Solicita una cotización de productos de embalaje industrial FROMM Chile. Zunchos, envolvedoras, airpads y más. Respuesta rápida y personalizada."
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-primaryGray mb-20 pt-12 px-3 pb-5">
          <h1 className="text-center mb-10 text-xl md:text-3xl font-semibold tracking-wide">
            DETALLE COTIZACIÓN
          </h1>
          <div className="rounded-xl border border-black/10 p-5 md:py-10 md:px-6 bg-white mb-10 md:max-w-[1150px] md:m-auto md:mb-10 shadow-soft">
            {products.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-12 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="#E4E4E4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>
                <p className="text-lg font-medium text-textGray">No hay productos en la cotización</p>
                <p className="text-sm text-textGray font-light">Agrega productos desde el catálogo para comenzar</p>
              </div>
            ) : (
              <>
                {products.map((product) => (
                  <InvoiceCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    quantity={product.quantity}
                    handleRemove={() => removeProduct(product.id)}
                    handleAddQuantity={() =>
                      updateProduct(product.id, product.quantity + 1)
                    }
                    handleSubtractQuantity={() =>
                      updateProduct(
                        product.id,
                        product.quantity > 1
                          ? product.quantity - 1
                          : product.quantity
                      )
                    }
                  />
                ))}
              </>
            )}
          </div>
          <h2 className="text-center mb-5 text-xl md:text-3xl font-semibold tracking-wide">
            INFORMACIÓN DE CONTACTO
          </h2>
          <div className="rounded-xl border border-black/10 p-5 md:px-16 md:py-8 bg-white md:max-w-[1150px] md:m-auto shadow-soft">
            <div className="md:grid md:grid-cols-2 md:gap-5 mt-10 mb-3">
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
                error={errors.company?.message}
              />
            </div>
            <TextareaController
              control={control}
              name="message"
              placeholder="Comentarios adicionales (opcionales)"
              rows={3}
            />
            <div>
              <Button link="" onClick={handleSubmit(onSubmit)}>
                Solicitar Cotización
              </Button>
              {error && (
                <p className="text-center text-red font-bold text-sm mt-1">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
