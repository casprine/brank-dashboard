import React, { useState } from 'react';
import { CSSObject } from 'styled-components';
import { Flex } from 'components/layout';
import theme from 'theme';
import { InputSize } from 'types';
import { IInputProps } from 'types';
import generateStyles from './checkbox.styles';

const tagSizeStyles: Record<InputSize, number> = {
  sm: 16,
  md: 20,
  lg: 32,
  xl: 40,
};

interface IProps extends IInputProps {
  label?: string;
  id?: string;
  name?: string;
  styles?: CSSObject;
  isChecked?: boolean;
  color?: string;
  hasBorder?: boolean;
  customLabel?: React.ReactNode;
}

const Checkbox: React.FC<IProps> = ({
  label,
  id,
  name,
  onChange,
  className,
  color = theme.colors.primary,
  isChecked: checkedStatus,
  size = 'sm',
  hasBorder = false,
  customLabel,
}) => {
  const [isChecked, setChecked] = useState(checkedStatus);

  const inputSize = tagSizeStyles[size];

  return (
    <div css={generateStyles({ size: inputSize })}>
      <input
        onChange={() => {
          setChecked(!isChecked);
          onChange && onChange({ target: { name, value: !isChecked } });
        }}
        type="checkbox"
        name={id}
        id={id}
        checked={isChecked}
      />

      <label style={{ display: 'flex' }} htmlFor={id}>
        <Flex className="custom-box" ai="center" jc="center">
          <div className="check"></div>
        </Flex>
        {customLabel ? <>{customLabel}</> : <div className="label">{label}</div>}
      </label>
    </div>
  );
};

export default Checkbox;
