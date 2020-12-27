import { InputProps } from 'interfaces';
import styles from './input.module.css';

const Input = ({ label, value, ...rest }: InputProps) => {
  return (
    <div className={`${styles.formControl} form-control`}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} type="text" value={value} {...rest} />
    </div>
  );
};

export default Input;
