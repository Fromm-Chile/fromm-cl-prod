export const Loader = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center text-4xl font-semibold text-red relative">
      <div
        className="inline-block h-60 w-60 animate-spin rounded-full border-[10px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <div className="absolute">
        <img src="/img/Navbar/FrommLogo.webp" height={190} width={190} />
      </div>
    </div>
  );
};
