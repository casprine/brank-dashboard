import React, { ReactNode } from 'react';
import { CSSObject } from 'styled-components';
export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  value: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export type StyleFunction<T> = (props?: Partial<T>) => CSSObject;
