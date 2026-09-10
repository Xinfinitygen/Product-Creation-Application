// Form Input Component
function FormInput({
    label,
    name,
    type = "text",
    placeholder,
    error,
    ...inputProps
}) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{label}</label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                {...inputProps}
            />

            {error && <p className="form-error">{error}</p>}
        </div>
    );
}

export default FormInput;