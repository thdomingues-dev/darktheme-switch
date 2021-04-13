import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
