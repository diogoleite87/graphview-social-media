import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { FeedBackAlertContextProvider } from './hooks/useFeedBackAlert';
import Home from './pages/Home'
import GlobalStyle from "./styles/global";

function App() {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <FeedBackAlertContextProvider>
        <CssBaseline />
        <GlobalStyle />
        <Home />
      </FeedBackAlertContextProvider>
    </ThemeProvider>
  )
}

export default App
