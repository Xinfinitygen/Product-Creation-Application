function FormTextarea({
  label,
  name,
  placeholder,
  error,
  ...textareaProps
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows="5"
        {...textareaProps}
      />

      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

export default FormTextarea;