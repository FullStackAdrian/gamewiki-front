import type {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  Path,
} from "react-hook-form";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectInputProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  name: Path<TFieldValues>;
  label: string;
  options: SelectOption[];
  register: UseFormRegister<TFieldValues>;
  errors?: FieldErrors<TFieldValues>;
  placeholder?: string;
  className?: string;
}

export function SelectInput<TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  options,
  register,
  errors,
  placeholder,
  className = "",
}: SelectInputProps<TFieldValues>) {
  const error = errors?.[name];

  return (
    <div className={className}>
      <label
        htmlFor={name as string}
        className="block text-slate-300 text-sm font-medium mb-2"
      >
        {label}
      </label>

      <select
        id={name as string}
        {...register(name)}
        className={`w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
        }`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error?.message && (
        <p className="text-red-400 text-sm mt-1">{error.message as string}</p>
      )}
    </div>
  );
}

export default SelectInput;
