import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { SIGNUP_API } from '../../constants';
import useFormPost from '../../hooks/useFormPost';
import { FormErrors, ServerResponse } from '../../typings';
import StatusMessage from '../StatusMessage';
import { EmailSignupForm } from './EmailSignupForm';
import { EmailSignupFormData, EmailSignupFormValidatorResponse } from './types';
import { validateEmailSignupForm } from './validate';

const initialState: EmailSignupFormData = {
  firstName: '',
  lastName: '',
  email: '',
  orgname: '',
  available: '',
  advances: 'yes',
  alerts: '',
  other: '',
};

const EmailSignupFormContainer = () => {
  const { done, data, error, postFormData } = useFormPost<ServerResponse>();
  const [fields, setFields] = useState<EmailSignupFormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const onFormReset = () => {
    setFields(initialState);
    setErrors({});
    setLoading(false);
  };

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFields((currentFields) => ({
      ...currentFields,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const onCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFields((currentFields) => ({
      ...currentFields,
      [e.target.name]: e.target.checked ? e.target.value : '',
    }));
  }, []);

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation: EmailSignupFormValidatorResponse = validateEmailSignupForm(fields);

    if (validation.success) {
      setLoading(true);
      setErrors(validation.errors);
      const formBody = new FormData();
      Object.entries(fields).forEach((field) => {
        const [key, val] = field;
        formBody.set(key, val);
      });
      await postFormData(SIGNUP_API, formBody);
      onFormReset();
    } else {
      setErrors({
        ...validation.errors,
        form: validation.message,
      });
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      {done && data && (
        <StatusMessage
          type={data.status === 'success' ? 'success' : 'error'}
          message={data.message}
        />
      )}
      {error && <StatusMessage type="error" message={error} />}
      <EmailSignupForm
        onFormSubmit={onFormSubmit}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        fields={fields}
        errors={errors}
        loading={loading}
      />
    </div>
  );
};

export default EmailSignupFormContainer;
