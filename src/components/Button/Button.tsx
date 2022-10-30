import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  modifier?: string;
}

const Button: FC<ButtonProps> = ({ text, modifier }) => {
  return (
    <button className={`${styles.button} ${modifier ? modifier : ''}`} type='button'>
      {text}
    </button>
  );
}

export default Button;
