import React from "react";
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ label, className, onClick, icon, buttonAttributes, type = 'button' }) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
            onClick={onClick}
            {...buttonAttributes}
        >
            {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
            {label}
        </button>
    );
};

export default Button;
