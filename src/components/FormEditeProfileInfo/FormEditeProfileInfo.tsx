import { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { USER_ID } from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import styles from './FormEditeProfileInfo.module.scss';

interface FormEditeProfileInfoProps {
  classFormEditInfo: string;
}

const FormEditeProfileInfo: FC<FormEditeProfileInfoProps> = ({ classFormEditInfo }) => {
  const { user } = useTypeSelector(state => state.user);
  const { editProfile } = useActions();
  const { values, handleChange, errors, isValid, setValues, setErrors, setIsValid } = useFormAndValidation();

  const handleEditProfile = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    editProfile(USER_ID, values.name, values.email);
  }

  useEffect(() => {
    setValues({ name: user?.name, email: user?.email });
    setErrors({});
    setIsValid(true);
  }, [user]);

  return (
    <form className={`${styles.form} ${classFormEditInfo}`} noValidate onSubmit={handleEditProfile}>
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
      <button
        className={`${styles.form__button} ${isValid ? '' : styles.form__button_disabled}`}
        type='submit'
        disabled={!isValid}
      >
        Edit Profile
      </button>
    </form>
  );
}

export default FormEditeProfileInfo;
