import React from 'react';
import { IInputProps } from 'types';

import inputStyles from './input.styles';
type InputPropsType = React.HTMLAttributes<HTMLInputElement>;

export const inputSizes = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
};

const Input: React.FC<IInputProps & InputPropsType> = ({
  type = '',
  label,
  value,
  placeholder,
  onChange,
  className = '',
}) => {
  return (
    <div css={inputStyles()} className={`${className} input-container`}>
      {label && <label>{label}</label>}
      <input
        className="input"
        value={value as string}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;
