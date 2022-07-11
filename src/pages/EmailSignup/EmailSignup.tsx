import { ChangeEvent, FormEvent, useState } from "react";
import EmailSignupForm from "../../components/Forms/EmailSignupForm";
import StatusMessage from "../../components/Forms/StatusMessage";
import { SIGNUP_API } from "../../constants";
import { FormErrors, EmailSignupFormData, EmailSignupFormResponse, EmailSignupFormValidatorResponse } from '../../typings/EmailSignupForm';
import { validateEmailSignupForm } from "./validate";

const initialState: EmailSignupFormData = {
  firstName: '',
  lastName: '',
  email: '',
  orgname: '',
  euResident: '',
  advances: 'yes',
  alerts: '',
  other: '',
};

export const EmailSignup = () => {
  const [fields, setFields] = useState<EmailSignupFormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [serverResponse, setServerResponse] = useState<EmailSignupFormResponse>();

  const onFormReset = () => {
    setFields(initialState);
    setErrors({});
    setIsValidForm(true);
    setLoading(false);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.checked ? e.target.value : ''
    });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm(fields);

    if (isValidForm) {
      setLoading(true);
      postFormData();
    } else {
      setLoading(false);
    }
  };

  const postFormData = () => {
    const formBody = new FormData();
    Object.entries(fields).forEach(field => {
      const [key, val] = field;
      formBody.set(key, val);
    });

    fetch(SIGNUP_API, {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(res => {
        onFormReset();
        setServerResponse(res);
      })
      .catch(error => {
        onFormReset();
        setServerResponse(error);
      });
  };

  const validateForm = (data: EmailSignupFormData) => {
    const response: EmailSignupFormValidatorResponse = validateEmailSignupForm(data);

    setIsValidForm(response.success);
    setErrors({
      ...response.errors,
      form: response.message,
    });
  };

  return (
    <div className="py-8 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
      {serverResponse ? (
        <StatusMessage status={serverResponse.status} message={serverResponse.message} />
      ) : (
        <EmailSignupForm
          onFormSubmit={onFormSubmit}
          onFormReset={onFormReset}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          fields={fields}
          errors={errors}
          loading={loading}
        />
      )}
    </div>
  );
};
