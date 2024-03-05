import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={`input-wrapper ${className}`}>
            {label && <label>{label}</label>}
            <div className="input-group">
                {icon && <FontAwesomeIcon icon={icon} />}
                <input
                    type={type}
                    className={className}
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes}
                />
            </div>
        </div>
    );
};

Input.defaultProps = {
    label: '',
    type: 'text',
    className: '',
    value: '',
    setValue: () => { },
    icon: null,
    inputAttributes: {},
};

export default Input;
