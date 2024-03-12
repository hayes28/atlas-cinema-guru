import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <span className={"input-wrapper " + className}>
            <label>
                {icon && <FontAwesomeIcon icon={icon} className={icon} />}
                {label};
            </label>
            <input type={type} value={value} onChange={handleInput} {...inputAttributes} />
        </span>
    );
}

export default Input;
