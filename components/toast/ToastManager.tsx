/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { CSSObject } from '@emotion/react';
import Toast, { ToastPosition, IToast, ToastId } from './Toast';
import { AnimatePresence, motion } from 'framer-motion';
export interface IMethods {
  notify(options: IToast): void;
}

interface Props {
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

class ToastManager extends React.PureComponent<Props, State> {
  static counter = 0;

  constructor(props: Props) {
    super(props);
    const methods = {
      notify: this.notify,
    };
    props.registerMethods(methods);
  }

  state = {
    top: [],
    topLeft: [],
    topRight: [],
    bottom: [],
    bottomLeft: [],
    bottomRight: [],
  };

  notify = (options: IToast) => {
    const toast = this.createToast(options);
    this.setState((prevToasts) => {
      return {
        ...prevToasts,
        [options.position]: [...prevToasts[options.position], toast],
      };
    });
  };
  createToast = (options: IToast): IToast => {
    const id: ToastId = ++ToastManager.counter;

    return {
      ...options,
      isClosed: false,
      onClose: this.destroy,
      id: id,
    };
  };

  close = (id: ToastId, position: ToastPosition) => {
    this.setState({
      ...this.state,
      [position]: this.state[position].map((toast: IToast) => {
        return { ...toast, isClosed: toast.id === id };
      }),
    });
  };

  destroy = (id: ToastId, position: ToastPosition) => {
    const filteredToasts = this.state[position].filter((toast: IToast) => {
      return toast.id !== id;
    });
    this.setState({ ...this.state, [position]: filteredToasts });
  };

  render() {
    return Object.keys(this.state).map((position, index) => {
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
            {this.state[position as ToastPosition].map((toast: IToast) => {
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
                    onClose={() => this.destroy(toast?.id, toast.position)}
                  />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </span>
      );
    });
  }
}

export default ToastManager;
