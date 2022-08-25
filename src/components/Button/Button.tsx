import React from 'react';
import styles from './Button.module.scss';

interface Props {
  text: string;
  modifier?: string;
}

const Button: React.FC<Props> = ({ text, modifier }) => {
  return (
    <button className={`${styles.button} ${modifier ? modifier : ''}`} type='button'>
      {text}
    </button>
  );
}

export default Button;
