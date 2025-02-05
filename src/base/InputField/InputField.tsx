import clsx from 'clsx';
import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
}

export const InputField = ({ name, label, error, type = 'text', ...rest }: InputFieldProps) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={name} className="label cursor-pointer">
          <span className="label-text uppercase">{label}</span>

          {!rest?.required && <span className="label-text-alt text-xs">(Optional)</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        className={clsx(
          'input input-bordered w-full border-2',
          error ? 'input-error bg-red-200 text-error-content' : 'input-primary'
        )}
        {...rest}
      />

      {error && <p className="mt-1 px-2 text-sm text-error">{error}</p>}
    </div>
  );
};
