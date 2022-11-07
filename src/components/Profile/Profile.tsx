import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { USER_ID } from '../../utils/constants';
import Message from '../Message/Message';
import styles from './Profile.module.scss';

const Profile: FC = () => {
  const { user, error } = useTypeSelector(state => state.user);
  const { fetchUser } = useActions();

  useEffect(() => {
    fetchUser(USER_ID);
  }, []);

  return (
    <main className={styles.profile}>
      {user === null && typeof(error) === 'string' ?
        <Message
          text={error}
        /> :
        <>
          <img className={styles.profile__img} src={user?.img} alt={user?.name} />
          <form className={styles.form}>
            <input type='text' className={styles.form__input} value={user?.name} />
            <span className={styles.form__error}></span>
            <input type='email' className={styles.form__input} value={user?.email} />
            <span className={styles.form__error}></span>
            <button className={styles.form__button}></button>
          </form>
          <form className={styles.form}>
            <input type='url' className={styles.form__input} />
            <span className={styles.form__error}></span>
            <button className={styles.form__button}></button>
          </form>
        </>
      }
    </main>
  );
}

export default Profile;
