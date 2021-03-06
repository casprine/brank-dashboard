import * as React from 'react';
import theme from 'theme';
import { Flex } from 'components/layout';
import Icon from 'components/icon/Icon';
import { Button } from 'components/form';
import generateStyles, { styleMapping } from './toast.styles';

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
  id?: ToastId;
  isClosed?: boolean;
  renderToast?(...args: any): any;
  onCloseComplete?(): void;
  onClose?(id: ToastId, position: ToastPosition): void;
  hide?(): void;
}

const Toast: React.FC<IToast> = ({
  title,
  description,
  onClose,
  duration = 5000,
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
      hide && hide();
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay]);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} css={generateStyles({ type })}>
      {renderToast ? (
        renderToast({ close: onClose })
      ) : (
        <Flex ai={description ? 'flex-start' : 'center'} className="toast">
          {type === 'success' && (
            <Flex
              className="status-icon-container"
              ai="center"
              jc="center"
              css={{ backgroundColor: theme.colors.green[400] }}
            >
              <Icon icon={['fas', 'check']} size="xs" color={theme.colors.green[900]} />
            </Flex>
          )}

          <div css={{ width: 'calc(100% - 30px)', marginRight: '40px' }}>
            <p className="title">{title}</p>
            {description && <p className="description">{description}</p>}
          </div>
          <Button action={hide} appearance="ghost" className="close-btn">
            <Icon size="sm" icon={['far', 'times']} color={styleMapping[type].title} />
          </Button>
        </Flex>
      )}
    </div>
  );
};

export default Toast;
