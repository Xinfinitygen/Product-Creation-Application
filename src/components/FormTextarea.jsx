function FormTextarea({
  label,
  name,
  placeholder,
  error,
  ...props
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows="5"
        {...props}
      />

      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

export default FormTextarea;