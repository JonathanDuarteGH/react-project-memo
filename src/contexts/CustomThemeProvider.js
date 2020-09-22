import React, { useState, createContext } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../components/MyThemes';
import Paper from '@material-ui/core/Paper';

export const CustomThemeContext = createContext(
  {
    currentTheme: 'normalTheme',
    setTheme: null,
  },
);

const CustomThemeProvider = (props) => {
  const { children } = props
  const currentTheme = localStorage.getItem('appTheme') || 'normalTheme'
  const [themeName, _setThemeName] = useState(currentTheme)
  const theme = getTheme(themeName)
  const setThemeName = (name) => {
    localStorage.setItem('appTheme', name)
    _setThemeName(name)
  }
  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  }
  const paperStyle = {
    height: "100vh",
  }

  return (
    <div>
      <CustomThemeContext.Provider value={contextValue}>
        <ThemeProvider theme={{ ...theme }}>
          <Paper style={paperStyle}>
            {children}
          </Paper>
        </ThemeProvider>
      </CustomThemeContext.Provider>
    </div>
  )
}

export default CustomThemeProvider;
