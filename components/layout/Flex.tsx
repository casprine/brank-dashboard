import * as React from 'react';
import { CSSObject } from 'styled-components';
import { DefaultHTMLProps, funcWithArgs } from 'types';

export interface IFlex {
  stack?: boolean;
  ai?: 'center' | 'flex-start' | 'flex-end';
  jc?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
  className?: string;
  id?: string;
  onClick?: funcWithArgs;
  onBlur?: funcWithArgs;
  styles?: CSSObject;
  tabIndex?: number;
}

const Flex: React.FC<IFlex & DefaultHTMLProps<HTMLDivElement>> = ({
  tabIndex,
  children,
  ai = '',
  jc = '',
  stack = false,
  className,
  onClick,
  styles,
  onBlur,
  id,
  ...rest
}) => {
  return (
    <div
      id={id}
      tabIndex={tabIndex}
      onClick={onClick}
      onBlur={onBlur}
      className={className}
      style={{
        display: 'flex',
        flexDirection: stack ? 'column' : 'row',
        alignItems: ai,
        justifyContent: jc,
        cursor: 'pointer',
        ...styles,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Flex;
