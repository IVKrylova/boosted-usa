import { FC, useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { USER_ID } from '../../utils/constants';
import Message from '../Message/Message';
import Preloader from '../Preloader/Preloader';
import FormEditeAvatar from '../FormEditeAvatar/FormEditeAvatar';
import FormEditeProfileInfo from '../FormEditeProfileInfo/FormEditeProfileInfo';
import styles from './Profile.module.scss';

const Profile: FC = () => {
  const { user, error, loading } = useTypeSelector(state => state.user);
  const { fetchUser } = useActions();

  const classImage: string = loading ? styles.profile__img_hidden : '';
  const classFormEditInfo: string = loading ? styles.profile__form_hidden : '';

  useEffect(() => {
    fetchUser(USER_ID);
  }, []);

  return (
    <main className={styles.profile}>
      <Preloader
        isLoading={loading}
      />
      {user === null && typeof(error) === 'string' ?
        <Message
          text={error}
        /> :
        <>
          <img className={`${styles.profile__img} ${classImage}`} src={user?.img} alt={user?.name} />
          <FormEditeAvatar
            classFormEditInfo={classFormEditInfo}
          />
          <FormEditeProfileInfo
            classFormEditInfo={classFormEditInfo}
          />
        </>
      }
    </main>
  );
}

export default Profile;
