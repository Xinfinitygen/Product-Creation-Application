export function FormButton ({ children, type = "submit", disabled = false}) {
    return (
        <button typeof={type} disabled={disabled}>
            {children}
        </button>
    );
}