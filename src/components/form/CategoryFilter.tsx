import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../ui/Loader";

export type Category = {
  id: number;
  name: string;
  parentCategory: number | null;
  other_Categories: Category[];
  createdAt: string;
  updatedAt: string | null;
};

type CategoryFilterProps = {
  categories: Category[];
  selectedCategory: number | null;
  isLoading: boolean;
};

export const CategoryFilter = ({
  categories,
  selectedCategory,
  isLoading,
}: CategoryFilterProps) => {
  const navigate = useNavigate();
  const [internalCategory, setInternalCategory] = useState<number | null>(null);
  const [isCategorySelected, setIsCategorySelected] = useState<boolean>(false);
  const [isSubCategorySelected, setIsSubCategorySelected] =
    useState<boolean>(false);

  const categoryOrder = [
    "ZUNCHOS",
    "MÁQUINAS Y HERRAMIENTAS",
    "AIRPAD",
    "MÁQUINAS ENVOLVEDORAS",
    "SISTEMAS DE EMBALAJE",
    "HERRAMIENTAS DE APOYO",
    "ACCESORIOS DE EMBALAJE",
  ];

  const sortByObject = categoryOrder.reduce((obj, item, index) => {
    return {
      ...obj,
      [item]: index,
    };
  }, {});

  const customSortCategories = categories?.sort(
    (a: Category, b: Category) =>
      (sortByObject as Record<string, number>)[a.name] -
      (sortByObject as Record<string, number>)[b.name]
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-2 w-full">
          {customSortCategories.map((category) => (
            <div
              key={category.id}
              className={`${
                isCategorySelected &&
                selectedCategory === category.id &&
                category.other_Categories.length === 0
                  ? "bg-red font-extrabold text-white rounded-md shadow-md cursor-pointer"
                  : "bg-white rounded-md shadow-md cursor-pointer text-textGray font-bold hover:border hover:border-red transition-all duration-300 ease-linear "
              }`}
            >
              <div
                className="flex items-center justify-between p-5"
                onClick={() => {
                  const categoryLength = category.other_Categories.length;
                  if (
                    selectedCategory === category.id &&
                    categoryLength === 0
                  ) {
                    navigate(`/productos`);
                    setInternalCategory(category.id);
                  }
                  if (selectedCategory !== category.id && categoryLength > 0) {
                    setInternalCategory(category.id);
                    setIsCategorySelected(false);
                  }
                  if (
                    selectedCategory !== category.id &&
                    categoryLength === 0
                  ) {
                    navigate(`/productos?categoryId=${category.id}`);
                    setInternalCategory(category.id);
                    setIsCategorySelected(true);
                  }
                }}
              >
                <p className="text-left">{category.name}</p>
                {category.other_Categories.length > 0 && (
                  <img src="/icons/chevronDown.svg" className="h-8 w-8" />
                )}
              </div>
              {category.other_Categories.length > 0 ? (
                <ul
                  className={`mb-5 font-light ${
                    internalCategory === category.id
                      ? "h-auto block"
                      : "h-0 hidden"
                  }`}
                >
                  {category.other_Categories?.map((subcategory) => {
                    return (
                      <li
                        key={subcategory.id}
                        className={`${
                          isSubCategorySelected &&
                          selectedCategory === subcategory.id
                            ? "bg-red text-white cursor-pointer p-3"
                            : "hover:bg-primaryGray hover:text-red cursor-pointer  transition-all duration-300 ease-linear p-3"
                        }`}
                        onClick={
                          isSubCategorySelected &&
                          selectedCategory === subcategory.id
                            ? () => {
                                navigate(`/productos`);
                                setIsSubCategorySelected(false);
                              }
                            : () => {
                                setIsSubCategorySelected(true);
                                navigate(
                                  `/productos?categoryId=${subcategory.id}`
                                );
                              }
                        }
                      >
                        {subcategory.name}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
