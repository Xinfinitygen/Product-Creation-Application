// Form Input Component
export function FormInput({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
}) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{label}</label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

            {error && <p className="form-error">{error}</p>}
        </div>
    )
}