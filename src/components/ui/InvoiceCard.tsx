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
    <div className="border border-primaryGray rounded-xl text-textGray mb-3 shadow-soft bg-white overflow-hidden md:flex md:items-center md:mx-10 relative">

      {/* Product image */}
      <div className="flex-shrink-0 w-full md:w-28 h-28 md:h-full flex items-center justify-center bg-lightGray md:bg-transparent p-4 md:p-3">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px self-stretch bg-primaryGray mx-1" />

      {/* Content */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-4 md:py-5">

        {/* Product name */}
        <p className="text-sm md:text-base font-medium text-textGray leading-snug md:w-[55%] pr-8 md:pr-0">
          {name}
        </p>

        {/* Quantity controls */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-textGray/60 font-medium uppercase tracking-wide">Cantidad</span>
          <div className="flex items-center border border-primaryGray rounded-lg overflow-hidden">
            <button
              type="button"
              aria-label="Reducir cantidad"
              onClick={handleSubtractQuantity}
              disabled={quantity <= 1}
              className="flex items-center justify-center w-8 h-8 hover:bg-primaryGray disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => console.log(e.target.value)}
              className="w-9 text-xs text-center font-semibold focus:outline-none no-arrows bg-transparent"
              min={0}
              max={455}
              inputMode="numeric"
              autoComplete="off"
              step={1}
              aria-label="Cantidad"
            />
            <button
              type="button"
              aria-label="Aumentar cantidad"
              onClick={handleAddQuantity}
              className="flex items-center justify-center w-8 h-8 hover:bg-primaryGray transition-colors duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Remove button */}
      <button
        type="button"
        aria-label={`Eliminar ${name}`}
        onClick={handleRemove}
        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-textGray/40 hover:text-red hover:bg-red-50 transition-colors duration-150"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

    </div>
  );
};
