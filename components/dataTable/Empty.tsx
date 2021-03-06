import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as React from 'react';
import Icon from 'components/icon/Icon';
import theme from 'theme';
import { DefaultHTMLProps, IAction, IIcon, StyleFunction } from 'types';
import { Button } from 'components/form';
import { Stack } from 'components/layout';

export interface IEmptyProps {
  title?: string;
  description?: any;
  text?: string;
  icon?: IIcon;
  action?: IAction;
  isInline?: boolean;
}

const Empty: React.FC<IEmptyProps & DefaultHTMLProps<HTMLDivElement>> = ({
  className,
  title,
  description,
  text,
  action,
  icon,
  isInline,
}) => {
  const iconConfig = {
    name: ['fad', 'transporter-empty'],
    color: theme.colors.gray[400],
    size: '2x',
    ...icon,
  };

  return (
    <Stack
      jc="center"
      css={generateStyles}
      className={` ${className} empty-wrapper`}
      isInline={isInline}
    >
      <Icon
        className="icon"
        color={iconConfig.color}
        size={iconConfig.size as any}
        icon={iconConfig.name as IconProp}
      ></Icon>

      <Stack spacing={2}>
        {title && <h3 className="title">{title}</h3>}
        {text && !description && <p className="text">{text}</p>}
        {description && description}
      </Stack>

      {action && (
        <Button {...action} size="sm" appearance="outline">
          {action.label}
        </Button>
      )}
    </Stack>
  );
};

const generateStyles: StyleFunction = () => {
  return {
    minHeight: 200,
    maxWidth: 380,
    '.text': { fontSize: 14, color: theme.colors.gray[400] },
    '.title': {
      fontSize: 28,
      color: theme.colors.gray[700],
      fontFamily: theme.typography.fonts.bold,
    },
  };
};

export default Empty;
