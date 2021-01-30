import * as React from 'react';
import { CSSObject } from '@emotion/react';
import theme from 'theme';

interface IProps {
  gap?: string | number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  className?: string;
  isStreched?: boolean;
}

const Grid: React.FC<IProps> = ({
  gap = '20px',
  lg = 12,
  md,
  sm,
  xl,
  xxl,
  children,
  className = '',
  isStreched = false,
}) => {
  return (
    <div
      className={`grid ${className}`}
      css={{
        display: 'grid',
        height: isStreched ? '100%' : 'auto',
        gridTemplateColumns: `repeat(${lg},1fr)`,
        gridGap: gap,

        [theme.breakpoints.sm]: {
          gridTemplateColumns: sm && `repeat(${sm},1fr) !important`,
        },

        [theme.breakpoints.md]: {
          gridTemplateColumns: md && `repeat(${md},1fr) !important`,
        },
        [theme.breakpoints.lg]: {
          gridTemplateColumns: lg && `repeat(${lg},1fr) !important`,
        },
        [theme.breakpoints.xl]: {
          gridTemplateColumns: xl && `repeat(${xl},1fr) !important`,
        },

        [theme.breakpoints.xxl]: {
          gridTemplateColumns: xxl && `repeat(${xxl},1fr) !important`,
        },
      }}
    >
      {children}
    </div>
  );
};

interface IGridItemProps {
  span?: string | number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  className?: string;
  styles?: CSSObject;
}

export const GridItem: React.FC<IGridItemProps> = ({
  children,
  span,
  xxl,
  sm,
  md,
  lg,
  xl,
  className = '',
}) => {
  return (
    <div
      className={`${className} grid-item`}
      css={{
        gridColumn: `span ${span}`,
        [theme.breakpoints.xxl]: {
          gridColumn: xxl && `span ${xxl} !important`,
        },
        [theme.breakpoints.sm]: { gridColumn: sm && `span ${sm} !important` },
        [theme.breakpoints.md]: { gridColumn: md && `span ${md} !important` },
        [theme.breakpoints.lg]: { gridColumn: lg && `span ${lg} !important` },
        [theme.breakpoints.xl]: {
          gridColumn: xl && `span ${xl} !important`,
        },
      }}
    >
      {children}
    </div>
  );
};

// @ts-ignore
Grid.GridItem = GridItem;

export default Grid;
