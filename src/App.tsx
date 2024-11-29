import EmailSignup from './pages/EmailSignup';
import { ThemeProvider } from './state/ThemeContext';
import './styles/tailwind.css';
// import RegistrationPage from './pages/RegistrationPage';
// import SignInPage from './pages/SignInPage';
import ThemeDropdown from './components/ThemeDropdown';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="flex justify-between p-8">
          <h1>Playground</h1>
          <ThemeDropdown />
        </header>
        <EmailSignup />
        {/* <SignInPage title="Sign up for an account" /> */}
        {/* <RegistrationPage title="Sign up for an account" /> */}
      </div>
    </ThemeProvider>
  );
}
export default App;
