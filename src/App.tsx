import './styles/tailwind.css';
import EmailSignup from './pages/EmailSignup';
// import RegistrationPage from './pages/RegistrationPage';
// import SignInPage from './pages/SignInPage';
// import WordlePage from './pages/WordlePage';
import ThemeDropdown from "./components/ThemeDropdown";
import { ThemeProvider } from './state/ThemeContext';


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
        {/* <WordlePage /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
