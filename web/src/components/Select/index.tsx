import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface IOption {
  value: string;
  label: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<IOption>;
}

const Select: React.FC<Props> = ({ label, name, options, ...rest }) => {
  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <select value='' id={name} {...rest}>
        <option value='' disabled hidden>
          Select an option
        </option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
