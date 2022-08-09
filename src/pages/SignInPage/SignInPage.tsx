import UnsplashPhoto from '../../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
import Divider from '../../base/Divider';
import SignInForm from '../../components/SignInForm';
import SocialSignIn from '../../components/SocialSignIn';

export interface SignInPageProps {
  title?: string;
}

export const SignInPage = ({ title }: SignInPageProps) => {
  return (
    <>
      <div className='min-h-screen flex'>
        <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            {title && <h2 className='text-3xl font-extrabold mb-8'>{title}</h2>}

            <div className='space-y-6'>
              <SocialSignIn
                title='Sign in with'
                onFacebookSignin={() =>
                  alert('onFacebookSignin not implemented')
                }
                onTwitterSignin={() => alert('onTwitterSignin not implemented')}
                onGitHubSignin={() => alert('onGitHubSignin not implemented')}
              />

              <Divider>Or continue with</Divider>

              <SignInForm />
            </div>
          </div>
        </div>
        <div className='hidden lg:block relative w-0 flex-1'>
          <img
            src={UnsplashPhoto}
            className='absolute inset-0 h-full w-full object-cover'
            alt='Macbook Wallpaper by Ales Nesetril on Unsplash'
          />
          <div className='absolute bottom-4 right-8 bg-black text-gray-400 p-2'>
            <a
              href='https://unsplash.com/photos/Im7lZjxeLhg'
              target='_blank'
              rel='noreferrer'>
              Photo by Ales Nesetril
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
