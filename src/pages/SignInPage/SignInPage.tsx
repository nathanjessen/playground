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
      <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            {title && <h2 className="mb-8 text-3xl font-extrabold">{title}</h2>}

            <div className="space-y-6">
              <SocialSignIn
                title="Sign in with"
                onFacebookSignin={() => alert('onFacebookSignin not implemented')}
                onTwitterSignin={() => alert('onTwitterSignin not implemented')}
                onGitHubSignin={() => alert('onGitHubSignin not implemented')}
              />

              <Divider>Or continue with</Divider>

              <SignInForm />
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            src={UnsplashPhoto}
            className="absolute inset-0 h-full w-full object-cover"
            alt="Macbook Wallpaper by Ales Nesetril on Unsplash"
          />
          <div className="absolute bottom-4 right-8 bg-black p-2 text-gray-400">
            <a href="https://unsplash.com/photos/Im7lZjxeLhg" target="_blank" rel="noreferrer">
              Photo by Ales Nesetril
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
