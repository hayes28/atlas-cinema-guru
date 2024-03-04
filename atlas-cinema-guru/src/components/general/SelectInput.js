import React from 'react';
import 'general.css';

const SelectInput = ({ label, options, className, value, setValue, inputAttributes }) => {

    const handleSelect = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={`select-input-wrapper ${className}`}>
            {label && <label>{label}</label>}
            <select
                value={value}
                onChange={handleSelect}
                {...inputAttributes}
                className={`select-input ${className}`}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

SelectInput.defaultProps = {
    label: '',
    options: [],
    className: '',
    value: '',
    setValue: () => { },
    inputAttributes: {},
};

export default SelectInput;
