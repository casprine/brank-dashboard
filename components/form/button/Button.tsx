import { ButtonProps } from 'types';

import generateStyles from './button.styles';

const Button = ({ children, ...rest }: ButtonProps) => {
  return <button css={generateStyles()}>{children}</button>;
};

export default Button;
