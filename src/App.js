import { GlobalStyles } from './styles/GlobalStyles';

import Home from './pages/Home.jsx';
import Motoristas from './pages/Motoristas.jsx';

import { MotoristasContextProvider } from './context/MotoristasContext';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#273036',
    },
    secondary: {
      main: '#273036',
    },
    text: {
      primary: '#273036',
      secondary: ' #273036',
    },
  },
  shape: {
    borderRadius: 45,
  },
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: ' #273036',
      },
    },
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <MotoristasContextProvider>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/motoristas" exact component={Motoristas} />
            </Switch>

            <GlobalStyles />
          </ThemeProvider>
        </MotoristasContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
