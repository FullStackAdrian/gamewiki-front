function SelectInput ({ name, register, errors, options }) {
    return (
        <div>
            <label htmlFor={name} className="block text-slate-300 text-sm font-medium mb-2">
                Categoria
            </label>
            <select
                id={name}
                {...register(name)}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors[name] && <p className="text-red-400 text-sm mt-1">{errors[name].message}</p>}
        </div>
    );
}

export default SelectInput;
