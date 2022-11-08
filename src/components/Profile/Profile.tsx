import { FC, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { USER_ID } from '../../utils/constants';
import Message from '../Message/Message';
import Preloader from '../Preloader/Preloader';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import styles from './Profile.module.scss';

const Profile: FC = () => {
  const { user, error, loading } = useTypeSelector(state => state.user);
  const { fetchUser, editAvatar } = useActions();
  const [isEditAvatarPressed, setIsEditAvatarPressed] = useState<boolean>(false);
  const { values, handleChange, errors, isValid, setValues, setErrors, setIsValid } = useFormAndValidation();

  const classImage: string = loading ? styles.profile__img_hidden : '';
  const classFormEditInfo: string = loading ? styles.profile__form_hidden : '';
  const classInputUrl: string = `${styles.form__input} ${styles.form__input_img} ${isEditAvatarPressed ? '' : styles.form__input_hidden} ${isValid ? '' : styles.form__input_type_error}`;

  const toggleEditAvatarButton: () => void = () => {
    isEditAvatarPressed ? setIsEditAvatarPressed(false) : setIsEditAvatarPressed(true);
  }

  const handleClickEditAvatar = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isEditAvatarPressed) {

    }

    toggleEditAvatarButton();
  }

  useEffect(() => {
    fetchUser(USER_ID);
  }, []);

  useEffect(() => {
    setValues({ name: user?.name, url: user?.img, email: user?.email });
    setErrors({});
    setIsValid(true);
  }, [user]);

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
          <form className={`${styles.form} ${classFormEditInfo}`} onSubmit={handleClickEditAvatar} noValidate>
            <input
              type='url'
              name='url'
              className={classInputUrl}
              value={values.url || ''}
              onChange={handleChange}
              required
              minLength={5}
            />
            <span className={`${styles.form__error} ${!isValid ? styles.form__error_active : ''}`}>
              {!isValid && errors.url}
            </span>
            <button className={styles.form__button} type='submit'>
              {isEditAvatarPressed ? 'Save' : 'Edit Avatar'}
            </button>
          </form>
          <form className={`${styles.form} ${classFormEditInfo}`} noValidate>
            <input
              type='text'
              name='name'
              className={`${styles.form__input} ${isValid ? '' : styles.form__input_type_error}`}
              value={values.name || ''}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={30}
            />
            <span className={`${styles.form__error} ${!isValid ? styles.form__error_active : ''}`}>
              {!isValid && errors.name}
            </span>
            <input
              type='email'
              name='email'
              className={`${styles.form__input} ${isValid ? '' : styles.form__input_type_error}`}
              value={values.email || ''}
              onChange={handleChange}
              required
              minLength={5}
            />
            <span className={`${styles.form__error} ${!isValid ? styles.form__error_active : ''}`}>
              {!isValid && errors.email}
            </span>
            <button className={styles.form__button}>Edit Profile</button>
          </form>
        </>
      }
    </main>
  );
}

export default Profile;
