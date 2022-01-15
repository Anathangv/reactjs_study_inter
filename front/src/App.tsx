import { ThemeProvider } from "styled-components";

import { Router } from "./routes/index";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
