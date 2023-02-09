import React, { useState } from 'react';
import { Field } from 'react-final-form';

import './FieldSelectInput.scss';

type Option = {
    key: string;
    text: string;
};

type FieldSelectInputProps = {
    // placeholder: string;
    name: string;
    options: Option[];
    label?: string;
    validate?: any;
};

const FieldSelectInput: React.FC<FieldSelectInputProps> = (props) => {
    const { /*placeholder,*/ name, options, label, validate } = props;

    return (
        <div className='select-input'>
            <label className="select-input__label">{label}</label>
            <Field
                name={name}
                component="select"
                className="select-input__input"
                validate={validate}
                defaultValue={options[0].key}
            >
                {options.map(o => (
                    <option key={o.key} value={o.key} className="select-input__input__option">
                        {o.text}
                    </option>
                ))}
            </Field>
            <svg className="select-input__carret" width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7L14 0H0L7 7Z" fill="#5DD9F2"/>
            </svg>
        </div>
    )
};

export default FieldSelectInput;