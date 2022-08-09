import { ChangeEvent, FormEvent } from 'react';

export type User = {
  username: string;
  email: string;
  password: string;
};

export interface SignInFormProps {
  onFormSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  user?: User;
  btnText?: string;
}

export const SignInForm = ({
  onFormSubmit,
  onInputChange,
  user,
  btnText = 'Sign In',
}: SignInFormProps) => {
  return (
    <form onSubmit={(e) => onFormSubmit?.(e)} className='space-y-4'>
      <div className='form-control'>
        <label htmlFor='username' className='label'>
          <span className='label-text'>Username</span>
        </label>
        <input
          id='username'
          name='username'
          type='text'
          required
          className='input input-bordered w-full bg-neutral text-neutral-content'
          onChange={(e) => onInputChange?.(e)}
        />
        {user?.username && <p className='text-success'>{user.username}</p>}
      </div>

      <div className='form-control'>
        <label htmlFor='password' className='label'>
          <span className='label-text'>Password</span>
        </label>
        <input
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          required
          className='input input-bordered w-full bg-neutral text-neutral-content'
          onChange={(e) => onInputChange?.(e)}
        />
        {user?.password && <p className='text-success'>{user.password}</p>}
      </div>

      <div className='flex items-center justify-between'>
        <div className='form-control'>
          <label className='label cursor-pointer' htmlFor='remember-me'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='checkbox checkbox-primary checkbox-xs'
            />
            <span className='label-text ml-2'>Remember me</span>
          </label>
        </div>

        <div className='text-sm'>
          <a href='#none' className='font-medium link link-hover'>
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type='submit' className='btn btn-primary btn-block'>
          {btnText}
        </button>
      </div>
    </form>
  );
};
