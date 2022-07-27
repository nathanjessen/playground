import './styles/tailwind.css';
import { ThemeProvider } from './state/ThemeContext';
import EmailSignup from './pages/EmailSignup';
// import RegistrationPage from './pages/RegistrationPage';
// import SignInPage from './pages/SignInPage';
import ThemeDropdown from "./components/ThemeDropdown";


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="p-8 flex justify-between">
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
