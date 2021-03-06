import * as React from 'react';
import { CSSObject } from '@emotion/react';
import theme from 'theme';

interface IProps {
  gap?: number;
  styles?: CSSObject;
  color?: string;
  className?: string;
}

const Separator: React.FC<IProps> = ({
  gap = 16,
  styles,
  color = theme.colors.gray[100],
  className,
}) => {
  return (
    <div
      className={`separator ${className}`}
      css={{
        height: '1px',
        background: color,
        margin: `${gap}px 0`,
        width: '100%',
        ...styles,
      }}
    ></div>
  );
};

export default Separator;
