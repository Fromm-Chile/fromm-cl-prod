import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../../assets/variables";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductType } from "./Products";
import { Loader } from "../../components/ui/Loader";
import { useProductStore } from "../../store/useStore";
import { YoutubeEmbed } from "../../components/form/YotubeEmbed";

enum Tab {
  Specifications = "specifications",
  Information = "information",
  Downloads = "downloads",
  Videos = "videos",
}

export const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.Information);
  const [quantity, setQuantity] = useState(1);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const productId = queryParams.get("producto");

  const navigate = useNavigate();

  const { addProduct, products } = useProductStore();

  const {
    data: productDetails,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async (): Promise<ProductType> => {
      const response = await fetch(`${apiUrl}/products/${productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    },
    refetchOnWindowFocus: false,
  });

  if (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="flex justify-center items-center">
        Error loading products
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentImage((prev) =>
      productDetails
        ? prev === 0
          ? productDetails.srcImg.length - 1
          : prev - 1
        : prev
    );
  };

  const nextSlide = () => {
    setCurrentImage((prev) =>
      productDetails && prev === productDetails.srcImg.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddProduct = () => {
    addProduct({
      id: productDetails?.id || 0,
      image: productDetails?.srcImg[0] || "",
      name: productDetails?.name || "",
      quantity,
    });
  };

  const isProductInInvoice = products.find(
    (product) => product.id === productDetails?.id
  );

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <title>{productDetails?.name}</title>
          <meta name="description" content={productDetails?.desc} />
          <meta name="keywords" content={productDetails?.name} />
          <section className="bg-primaryGray pt-10">
            <div className="p-5 max-w-[1250px] mx-auto mb-5 h-auto md:flex md:justify-between">
              <div className="md:w-[50%]">
                <div className="md:h-[400px] relative group">
                  <div className="rounded-2xl bg-center bg-cover duration-500">
                    {productDetails && productDetails.srcImg.length > 0 && (
                      <img
                        src={productDetails.srcImg[currentImage]}
                        alt={productDetails.alt}
                        className="w-[400px] h-[400px] m-auto rounded-2xl object-contain"
                      />
                    )}
                  </div>
                  <div
                    onClick={prevSlide}
                    className="hidden group-hover:block absolute bottom-[50%] translate-y-[50%] cursor-pointer hover:scale-125"
                  >
                    <img src="/icons/slideLeft.svg" />
                  </div>
                  <div
                    onClick={nextSlide}
                    className="hidden group-hover:block absolute bottom-[50%] right-0 translate-y-[50%] cursor-pointer hover:scale-125 transition-all ease duration-500"
                  >
                    <img src="/icons/slideRight.svg" />
                  </div>
                </div>
                <div className="flex justify-start mt-4 gap-2">
                  {productDetails?.srcImg.map((img, index) => (
                    <div
                      key={index}
                      className={`w-24 h-24 rounded-lg bg-center bg-cover cursor-pointer ${
                        currentImage === index
                          ? "border-2 border-red"
                          : "border-2 border-transparent"
                      }`}
                      style={{ backgroundImage: `url(${img})` }}
                      onClick={() => setCurrentImage(index)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="md:w-[45%]">
                <div className="flex flex-col gap-5 mt-5">
                  <h2 className="text-4xl font-bold mt-5 mb-2">
                    {productDetails?.name}
                  </h2>
                </div>
                <p>{productDetails?.desc || ""}</p>
                {isProductInInvoice ? (
                  <div className="flex flex-col gap-5 md:flex-row md:gap-4 justify-between items-center mt-5">
                    <Button link="" onClick={() => navigate(-1)}>
                      Volver a productos
                    </Button>
                    <div className="bg-white p-5 flex justify-center items-center border border-red rounded-xl h-4">
                      <p>Agregado!</p>
                    </div>
                    <Button link="/cotizacion">Ir a mi Cotización</Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5 md:flex-row md:gap-0 justify-between items-center mt-5">
                    <div className="border-2 border-red rounded-xl p-5 flex justify-center items-center bg-white">
                      <img
                        src="/icons/InvoiceMinus.svg"
                        className="cursor-pointer hover:scale-125 trasition duration-300 ease-linear"
                        height={25}
                        width={25}
                        onClick={() =>
                          setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                        }
                      />
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => console.log(e.target.value)}
                        className="text-lg text-center w-10 md:w-8 no-arrows focus:outline-none"
                        min={0}
                        max={455}
                        inputMode="numeric"
                        autoComplete="off"
                        step={1}
                      />
                      <img
                        src="/icons/InvoicePlus.svg"
                        className="cursor-pointer hover:scale-125 trasition duration-300 ease-linear"
                        height={25}
                        width={25}
                        onClick={() => setQuantity((prev) => prev + 1)}
                      />
                    </div>
                    <div>
                      <Button
                        link={`/productos/${productDetails?.slug}?producto=${productDetails?.id}`}
                        onClick={handleAddProduct}
                      >
                        Agregar a la Cotización
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="p-5 max-w-[1250px] mx-auto mb-10 h-auto my-10">
            <ul className="flex flex-col justify-center items-center font-extralight text-lg mb-8 md:flex-row">
              {productDetails?.jsonDetails?.specifications.length &&
              productDetails?.jsonDetails?.specifications.length > 0 ? (
                <li
                  className={`cursor-pointer h-full w-full text-center py-3 ${
                    selectedTab === Tab.Specifications
                      ? "bg-primaryGray md:bg-white md:border md:border-l-red md:border-t-red md:border-r-red md:border-b-white md:rounded-t-[8px]"
                      : "md:border md:border-b-red md:border-t-white md:border-r-white md:border-l-white"
                  }`}
                  onClick={() => setSelectedTab(Tab.Specifications)}
                >
                  Especificaciones
                </li>
              ) : null}
              {productDetails?.jsonDetails?.information && (
                <li
                  className={`cursor-pointer h-full w-full text-center py-3 ${
                    selectedTab === Tab.Information
                      ? "bg-primaryGray md:bg-white md:border md:border-l-red md:border-t-red md:border-r-red md:border-b-white md:rounded-t-[8px]"
                      : "md:border md:border-b-red md:border-t-white md:border-r-white md:border-l-white"
                  }`}
                  onClick={() => setSelectedTab(Tab.Information)}
                >
                  Información
                </li>
              )}
              {productDetails?.jsonDetails?.downloads &&
              productDetails?.jsonDetails?.downloads.length > 0 ? (
                <li
                  className={`cursor-pointer h-full w-full text-center py-3 ${
                    selectedTab === Tab.Downloads
                      ? "bg-primaryGray md:bg-white md:border md:border-l-red md:border-t-red md:border-r-red md:border-b-white md:rounded-t-[8px]"
                      : "md:border md:border-b-red md:border-t-white md:border-r-white md:border-l-white"
                  }`}
                  onClick={() => setSelectedTab(Tab.Downloads)}
                >
                  Descargas
                </li>
              ) : null}
              {productDetails?.jsonDetails?.videos &&
              productDetails?.jsonDetails?.videos.length > 0 ? (
                <li
                  className={`cursor-pointer h-full w-full text-center py-3 ${
                    selectedTab === "videos"
                      ? "bg-primaryGray md:bg-white md:border md:border-l-red md:border-t-red md:border-r-red md:border-b-white md:rounded-t-[8px]"
                      : "md:border md:border-b-red md:border-t-white md:border-r-white md:border-l-white"
                  }`}
                  onClick={() => setSelectedTab(Tab.Videos)}
                >
                  Videos
                </li>
              ) : null}
            </ul>
            <div>
              {selectedTab === Tab.Specifications && (
                <div className="md:w-[90%] md:pl-20 md:pt-10 w-full">
                  {productDetails?.jsonDetails?.specifications.map((spec) => (
                    <div
                      key={spec.key}
                      className="md:flex justify-between mb-5 md:justify-normal"
                    >
                      <div className="md:w-[45%]">
                        <p className="font-bold text-textGray">{spec.key}</p>
                      </div>
                      <div className="md:w-[45%]">
                        <p className="font-extralight">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedTab === Tab.Information &&
              productDetails?.jsonDetails?.information &&
              productDetails.jsonDetails.information !== "" ? (
                <div className="md:w-[80%] md:pl-20 md:pt-10">
                  {Array.isArray(productDetails?.jsonDetails?.information) ? (
                    productDetails?.jsonDetails?.information.map(
                      (item, index) => (
                        <div key={index} className="flex justify-between mb-5">
                          <div className="flex gap-2 items-center">
                            <img src="/icons/checkList.svg" />
                            <p>{item}</p>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <p>{productDetails?.jsonDetails?.information}</p>
                  )}
                </div>
              ) : null}
              {selectedTab === Tab.Downloads && (
                <div>
                  {productDetails?.jsonDetails?.downloads.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between mb-5 md:justify-normal w-[100vw] md:ml-20"
                    >
                      <div className="w-[95%] md:w-[20%]">
                        <p className="font-bold text-textGray">{item.name}</p>
                      </div>
                      <div className="w-[35%] cursor-pointer">
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <img src="/icons/download.svg" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedTab === "videos" && (
                <div className="md:grid md:grid-cols-2 md:gap-5">
                  {productDetails?.jsonDetails?.videos.map((video, index) => (
                    <div key={index} className="md:flex justify-between mb-5">
                      <div className="md:w-full">
                        <YoutubeEmbed
                          embedId={video}
                          className="max-w-[350px] h-[250px] md:max-w-[550px] md:h-[350px] m-auto"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
          <div className="max-w-[1250px] mx-auto mb-24 h-auto">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold border-4 border-white group"
            >
              <div className="bg-red rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  ></path>
                  <path
                    fill="white"
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  ></path>
                </svg>
              </div>
              <p className="translate-x-14">Volver</p>
            </button>
          </div>
        </>
      )}
    </>
  );
};
