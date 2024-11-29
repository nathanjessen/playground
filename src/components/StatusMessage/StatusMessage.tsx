interface StatusMessageProps {
  type: 'success' | 'error';
  message: string;
}

export const StatusMessage = ({ type, message }: StatusMessageProps) => {
  const colors: { [key: string]: string } = {
    success: 'alert alert-success',
    error: 'alert alert-error',
  };

  return (
    <div className={colors[type]}>
      <span>{message}</span>
    </div>
  );
};
