import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  color?: 'primary' | 'secondary' | 'accent';
  sizeMod?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Checkbox = ({ name, label, color, sizeMod = 'md', ...rest }: CheckboxProps) => {
  const sizes: { [key: string]: string } = {
    xs: 'checkbox-xs',
    sm: 'checkbox-sm',
    md: 'checkbox-md',
    lg: 'checkbox-lg',
  };

  const colors: { [key: string]: string } = {
    primary: 'checkbox-primary',
    secondary: 'checkbox-secondary',
    accent: 'checkbox-accent',
  };

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer justify-start gap-2">
        <input
          id={name}
          name={name}
          type="checkbox"
          className={clsx('checkbox', color && colors[color], sizeMod && sizes[sizeMod])}
          {...rest}
        />
        {label && <span className="label-text">{label}</span>}
      </label>
    </div>
  );
};
