import React from 'react';
import { IInputProps } from 'types';

import inputStyles from './input.styles';

export const inputSizes = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
};

const Input: React.FC<IInputProps> = ({ label, value, placeholder, onChange, className = '' }) => {
  return (
    <div css={inputStyles()} className={`${className} input-container`}>
      {label && <label>{label}</label>}
      <input
        type="text"
        className="input"
        value={value as string}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
