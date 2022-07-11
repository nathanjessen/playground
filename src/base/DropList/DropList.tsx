import { SelectHTMLAttributes } from "react";

export interface DropListProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  items?: Array<any>;
  error?: string;
}

export const DropList = ({
  name,
  label,
  items,
  error,
  ...rest
}: DropListProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block cursor-pointer">
        {label && (
          <span className="block text-sm tracking-widest uppercase mb-2">
            {label}
            {rest?.required && <span className="text-xs">*</span>}
          </span>
        )}
        <select
          id={name}
          name={name}
          className={[
            'w-full border-4 transition py-3 px-4',
            error ? 'border-red-400 focus:border-red-300 focus:ring-red-300 bg-red-100' : 'border-teal-200 focus:border-teal-400 focus:ring-teal-400',
            rest?.disabled ? '!border-gray-400 !bg-gray-100' : '',
          ].join(' ')}
          {...rest}
        >
          <option value=''> -- select an option -- </option>
          {items?.map((item, idx) => (
            <option key={idx}>{item}</option>
          ))}
        </select>
      </label>

      {error && (
        <p className="text-red-600 px-2 text-sm">{error}</p>
      )}
    </div>
  );
};
