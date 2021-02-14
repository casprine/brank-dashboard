import { ReactNode } from 'react';
import Link from 'next/link';
import { CSSObject } from '@emotion/react';

import Loader from 'components/Loader/Loader';
import { buttonAppearance, ButtonType, buttonSizes } from 'types';
import theme from 'theme';

const buttonDefaults: CSSObject = {
  height: '50px',
  borderRadius: '6px',
  border: '0',
  margin: '20px 0',
  backgroundColor: theme.colors.primary,
  boxShadow: theme.shadows.md,
  cursor: 'pointer',
  outline: 'none',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    boxShadow: '0px 0px 0px 4px rgb(0 0 0 / 20%)',
  },
};

export const buttonStyles: Record<buttonAppearance, CSSObject> = {
  primary: {
    ...buttonDefaults,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    boxShadow: 'rgba(20, 70, 32, 0.1) 0px 1px 0px, rgba(255, 255, 255, 0.03) 0px 2px 0px inset',
  },

  warning: {
    ...buttonDefaults,
    background: theme.colors.amber[500],
    color: theme.colors.white,
  },
  error: {
    ...buttonDefaults,
    background: theme.colors.red[500],
    color: theme.colors.white,
  },
  success: {
    ...buttonDefaults,
    background: theme.colors.green[500],
    color: theme.colors.white,
  },
  secondary: {
    ...buttonDefaults,
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
  },
  outline: {
    ...buttonDefaults,
    background: theme.colors.white,
    border: `1px solid ${theme.colors.gray[200]}`,
    color: theme.colors.gray[600],
    boxShadow: 'rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 2px 0px inset',
  },
  ghost: {
    ...buttonDefaults,
    background: 'transparent',
    color: theme.colors.primary,
  },
  disabled: {
    ...buttonDefaults,
    backgroundColor: theme.colors.gray[100],
    color: theme.colors.gray[300],
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
};

export const buttonSizesStyle = {
  xs: {
    padding: '0.5rem',
    height: '24px',
    fontSize: '12px',
    borderRadius: 6,
  },
  sm: {
    padding: '0 1.2em',
    height: '32px',
    fontSize: '13px',
    borderRadius: 6,
  },
  md: {
    padding: '0 1.2em',
    height: '40px',
    fontSize: '14px',
    borderRadius: 6,
  },
  lg: {
    padding: '1rem',
    height: '3rem',
    fontSize: '1rem',
    borderRadius: 6,
  },
};

export interface IButton {
  id?: string;
  size?: buttonSizes;
  type?: ButtonType;
  appearance?: buttonAppearance;
  path?: string;
  styles?: CSSObject;
  isLoading?: boolean;
  isDisabled?: boolean;
  action?(args?: any): void;
  align?: 'left' | 'right' | 'center';
  disabledHelperText?: string;
  className?: string;
  loaderText?: string;
  isAnchor?: boolean;
  background?: string;
  prependComponent?: ReactNode;
  prependComponentContainerStyle?: CSSObject;
  appendComponent?: ReactNode;
  appendComponentContainerStyle?: CSSObject;
}

const Button: React.FC<IButton> = ({
  size = 'md',
  type = 'button',
  appearance = 'primary',
  loaderText = 'Loading',
  path,
  id,
  styles,
  isLoading = false,
  action = () => {},
  align = 'center',
  isDisabled = false,
  className,
  children,
  background,
}) => {
  if (path) {
    return (
      <Link
        css={{
          ...buttonStyles[isDisabled ? 'disabled' : appearance],
          ...buttonSizesStyle[size],
          ...styles,
          pointerEvents: isDisabled || isLoading ? 'none' : 'all',
          display: 'flex',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
        }}
        href={path as string}
      >
        <span
          id={id}
          className={className}
          css={{
            width: '100%',
            textAlign: align === 'center' ? 'center' : 'left',
          }}
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      id={id}
      className={className}
      css={{
        ...buttonStyles[isDisabled ? 'disabled' : appearance],
        ...buttonSizesStyle[size],
        ...styles,
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        textAlign: align === 'center' ? 'center' : 'left',
        pointerEvents: isDisabled || isLoading ? 'none' : 'all',
        background: background ? background : buttonStyles[appearance]['background'],
        alignItems: 'center',
      }}
      onClick={action}
    >
      {isLoading ? (
        <Loader size="xsmall" label={loaderText} color={buttonStyles[appearance].color as string} />
      ) : (
        <>{children}</>
      )}
    </button>
  );

  // return (
  //   <button type={type} css={generateStyles()}>
  //     {children}
  //   </button>
  // );
};

export default Button;
