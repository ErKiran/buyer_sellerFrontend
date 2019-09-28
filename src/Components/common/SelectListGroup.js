import React from 'react';

const SelectListGroup = ({ name, value, onChange, options, className, input, id }) => {
    const selectOptions = options.map(option => (
        <option key={option} value={option}>
            {option}
        </option>

    ));
    return (
        <select
            className={className}
            {...input}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
        >
            {selectOptions}
        </select>
    );
};

export default SelectListGroup;