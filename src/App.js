import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";

import Routed from "./Routes";
import TopBar from "./components/topBar/TopBar";

const theme = createTheme({
    palette: {
        primary: {
          main: '#797acb'
        },
        error: {
          main: '#ff5c4d'
        }
    }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <TopBar />
          <Routed />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
