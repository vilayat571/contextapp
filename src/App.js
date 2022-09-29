import Main from './components/Main';
import { ThemeProvider } from './context/Theme';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <UserProvider>
          <Main />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
