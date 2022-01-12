import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <p>
        Edit 2 =/ <code>src/App.tsx</code> and save to reload.
      </p>
    </ThemeProvider>
  );
}

export default App;
