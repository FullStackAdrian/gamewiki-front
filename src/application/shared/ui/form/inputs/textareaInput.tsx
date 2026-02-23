function TextAreaInput({ name, label, rows = 4, register, errors }) {
    return (
        <div>
            <label htmlFor={name} className="block text-slate-300 text-sm font-medium mb-2">
                {label}
            </label>
            <textarea
                id={name}
                rows={rows}
                {...register(name)}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 resize-none"
            ></textarea>
            {errors[name] && (
                <p className="text-red-400 text-sm mt-1">{errors[name].message}</p>
            )}
        </div>
    );
}

export default TextAreaInput;