import * as React from 'react';
import theme from 'theme';
import { Flex } from 'components/layout';
import Icon from 'components/icon/Icon';
import { Button } from 'components/form';

export type ToastId = number | string;

export type ToastPosition =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';

export type ToastType = 'error' | 'success' | 'warning' | 'info' | 'basic';

export interface IToast {
  title: string;
  duration?: number;
  description?: string;
  position: ToastPosition;
  type?: ToastType;
  id: ToastId;
  isClosed?: boolean;
  renderToast?(...args: any): any;
  onCloseComplete?(): void;
  onClose?(id: ToastId, position: ToastPosition): void;
  hide(): void;
}

const Toast: React.FC<IToast> = ({
  title,
  description,
  onClose,
  duration = 10000,
  renderToast,
  type = 'basic',
  hide,
}) => {
  const [delay, setDelay] = React.useState(duration);

  function onMouseEnter() {
    setDelay(null as any);
  }

  function onMouseLeave() {
    setDelay(duration);
  }

  React.useEffect(() => {
    if (delay == null) {
      return;
    }
    const id = setTimeout(() => {
      hide();
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay]);

  const styleMapping = {
    error: {
      background: theme.colors.red[500],
      color: theme.colors.white,
    },
    success: {
      background: theme.colors.green[500],
      color: theme.colors.white,
    },
    warning: {
      background: theme.colors.yellow[500],
      color: theme.colors.gray[600],
    },
    info: {
      background: theme.colors.blue[500],
      color: theme.colors.white,
    },
    basic: {
      background: theme.colors.white,
      color: theme.colors.gray[600],
    },
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      css={{
        padding: '4px',
        transition: 'all 0.3s ease-in-out',
        willChange: 'transform, opacity, height',
      }}
    >
      {renderToast ? (
        renderToast({ close: onClose })
      ) : (
        <Flex
          ai="center"
          css={{
            padding: '2px 12px',
            minHeight: '40px',
            background: styleMapping[type].background,
            borderRadius: '4px',
            width: 'auto',
            minWidth: '300px',
            flexGrow: 0,
          }}
        >
          <div css={{ width: 'calc(100% - 20px)', marginRight: '40px' }}>
            <p
              css={{
                color: styleMapping[type].color,
                fontFamily: theme.typography.fonts.regular,
              }}
            >
              {title}
            </p>
            {description && <p css={{ color: theme.colors.whiteAlpha[700] }}>{description}</p>}
          </div>
          <Button
            action={hide}
            appearance="ghost"
            css={{
              height: '30px',
              padding: 0,
              width: '30px',
              borderRadius: '4px',
              flexShrink: 0,
              '&:hover': { background: theme.colors.whiteAlpha[200] },
            }}
          >
            <Icon size="sm" color={styleMapping[type].color} icon={['far', 'times']}></Icon>
          </Button>
        </Flex>
      )}
    </div>
  );
};

export default Toast;
