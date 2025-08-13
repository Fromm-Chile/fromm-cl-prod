import { useEffect, useRef, useState } from "react";
import { apiUrl } from "../assets/variables";
import { Category, CategoryFilter } from "../components/CategoryFilter";
import { InfoBanner } from "../components/InfoBanner";
import { ProductCard } from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../components/Loader";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export type ProductType = {
  id: number;
  slug: string;
  srcImg: string[];
  categoryId: number;
  alt: string;
  name: string;
  subtitle: string;
  desc?: string;
  quantity?: number;
  jsonDetails?: {
    specifications: {
      key: string;
      value: string;
    }[];
    information: string;
    downloads: {
      name: string;
      link: string;
    }[];
    videos: string[];
  };
};

export const Products = () => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 800);

  const navigate = useNavigate();

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category =
    Number(queryParams.get("categoryId")) === 0
      ? null
      : Number(queryParams.get("categoryId"));

  const page = Number(queryParams.get("page")) || 1;

  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  const {
    data: { products, totalPages = 1 } = {},
    error,
    isLoading: isProductsLoading,
  } = useQuery({
    queryKey: [
      "products",
      { categoryId: category, page: page - 1, name: debouncedSearch },
    ],
    queryFn: async (
      a
    ): Promise<{ products: ProductType[]; totalPages: number }> => {
      const response = await axios(`${apiUrl}/products`, {
        method: "GET",
        params: a.queryKey[1],
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: categories = [],
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const response = await fetch(`${apiUrl}/categories/subcategories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });

  if (error || categoriesError) {
    console.error("Error fetching data:", error || categoriesError);
    return (
      <div className="flex flex-col gap-5 justify-center items-center p-20">
        <img
          src="icons/error.svg"
          alt="error-coneccion"
          className="h-[200px] w-[200px]"
        />
        <p className="md:text-4xl text-xl font-medium text-center">
          Lo sentimos, ocurrio un error!
          <br /> Intenta más tarde!
        </p>
      </div>
    );
  }

  return (
    <>
      {isProductsLoading && categoriesLoading ? (
        <Loader />
      ) : (
        <>
          <title>Productos</title>
          <meta name="description" content="información sobre los productos" />
          <InfoBanner
            category="SIEMPRE UNA SOLUCIÓN"
            srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/products.webp"
            alt="products"
            title="PRODUCTOS"
            desc="NUESTROS PRODUCTOS"
            link="/contacto"
            buttonTitle="Contacto"
          />
          <section className="bg-primaryGray" ref={productRef}>
            <div className="max-w-[1350px] m-auto flex flex-col md:flex-row items-start justify-center mb-20">
              <div className="mt-10 w-full px-10 md:px-0 md:mt-20 md:w-[350px] md:mb-20">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full mb-5 border border-red rounded-md p-3"
                    onChange={(e) => {
                      navigate(`/productos`);
                      setSearch(e.target.value);
                    }}
                    value={search}
                    placeholder="Buscar producto"
                  />
                  <img
                    src="/icons/search.svg"
                    alt="busqueda"
                    className="absolute w-8 h-8 top-[25px] right-5 transform -translate-y-1/2"
                  />
                </div>
                <CategoryFilter
                  categories={categories}
                  selectedCategory={category}
                  isLoading={categoriesLoading}
                />
              </div>
              {isProductsLoading ? (
                <div className="pt-16 p-5 max-w-[1250px] mx-auto mb-20 w-[70%]">
                  <Loader />
                </div>
              ) : (
                <div className="w-full md:w-[1014px] mx-auto">
                  {products?.length === 0 ? (
                    <div className="pt-16 p-5 md:w-[914px] w-full mx-auto mb-20 mt-20 flex flex-col justify-center items-center">
                      <img
                        src="icons/noresults.svg"
                        alt="sin-resultados"
                        className="h-60 w-60"
                      />
                      <p className="text-4xl font-medium">Sin resultados!!</p>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 p-5 max-w-[1250px] md:mx-auto md:mt-28 md:w-[100%]">
                        {(!products ? products ?? [] : products).map(
                          (product) => (
                            <ProductCard
                              key={product.id}
                              srcImg={product.srcImg[0]}
                              alt={product.alt}
                              name={product.name}
                              subtitle={product.subtitle}
                              link={`/productos/${product.slug}?producto=${product.id}`}
                            />
                          )
                        )}
                      </div>
                      {totalPages > 1 && (
                        <div className="flex justify-center gap-5 items-center mb-20 bg-white border border-red w-fit m-auto rounded-md">
                          <button
                            onClick={() =>
                              navigate(
                                typeof category === "number"
                                  ? `?categoryId=${category}&page=${
                                      page === 0 ? 0 : page - 1
                                    }`
                                  : `?page=${page === 0 ? 0 : page - 1}`
                              )
                            }
                            className="p-3 hover:text-white hover:bg-gray-500 border-r border-red"
                          >
                            Previo
                          </button>
                          <p>
                            {page} de {totalPages}
                          </p>
                          <button
                            onClick={() =>
                              navigate(
                                typeof category === "number"
                                  ? `?categoryId=${category}&page=${
                                      page === totalPages
                                        ? totalPages
                                        : page + 1
                                    }`
                                  : `?page=${
                                      page === totalPages
                                        ? totalPages
                                        : page + 1
                                    }`
                              )
                            }
                            className="p-3 hover:text-white hover:bg-gray-500 border-l border-red"
                          >
                            Siguiente
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};
