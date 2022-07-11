import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
}

export const InputField = ({
  name,
  label,
  error,
  type = "text",
  ...rest
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block cursor-pointer">
        {label && (
          <span className="block text-sm tracking-widest uppercase mb-2">
            {label}
            {rest?.required && <span className="text-xs">*</span>}
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          className={[
            'w-full border-4 transition py-3 px-4',
            error ? 'border-red-400 focus:border-red-300 focus:ring-red-300 bg-red-100' : 'border-teal-200 focus:border-teal-400 focus:ring-teal-400',
            rest?.disabled ? '!border-gray-400 !bg-gray-100' : '',
          ].join(' ')}
          {...rest}
        />
      </label>

      {error && (
        <p className="text-red-600 px-2 text-sm">{error}</p>
      )}
    </div>
  );
};
