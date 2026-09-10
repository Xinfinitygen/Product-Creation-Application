function FormButton ({ children, disabled}) {
    return (
        <button type="submit" className="form-button" disabled={disabled}>
            {children}
        </button>
    );
}
export default FormButton;