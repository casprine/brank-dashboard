import * as React from 'react';
import { CSSObject } from '@emotion/react';
import { IconName } from '@fortawesome/fontawesome-svg-core';

// components
import { Flex } from 'components/layout';
import Icon from 'components/icon/Icon';

// theme
import theme from 'theme';

/** @jsxImportSource @emotion/core */

interface IProps {
  message?: string;
  type?: 'error' | 'success' | 'warning' | 'info';
  styles?: CSSObject;
  className?: string;
}

const styleMapping = {
  error: {
    foreground: theme.colors.red[400],
    background: theme.colors.red[50],
    icon: 'exclamation-circle',
  },
  success: {
    foreground: theme.colors.green[400],
    background: theme.colors.green[50],
    icon: 'check-circle',
  },
  warning: {
    foreground: theme.colors.yellow[400],
    background: theme.colors.yellow[50],
    icon: 'exclamation-triangle',
  },
  info: {
    foreground: theme.colors.blue[400],
    background: theme.colors.blue[50],
    icon: 'info-circle',
  },
};

const Alert: React.FC<IProps> = ({ type = 'info', message, styles, className, children }) => {
  return (
    <Flex
      className={className}
      ai="center"
      css={{
        height: '50px',
        width: '100%',
        background: styleMapping[type].background,
        padding: '0 12px',
        borderRadius: '4px',
        ...styles,
      }}
    >
      <Icon
        style={{ marginRight: '8px' }}
        color={styleMapping[type].foreground}
        icon={styleMapping[type].icon as IconName}
      ></Icon>
      {message && (
        <p
          css={{
            fontSize: '13px',
            color: `${theme.colors.secondary}!important`,
            '&:first-letter': { textTransform: 'uppercase' },
          }}
        >
          {message}
        </p>
      )}
      <div>{children}</div>
    </Flex>
  );
};

export default Alert;
