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
  onBlur,
  name,
  error,
  disabled,
}) => {
  return (
    <div
      css={inputStyles({
        hasError: Boolean(error),
        disabled,
      })}
      className={`${className} input-container`}
    >
      {label && <label>{label}</label>}
      <input
        className="input"
        value={value as string}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={name}
        disabled={disabled}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
