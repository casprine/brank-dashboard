import * as React from 'react';
import { CSSObject } from '@emotion/react';
import Link from 'next/link';

// theme
import theme from 'theme';

// utils
import { func } from 'types';

interface IProps {
  isHeader?: boolean;
  styles?: CSSObject;
  extendedStyles?: CSSObject;
  onClick?: func;
  path?: string;
  className?: string;
  span?: number;
  index?: number;
}

const cellStyle: CSSObject = {
  textAlign: 'left',
  width: 'auto',
  padding: '12px 0',
  textTransform: 'capitalize',
  fontSize: 14,
  color: theme.colors.gray[600],
  p: { fontSize: 14 },
};

const Cell: React.FC<IProps> = ({
  isHeader = false,
  children,
  styles,
  onClick,
  path = '',
  className,
  span = 1,
  index,
}) => {
  return isHeader ? (
    <th
      onClick={onClick}
      css={{
        ...cellStyle,
        ...styles,
        color: theme.colors.black,
        textTransform: 'uppercase',

        paddingLeft: index === 0 ? '24px' : '24px',
      }}
      className={className}
    >
      <h5
        css={{
          fontFamily: theme.typography.fonts.sans,
          fontSize: 15,
          fontWeight: 800,
        }}
      >
        {children}
      </h5>
    </th>
  ) : (
    <td
      colSpan={span}
      onClick={onClick}
      css={{
        ...cellStyle,
        ...styles,
        paddingLeft: index === 0 ? '24px' : '24px',
        a: { width: '100%', height: '100%', display: 'block' },
      }}
      className={className}
    >
      {path ? <Link href={path}>{children}</Link> : children}
    </td>
  );
};

export default Cell;
