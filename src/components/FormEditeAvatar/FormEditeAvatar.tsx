import { FC, useState, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { USER_ID } from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import styles from './FormEditeAvatar.module.scss';

interface FormEditeAvatarProps {
  classFormEditInfo: string;
}

const FormEditeAvatar: FC<FormEditeAvatarProps> = ({ classFormEditInfo }) => {
  const { user, error, loading } = useTypeSelector(state => state.user);
  const [isEditAvatarPressed, setIsEditAvatarPressed] = useState<boolean>(false);
  const { editAvatar } = useActions();
  const { values, handleChange, errors, isValid, setValues, setErrors, setIsValid } = useFormAndValidation();

  const classInputUrl: string = `${styles.form__input} ${styles.form__input_img} ${isEditAvatarPressed ? '' : styles.form__input_hidden} ${isValid ? '' : styles.form__input_type_error}`;
 /*  const classFormEditInfo: string = loading ? styles.profile__form_hidden : ''; */

 const toggleEditAvatarButton: () => void = () => {
  isEditAvatarPressed ? setIsEditAvatarPressed(false) : setIsEditAvatarPressed(true);
}

 const handleEditAvatar = (evt: React.FormEvent<HTMLFormElement>) => {
  evt.preventDefault();

  if (isEditAvatarPressed) {
    editAvatar(USER_ID, values.url);
  }

  toggleEditAvatarButton();
}

useEffect(() => {
  setValues({ url: user?.img });
  setErrors({});
  setIsValid(true);
}, [user]);

  return (
    <form className={`${styles.form} ${classFormEditInfo}`} onSubmit={handleEditAvatar} noValidate>
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
      <button
        className={`${styles.form__button} ${isValid ? '' : styles.form__button_disabled}`}
        type='submit'
        disabled={!isValid}
      >
        {isEditAvatarPressed ? 'Save' : 'Edit Avatar'}
       </button>
    </form>
  );
}

export default FormEditeAvatar;
