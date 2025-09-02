import { Control, Controller } from "react-hook-form";

type InputControllerProps = {
  control: Control<any>;
  name: string;
  placeholder: string;
  error?: string;
};

export const InputController = ({
  control,
  name,
  placeholder,
  error,
}: InputControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="mb-5">
          <input
            type="text"
            {...field}
            value={field.value || ""}
            onChange={field.onChange}
            placeholder={placeholder}
            className="w-full border md:border-2 border-black md:border-primaryGray p-2 rounded-lg focus:outline-red"
          />
          <p className="text-red text-xs font-semibold">{error}</p>
        </div>
      )}
    />
  );
};
