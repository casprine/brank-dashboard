import React, { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

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

export interface IApplicationProps {
  name: string;
  public_key: string;
  created_at: string;
  environment: 'staging' | 'production';
  description?: string;
  id: number;
  logo: string;
  access_token: string;
  callback_url: string;
}

export type func = () => void;
export interface IAppLink {
  code: string;
  environment: 'development' | 'production';
  state: 'claimed' | 'unclaimed';
  created_at: Date | string;
  id: number;
}

export interface ITable {
  headings?: string[];
  rows?: any[];
  hasCheckbox?: boolean;
  title?: string;
  className?: string;
  hasFooter?: boolean;
  paginationOptions?: IPagination;
  columnsToSearch?: string[] | string;
  rowSelection?: IRowSelection;
  tableHeaderRow?: any;
  showPagination?: boolean;
}
export interface IPagination {
  totalRecords?: number;
  pageLimit?: number;
  pageNeighbours?: number;
  currentPage?: number;
  onPageChange?: (args: IPagination) => void;
  onPageLimitChange?: (pageLimit: number) => void;
}

export interface IRowSelection {
  type: 'checkbox' | 'radio';
}

export interface IAction {
  label: string;
  function?: func;
  buttonAppearance?: buttonAppearance;
  path?: string;
  color?: string;
  // buttonProps?: IButton;
}

export interface ITableColumn {
  title: string;
  dataIndex: string;
  key: string;
  render?(cellData?: any, rowData?: any): any;
  cellStyle?: CSSObject | {};
  span?: number;
}
