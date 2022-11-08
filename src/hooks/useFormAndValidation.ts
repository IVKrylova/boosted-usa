import React, { useState, useCallback, Dispatch, SetStateAction } from 'react';

interface formAndValidation {
  values: {
    url?: string,
    email?: string,
    name?: string,
  };
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  errors: {
    url?: string,
    email?: string,
    name?: string,
  };
  isValid: boolean;
  resetForm: () => void;
  setValues: Dispatch<SetStateAction<{}>>;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  setErrors: Dispatch<SetStateAction<{}>>;
}

export function useFormAndValidation(): formAndValidation {
  const [ values, setValues ] = useState<{}>({});
  const [ errors, setErrors ] = useState<{}>({});
  const [ isValid, setIsValid ] = useState<boolean>(true);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: evt.target.validationMessage});
    setIsValid(((evt.target as Element)?.closest('form') as HTMLFormElement)?.checkValidity());
  };

  const resetForm = useCallback((newValues: {} = {}, newErrors: {} = {}, newIsValid: boolean = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid, setErrors };
}
