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
        <div className="mb-5">
          <textarea
            {...field}
            placeholder={placeholder}
            className="w-full border md:border-2 border-black md:border-primaryGray p-2 rounded-lg focus:outline-red"
            cols={40}
            rows={rows || 10}
            maxLength={2000}
          />
          <p className="text-red text-xs font-semibold">{error}</p>
        </div>
      )}
    />
  );
};
