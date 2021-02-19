/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { CSSObject } from '@emotion/react';
import Toast, { ToastPosition, IToast, ToastId } from './Toast';
import { AnimatePresence, motion } from 'framer-motion';
export interface IMethods {
  notify(options: IToast): void;
}

interface IProps {
  registerMethods(methods: IMethods): void;
}

type State = { [K in ToastPosition]: IToast[] };
type ManagerStyles = { [K in ToastPosition]?: CSSObject };

const managerStyles: ManagerStyles = {
  top: { top: 0, left: 0, right: 0, margin: '0 auto' },
  topLeft: { top: 0, left: 0 },
  topRight: { top: 0, right: 0 },
  bottom: { bottom: 0, left: 0, right: 0, margin: '0 auto' },
  bottomLeft: { bottom: 0, left: 0 },
  bottomRight: { bottom: 0, right: 0 },
};

const defaultState = {
  top: [],
  topLeft: [],
  topRight: [],
  bottom: [],
  bottomLeft: [],
  bottomRight: [],
};

let counter: number = 0;

const ToastManager: React.FC<IProps> = ({ registerMethods }) => {
  const notify = (options: IToast) => {
    const toast = createToast(options);
    setState((prevToasts) => {
      return {
        ...prevToasts,
        [options.position]: [...prevToasts[options.position], toast],
      };
    });
  };

  const methods = {
    notify,
  };
  registerMethods(methods);

  const [state, setState] = React.useState<State>(defaultState);

  const createToast = (options: IToast): IToast => {
    const id: ToastId = ++counter;

    return {
      ...options,
      isClosed: false,
      onClose: destroy,
      id: id,
    };
  };
  const destroy = (id: ToastId, position: ToastPosition) => {
    const filteredToasts = state[position].filter((toast: IToast) => {
      return toast.id !== id;
    });
    setState({ ...state, [position]: filteredToasts });
  };

  return (
    <>
      {Object.keys(state).map((position, index) => {
        return (
          <span
            css={{
              position: 'fixed',
              maxWidth: '600px',
              zIndex: 9999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              ...managerStyles[position as ToastPosition],
            }}
            key={index}
          >
            <AnimatePresence>
              {state[position as ToastPosition].map((toast: IToast) => {
                return (
                  <motion.li
                    key={toast.id}
                    layout
                    initial={{ opacity: 0, y: 50, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0 }}
                  >
                    <Toast
                      key={toast.id}
                      {...toast}
                      hide={() => destroy(toast?.id, toast.position)}
                    />
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </span>
        );
      })}
    </>
  );
};

export default ToastManager;
