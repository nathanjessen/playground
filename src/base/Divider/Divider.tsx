import { PropsWithChildren } from "react";

export interface IDividerProps {
  variant?: "vertical" | "horizontal";
}

export const Divider = ({ variant = "vertical", children }: PropsWithChildren<IDividerProps>) => {
  const variants: { [key: string]: string; } = {
    vertical: 'divider-vertical',
    horizontal: 'divider-horizontal',
  };

  return <div className={`divider text-sm ${variants[variant]}`}>{children}</div>;
};
