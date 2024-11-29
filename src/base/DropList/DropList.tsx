import clsx from 'clsx';
import React, { SelectHTMLAttributes } from 'react';

export interface DropListItem {
  id: string | number;
  label: string;
  value: string | number;
}

export interface DropListProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  items?: DropListItem[];
  error?: string;
}

export const DropList: React.FC<DropListProps> = ({
  name,
  label,
  items,
  error,
  ...rest
}: DropListProps) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={name} className="label cursor-pointer">
          <span className="label-text uppercase">{label}</span>

          {!rest?.required && <span className="label-text-alt text-xs">(Optional)</span>}
        </label>
      )}

      <select
        id={name}
        name={name}
        className={clsx(
          'select select-bordered w-full border-2 transition',
          error ? 'select-error bg-red-200 text-error-content' : 'select-primary'
        )}
        {...rest}
      >
        <option value=""> -- select an option -- </option>
        {items?.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {error && <p className="px-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};
