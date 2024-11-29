import { ChangeEvent, FormEvent, useState } from 'react';
import StatusMessage from '../StatusMessage';
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
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onPwChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params: RegistrationParams = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    onValidateForm();

    if (isValidForm) {
      try {
        setLoading(true);
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        });

        if (!response.ok) {
          throw new Error('Registration failed');
        }

        setStatus({ type: 'success', message: 'Registration successful!' });
        setUser(initialUser);
      } catch (error) {
        setStatus({
          type: 'error',
          message: error instanceof Error ? error.message : 'An error occurred during registration',
        });
      } finally {
        setLoading(false);
      }
    } else {
      setErrors({
        form: 'Form has errors.',
      });
    }
  };

  const onValidateForm = () => {
    setIsValidForm(true);
  };

  return (
    <div className="mx-auto max-w-lg">
      {status && <StatusMessage type={status.type} message={status.message} />}
      <RegistrationForm
        onFormSubmit={onFormSubmit}
        onInputChange={onInputChange}
        onPwChange={onPwChange}
        user={user}
        errors={errors}
        loading={loading}
      />
    </div>
  );
};

export default RegistrationContainer;
