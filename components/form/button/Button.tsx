import { ButtonProps } from 'interfaces';
import styles from './button.module.css';

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className={`${styles.btn} ${styles.btnSucesss}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
