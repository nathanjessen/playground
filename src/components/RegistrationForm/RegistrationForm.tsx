import type { ChangeEvent, FormEvent } from 'react';

export interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  pwconfirm?: string;
  form?: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
  pwconfirm: string;
}

export interface IRegistrationFormProps {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPwChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errors?: FormErrors;
  loading?: boolean;
  btnText?: string;
  user: User;
}

export const RegistrationForm = ({
  onInputChange,
  onPwChange,
  onFormSubmit,
  errors,
  loading = false,
  btnText = 'Sign Up',
  user,
}: IRegistrationFormProps): JSX.Element => {
  const hasErrors = errors && Object.keys(errors).length > 0;
  const disabled = loading || hasErrors;

  return (
    <form onSubmit={onFormSubmit} className="space-y-2">
      {errors?.form && (
        <div className="alert alert-error">
          <span>{errors.form}</span>
        </div>
      )}
      <div className="form-control">
        <label htmlFor="username" className="label">
          <span className="label-text">Username</span>
        </label>
        <div className="flex items-center gap-4">
          <input
            id="username"
            name="username"
            type="text"
            required
            className={`input input-bordered w-full bg-base-300 ${
              errors?.username ? 'input-error' : ''
            }`}
            value={user.username}
            onChange={onInputChange}
            disabled={loading}
          />
        </div>
        {errors?.username && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.username}</span>
          </label>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <div className="flex items-center gap-4">
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`input input-bordered w-full bg-base-300 ${
              errors?.email ? 'input-error' : ''
            }`}
            value={user.email}
            onChange={onInputChange}
            disabled={loading}
          />
        </div>
        {errors?.email && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.email}</span>
          </label>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="password" className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="flex items-center gap-4">
          <input
            id="password"
            name="password"
            type="password"
            required
            className={`input input-bordered w-full bg-base-300 ${
              errors?.password ? 'input-error' : ''
            }`}
            value={user.password}
            onChange={onPwChange}
            disabled={loading}
          />
        </div>
        {errors?.password && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.password}</span>
          </label>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="pwconfirm" className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <div className="flex items-center gap-4">
          <input
            id="pwconfirm"
            name="pwconfirm"
            type="password"
            required
            className={`input input-bordered w-full bg-base-300 ${
              errors?.pwconfirm ? 'input-error' : ''
            }`}
            value={user.pwconfirm}
            onChange={onPwChange}
            disabled={loading}
          />
        </div>
        {errors?.pwconfirm && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.pwconfirm}</span>
          </label>
        )}
      </div>

      <button type="submit" className="btn btn-primary w-full" disabled={disabled}>
        {loading ? <span className="loading loading-spinner loading-sm"></span> : btnText}
      </button>
    </form>
  );
};
