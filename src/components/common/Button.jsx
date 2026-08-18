const Button = ({ children, onClick, className = "", type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-full ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;