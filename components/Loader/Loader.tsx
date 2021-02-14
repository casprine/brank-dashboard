import { keyframes } from '@emotion/react';

// components
import Flex from 'components/layout/Flex';

import theme from 'theme';

interface IProps {
  scheme?: 'light' | 'dark';
  color?: string;
  label?: string;
  size?: 'small' | 'large' | 'xsmall';
  className?: string;
}

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

const sizes = {
  small: '24px',
  large: '32px',
  xsmall: '16px',
};

const Loader: React.FC<IProps> = ({
  label,
  size = 'large',
  color = theme.colors.white,
  className,
}) => {
  return (
    <Flex
      className={className}
      ai="center"
      jc="center"
      css={{
        p: {
          color: color,
          fontFamily: theme.typography.fonts.sans,
        },
      }}
    >
      <Flex
        ai="center"
        jc="center"
        css={{
          height: sizes[size],
          width: sizes[size],
          borderRadius: '50%',
          borderWidth: size === 'large' ? '3px' : '2px',
          borderStyle: 'solid',
          borderColor: theme.colors.blackAlpha[100],
          position: 'relative',
          marginRight: label && '12px',
        }}
      >
        <div
          css={{
            height: sizes[size],
            width: sizes[size],
            borderRadius: '50%',
            borderWidth: size === 'large' ? '3px' : '2px',
            borderStyle: 'solid',
            borderColor: `${color} ${color} ${theme.colors.transparent} ${theme.colors.transparent}`,
            animation: `${loadingAnimation} 1.0s infinite linear`,
            flexShrink: 0,
          }}
        ></div>
      </Flex>
      {label && <p css={{ fontSize: size === 'xsmall' ? '13px' : '14px' }}>{label}</p>}
    </Flex>
  );
};

export default Loader;
