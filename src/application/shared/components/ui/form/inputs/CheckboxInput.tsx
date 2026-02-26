import type { FieldValues, UseFormRegister, FieldErrors, Path, FieldError } from "react-hook-form";

interface CheckboxOption<TFormValues extends FieldValues> {
    name: string; 
    label: string;
    registerName: Path<TFormValues>; 
}

interface CheckboxInputProps<TFormValues extends FieldValues> {
    options: CheckboxOption<TFormValues>[];
    register: UseFormRegister<TFormValues>;
    errors?: FieldErrors<TFormValues>;
}

function CheckboxInput<TFormValues extends FieldValues>({
    options,
    register,
    errors,
}: CheckboxInputProps<TFormValues>) {
    return (
        <div className="flex gap-6">
            {options.map((option) => {
                const fieldError = errors?.[option.registerName] as FieldError | undefined;
                const errorMessage = fieldError?.message;

                return (
                    <label
                        key={option.name}
                        htmlFor={option.name}
                        className="flex items-center gap-2 text-slate-300"
                    >
                        <input
                            type="checkbox"
                            id={option.name}
                            {...register(option.registerName)}
                            className="w-4 h-4 rounded border-slate-600 bg-slate-900 text-blue-500 focus:ring-slate-500"
                        />
                        <span>{option.label}</span>
                        {errorMessage && (
                            <p className="text-red-400 text-sm mt-1">{errorMessage}</p>
                        )}
                    </label>
                );
            })}
        </div>
    );
}

export default CheckboxInput;