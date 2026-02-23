import type { FieldValues, UseFormRegister, FieldErrors, Path } from "react-hook-form";

interface RadioOption {
    label: string;
    value: string;
}

interface RadioInputProps<TFormValues extends FieldValues> {
    name: Path<TFormValues>;
    label: string;
    options: RadioOption[];
    register: UseFormRegister<TFormValues>;
    errors?: FieldErrors<TFormValues>;
}

function RadioInput<TFormValues extends FieldValues>({
    name,
    label,
    options,
    register,
    errors,
}: RadioInputProps<TFormValues>) {
    const errorMessage = errors?.[name]?.message as string | undefined;

    return (
        <div>
            <label htmlFor={name as string} className="block text-slate-300 text-sm font-medium mb-2">
                {label}
            </label>
            <div className="flex flex-col space-y-2">
                {options.map((option) => (
                    <div key={option.value}>
                        <input
                            id={`${name as string}${option.value}`} 
                            type="radio"

                            {...register(name)}
                            className="mr-2"
                        />
                        <label htmlFor={`${name as string}${option.value}`} className="text-slate-300 text-sm">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            {errorMessage && <p className="text-red-400 text-sm mt-1">{errorMessage}</p>}
        </div>
    );
}

export default RadioInput;

