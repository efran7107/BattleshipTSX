import "./styles/App.css";
import { LogoComponent } from "./components/logo-component";
import { ThemeProvider } from "./components/provider-components/theme-provider";
import { ThemeTab } from "./components/theme-tab";
import { UserProvider } from "./components/provider-components/user-provider";
import { Battleship } from "./components/battleship";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ThemeTab />
        <LogoComponent />
        <UserProvider>
          <Battleship />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
