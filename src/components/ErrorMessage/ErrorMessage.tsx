import { FC } from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  isLoading: boolean;
  text: string | null;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ isLoading, text }) => {
  return (
    <p className={`${styles.errorMessage} ${isLoading ? styles.errorMessage_visible : ''}`}>
      {text}
    </p>
  );
}

export default ErrorMessage;
