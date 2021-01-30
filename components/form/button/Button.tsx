import { ButtonProps } from 'types';

import generateStyles from './button.styles';

const Button = ({ children }: ButtonProps) => {
  return <button css={generateStyles()}>{children}</button>;
};

export default Button;
