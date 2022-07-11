import { InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const Checkbox = ({ name, label, ...rest }: CheckboxProps) => {
  return (
    <div className="relative flex items-center">
      <label htmlFor={name} className="cursor-pointer inline-flex gap-3 items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          className={["checkbox", rest?.disabled ? 'checkbox-disabled' : 'checkbox-primary'].join(' ')}
          {...rest}
        />
        {label && <span className="font-medium text-gray-700 uppercase">{label}</span>}
      </label>
    </div>
  );
};
