import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, ligthTheme } from './styles/theme';
import ToggleButton from './components/ToggleButton';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = useState('ligth');

  function toggleTheme(){
    if(theme === 'ligth'){
      setTheme('dark');
    }
    else {
      setTheme('ligth');
    }
  }
  return (
    <ThemeProvider theme={theme === 'ligth' ? ligthTheme : darkTheme}>
      <>
        <ToggleButton toggleTheme={toggleTheme} theme={theme}/>
        <GlobalStyle />
        <Routes />
      </>
    </ThemeProvider>
  );
}

export default App;
