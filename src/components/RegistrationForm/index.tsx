import { ChangeEvent, FormEvent, useState } from 'react';
import { RegistrationForm } from './RegistrationForm';

export type FormErrors = { [key: string]: string };
export type ValidFields = { [key: string]: boolean };

export type RegistrationParams = {
  username: string;
  email: string;
  password: string;
};

export type User = {
  username: string;
  email: string;
  password: string;
  pwconfirm: string;
};

const initialUser: User = {
  username: '',
  email: '',
  password: '',
  pwconfirm: '',
};

const RegistrationContainer = () => {
  const [user, setUser] = useState<User>(initialUser);
  const [errors, setErrors] = useState<FormErrors>();
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // setErrors({
    //   ...errors,
    //   [e.target.name]: 'Incorrect format'
    // });
  };

  const onPwChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // setErrors({
    //   ...errors,
    //   [e.target.name]: "Passwords don't match."
    // });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params: RegistrationParams = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    onValidateForm();

    if (isValidForm) {
      setLoading(true);
      console.log('Form submitted', params);
      // Make ajax submit
      setTimeout(() => {
        setUser(initialUser);
        setLoading(false);
      }, 2000);
    } else {
      console.log('form is invalid', errors);
    }
  };

  const onValidateForm = () => {
    console.log('validate form');
    // setErrors({
    //   ...errors,
    //   form: "Form has errors."
    // });
    setIsValidForm(true);
  };

  return (
    <RegistrationForm
      onInputChange={onInputChange}
      onPwChange={onPwChange}
      onFormSubmit={onFormSubmit}
      errors={errors}
      loading={loading}
      user={user}
    />
  );
};

export default RegistrationContainer;
