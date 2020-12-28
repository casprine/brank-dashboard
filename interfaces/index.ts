import React, { ReactNode } from 'react';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  value: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
