import React from "react";
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ label, className, onClick, icon, buttonAttributes, type = 'button', variant = 'primary',
    size = 'medium',
    disabled = false
}) => {
    // Determine CSS classes based on variant and size
    const buttonClasses = `button ${variant} ${size} ${className}`;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            {...buttonAttributes}
            aria-label={label}
            aria-disabled={disabled}
        >
            {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
            {label}
        </button>
    );
};

export default Button;
