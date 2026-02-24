export const Loader = () => {
  return (
    <div
      className="h-[70vh] flex flex-col justify-center items-center gap-6"
      role="status"
      aria-label="Cargando"
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-primaryGray border-t-red animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-soft">
            <img
              src="/img/Navbar/FrommLogo.webp"
              alt=""
              aria-hidden="true"
              height={56}
              width={56}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <p className="text-sm text-textGray font-light tracking-wide animate-pulse">
        Cargando...
      </p>
    </div>
  );
};
