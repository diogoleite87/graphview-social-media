import { FeedBackAlertContextProvider } from './hooks/useFeedBackAlert';
import Home from './pages/Home'
import GlobalStyle from "./styles/global";

function App() {

  return (
    <FeedBackAlertContextProvider>
      <GlobalStyle />
      <Home />
    </FeedBackAlertContextProvider>
  )
}

export default App
