import React, { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import { Icon, IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export type StyleFunction = (props?: any) => CSSObject;

export type DefaultHTMLProps<E> = React.DetailedHTMLProps<React.HTMLAttributes<E>, E>;

export type funcWithArgs = (e: any) => void;

export type InputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IInputProps {
  size?: InputSize;
  label?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string | number | Date;
  defaultValue?: string;
  type?: 'text' | 'password' | 'date' | 'email' | 'number';
  display?: 'flex' | 'block';
  onFocus?: (args: any) => void;
  onChange?: (args: any) => void;
  onBlur?: (args: any) => void;
  onKeyUp?: (args: any) => void;
  onKeyDown?: (args: any) => void;
  error?: string;
  showErrorMessage?: boolean;
  styles?: CSSObject;
  className?: string;
  disabled?: boolean;
  autocomplete?: 'off' | 'on' | 'new-password';
  max?: number;
  min?: number;
  isRequired?: boolean;
}

export interface IRoute {
  label?: string;
  icon?: string;
  path?: string;
  pathPrefix?: string;
  action?: () => void;
  active?: boolean;
}

export interface IIcon {
  name: IconProp;
  color?: string;
  size?: string;
}

export type Dict<T = any> = Record<string, T>;

export type buttonAppearance =
  | 'primary'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'disabled'
  | 'warning'
  | 'success'
  | 'error';
export type buttonSizes = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonType = 'submit' | 'reset' | 'button';

export interface IMetric {
  icon: IconName;
  title: string;
  footer?: string;
}
