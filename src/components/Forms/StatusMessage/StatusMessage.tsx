import { ServerResponseStatus } from "../../../typings/EmailSignupForm";

export interface StatusMessageProps {
  status?: ServerResponseStatus;
  message?: string;
}

export const StatusMessage = ({ status, message }: StatusMessageProps) => {
  const colors: { [key: string]: string; } = {
    'success': 'text-green-600',
    'error': 'text-red-600',
  };

  return (
    <p className={['text-2xl font-medium', status && colors[status]].join(' ')}>
      {message}
    </p>
  );
};
