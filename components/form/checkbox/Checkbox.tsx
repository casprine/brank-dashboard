import React, { useState } from 'react';
import { Flex } from 'components/layout';
import theme from 'theme';
import { InputSize } from 'types';
import { CSSObject } from '@emotion/react';
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
  size = 'md',
  hasBorder = true,
  customLabel,
}) => {
  const [isChecked, setChecked] = useState(checkedStatus);

  const inputSize = tagSizeStyles[size];

  return (
    <div css={generateStyles({ size: inputSize, hasBorder, color })} className={className}>
      <input type="checkbox" name={id} id={id} checked={isChecked} />

      <label htmlFor={id}>
        <Flex
          className="custom-box"
          ai="center"
          jc="center"
          onClick={() => {
            setChecked(!isChecked);
            onChange && onChange({ target: { name, value: !isChecked } });
          }}
        >
          <div className="check"></div>
        </Flex>
        <div className="label">{customLabel || label}</div>
      </label>
    </div>
  );
};

export default Checkbox;
