import { FC } from 'react';
import styles from './Message.module.scss';

interface MessageProps {
  text: string;
}

const Message: FC<MessageProps> = ({ text }) => {
  return (
    <p className={styles.message}>
      {text}
    </p>
  );
}

export default Message;
