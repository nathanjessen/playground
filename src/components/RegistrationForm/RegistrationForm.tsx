import { ChangeEvent, FormEvent } from "react";
import { User } from './index';

export interface IRegistrationFormProps {
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onPwChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  errors?: any;
  loading?: boolean;
  btnText?: string;
  user?: User;
}

export const RegistrationForm = ({
  onInputChange,
  onPwChange,
  onFormSubmit,
  errors,
  loading,
  btnText = 'Sign Up',
  user
}: IRegistrationFormProps) => {
  const disabled = loading || errors;

  return (
    <form onSubmit={e => onFormSubmit?.(e)} className="space-y-2">
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
            className={`input input-bordered w-full bg-base-300 ${errors?.username ? 'input-error' : ''}`}
            onChange={e => onInputChange?.(e)}
            value={user?.username}
          />
        </div>
        {errors?.username && (
          <p className="text-error p-2 text-sm">{errors.username}</p>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={`input input-bordered w-full bg-base-300 ${errors?.email ? 'input-error' : ''}`}
          onChange={e => onInputChange?.(e)}
          value={user?.email}
        />
        {errors?.email && (
          <p className="text-error p-2 text-sm">{errors.email}</p>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="password" className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className={`input input-bordered w-full bg-base-300 ${errors?.password ? 'input-error' : ''}`}
          onChange={e => onPwChange?.(e)}
          value={user?.password}
        />
        {errors?.password && (
          <p className="text-error p-2 text-sm">{errors.password}</p>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="pwconfirm" className="label">
          <span className="label-text">Confirm password</span>
        </label>
        <input
          id="pwconfirm"
          name="pwconfirm"
          type="password"
          required
          className={`input input-bordered w-full bg-base-300 ${errors?.pwconfirm ? 'input-error' : ''}`}
          onChange={e => onInputChange?.(e)}
          value={user?.pwconfirm}
        />
        {errors?.pwconfirm && (
          <p className="text-error p-2 text-sm">{errors.pwconfirm}</p>
        )}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className={`btn btn-primary btn-block ${errors ? 'btn-disabled' : ''} ${loading ? 'loading' : ''}`}
          disabled={disabled}
        >
          {btnText}
        </button>
        {errors?.form && (
          <p className="text-error p-2 text-sm">{errors.form}</p>
        )}
      </div>
    </form>
  );
};
