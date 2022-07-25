import { ServerResponse } from "../../typings";

export const StatusMessage = ({ status, message }: ServerResponse) => {
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
