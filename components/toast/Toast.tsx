import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flex } from 'components/layout';
import { add, remove } from './toastHelpers';

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
}

const Toast = () => {
  const [notifications, setNotifications] = useState([0]);

  return (
    <Flex>
      <div className="container">
        <ul>
          <AnimatePresence initial={false}>
            {notifications.map((id) => (
              <motion.li
                key={id}
                positionTransition
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              >
                <div onClick={() => setNotifications(remove(notifications, id))}>XX</div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <button className="add" onClick={() => setNotifications(add(notifications))}>
          +
        </button>
      </div>{' '}
    </Flex>
  );
};

export default Toast;
