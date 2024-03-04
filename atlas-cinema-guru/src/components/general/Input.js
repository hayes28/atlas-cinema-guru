import React from 'react';
import 'general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={`input-wrapper ${className}`}>
            {label && <label>{label}</label>}
            <div className="input-group">
                {icon && <span className="input-icon">{icon}</span>}
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
