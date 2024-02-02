import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export function InputText({ type, name, placeholder, onChange, classNameinvalid, spanError, disabled }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);

        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <label className='inputContainer'>
            <input
                type={type}
                className={`inputText ${classNameinvalid}`}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                disabled={disabled}
            />
            <span className={`spanText ${spanError}`}>Error text</span>   
        </label>
    );
}

InputText.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    classNameinvalid: PropTypes.string,
    spanError: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};