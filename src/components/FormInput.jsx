// Form Input Component
function FormInput({
    label,
    name,
    type = "text",
    placeholder,
    error,
    ...props
}) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{label}</label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                {...props}
            />

            {error && <p className="form-error">{error}</p>}
        </div>
    );
}

export default FormInput;