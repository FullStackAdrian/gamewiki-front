import type {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  Path,
} from "react-hook-form";

interface DateInputProps<TFormValues extends FieldValues> {
  label: string;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  errors?: FieldErrors<TFormValues>;
}

function DateInput<TFormValues extends FieldValues>({
  name,
  label,
  register,
  errors,
}: DateInputProps<TFormValues>) {
  const errorMessage = errors?.[name]?.message as string | undefined;

  return (
    <div>
      <label
        htmlFor={name as string}
        className="block text-slate-300 text-sm font-medium mb-2"
      >
        {label}
      </label>
      <input
        id={name as string}
        type="date"
        {...register(name)}
        className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
      />
      {errorMessage && (
        <p className="text-red-400 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}

export default DateInput;
