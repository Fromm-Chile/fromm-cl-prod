type InvoiceProps = {
  image: string;
  name: string;
  quantity: number;
  handleRemove: () => void;
  handleAddQuantity: () => void;
  handleSubtractQuantity: () => void;
};

export const InvoiceCard = ({
  image,
  name,
  quantity,
  handleRemove,
  handleAddQuantity,
  handleSubtractQuantity,
}: InvoiceProps) => {
  return (
    <div className="border border-primaryGray p-5 md:py-5 md:px-0 rounded-lg text-textGray mb-3 md:flex md:justify-between md:items-center md:mx-10 relative">
      <div className="w-28 h-28 flex justify-center items-center mx-auto md:w-[20%] md:h-[20%]">
        <img src={image} />
      </div>
      <div className="md:w-[70%] md:flex md:justify-between md:items-center">
        <div className="border-t md:border-none border-primaryGray pt-3 md:w-[60%] md:pt-0 md:text-xl text-textGray md:font-medium">
          <p className="text-left">{name}</p>
        </div>
        <div className="border-t md:border-none border-primaryGray pt-3 md:pt-0 mt-5 md:mt-0 flex justify-between items-center md:w-[35%] md:justify-normal md:gap-8">
          <div className="w-[20%]">
            <p>Cantidad:</p>
          </div>
          <div className="border-2 border-primaryGray rounded-xl p-1 flex justify-center items-center w-[30%]">
            <img
              src="/icons/InvoiceMinus.svg"
              className="cursor-pointer hover:scale-125 trasition duration-300 ease-linear"
              onClick={handleSubtractQuantity}
            />
            <input
              type="number"
              value={quantity}
              onChange={(e) => console.log(e.target.value)}
              className="text-xs text-center w-10 md:w-8 no-arrows focus:outline-none"
              min={0}
              max={455}
              inputMode="numeric"
              autoComplete="off"
              step={1}
            />
            <img
              src="/icons/InvoicePlus.svg"
              className="cursor-pointer hover:scale-125 trasition duration-300 ease-linear"
              onClick={handleAddQuantity}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute top-3 right-4 cursor-pointer hover:scale-125 transition-hover duration-300 ease-linear"
        onClick={handleRemove}
      >
        <img src="/icons/closeIcon.svg" height={30} width={30} />
      </div>
    </div>
  );
};
