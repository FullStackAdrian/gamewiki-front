import type {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  Path,
} from "react-hook-form";

export interface TextAreaInputProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  name: Path<TFieldValues>;
  label: string;
  register: UseFormRegister<TFieldValues>;
  errors?: FieldErrors<TFieldValues>;
  rows?: number;
  placeholder?: string;
  className?: string;
}

export function TextAreaInput<TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  register,
  errors,
  rows = 4,
  placeholder = "",
  className = "",
}: TextAreaInputProps<TFieldValues>) {
  const error = errors?.[name];

  return (
    <div className={className}>
      <label
        htmlFor={name as string}
        className="block text-slate-300 text-sm font-medium mb-2"
      >
        {label}
      </label>

      <textarea
        id={name as string}
        rows={rows}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 resize-none ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
        }`}
      />

      {error?.message && (
        <p className="text-red-400 text-sm mt-1">{error.message as string}</p>
      )}
    </div>
  );
}

export default TextAreaInput;
