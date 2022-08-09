import clsx from 'clsx';
import { SelectHTMLAttributes } from 'react';

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
    <div className='form-control w-full'>
      {label && (
        <label htmlFor={name} className='label cursor-pointer'>
          <span className='label-text uppercase'>{label}</span>

          {!rest?.required && (
            <span className='label-text-alt text-xs'>(Optional)</span>
          )}
        </label>
      )}

      <select
        id={name}
        name={name}
        className={clsx(
          'select select-bordered border-2 w-full transition',
          error
            ? 'select-error bg-red-200 text-error-content'
            : 'select-primary'
        )}
        {...rest}>
        <option value=''> -- select an option -- </option>
        {items?.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </select>

      {error && <p className='text-red-600 px-2 text-sm'>{error}</p>}
    </div>
  );
};
