import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes, hidden, setHidden, togglePassword }) => {

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    // const inputId = inputAttributes && inputAttributes.id ? inputAttributes.id : '';
    const inputType = type === 'password' ? 'hidden' ? 'password' : 'text' : type;

    return (
        <div className={`input-group ${className}`}>
            <div className='label-icon-wrapper'>
                {icon && <FontAwesomeIcon icon={icon} className="icon-default" />}
                {label && <label>{label}</label>}
            </div>
            <div className="input-wrapper">
                <input
                    type={inputType}
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes}
                />
            {type === 'password' && (
                <FontAwesomeIcon
                    icon={hidden ? faEye : faEyeSlash}
                    className="toggle-password-icon"
                    onClick={togglePassword}
                />
            )}
            </div>
        </div>
    );
}

export default Input;
