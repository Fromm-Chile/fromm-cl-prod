import { Control, Controller } from "react-hook-form";

type TextareaControllerProps = {
  control: Control<any>;
  name: string;
  placeholder: string;
  error?: string;
  rows?: number;
};

export const TextareaController = ({
  control,
  name,
  placeholder,
  error,
  rows,
}: TextareaControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="mb-4">
          <label className="block text-xs font-medium text-textGray mb-1 ml-0.5">
            {placeholder}
          </label>
          <textarea
            {...field}
            placeholder=""
            className={`w-full border rounded-lg px-4 py-3 text-sm text-textGray bg-white resize-none
              focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red
              ${error ? "border-red bg-red-50/30" : "border-primaryGray hover:border-textGray/40"}`}
            rows={rows || 6}
            maxLength={2000}
          />
          {error && (
            <p className="flex items-center gap-1 text-red text-xs mt-1 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {error}
            </p>
          )}
        </div>
      )}
    />
  );
};
