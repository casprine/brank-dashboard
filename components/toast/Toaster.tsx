import * as React from 'react';
import { render } from 'react-dom';

// components
import ToastManager, { IMethods } from './ToastManager';
import { IToast } from './Toast';

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const portalId = 'toast-portal';

class Toaster {
  private createToast?: IMethods['notify'];

  constructor() {
    if (!isBrowser) {
      return;
    }

    let portal;
    const existingPortal = document.getElementById(portalId);
    if (existingPortal) {
      portal = existingPortal;
    } else {
      const div = document.createElement('div');
      div.id = portalId;
      document.body.appendChild(div);
      portal = div;
    }

    render(<ToastManager registerMethods={this.bindFunctions} />, portal);
  }

  private bindFunctions = (methods: any) => {
    this.createToast = methods.notify;
  };

  notify = (options: IToast) => {
    this.createToast?.(options);
  };
}

export const toast = new Toaster();
