// Form TextArea Component
export function FormTextarea({
    label,
    name,
    value,
    onChange,
    placeholder,
    error,
}) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{label}</label>

            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows= "5"
            />

            {error && <p className="form-error">{error}</p>}
        </div>
    )
}