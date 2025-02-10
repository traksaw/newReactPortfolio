import './App.css'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import { useState } from 'react'
import { Button } from '@mui/material'
// import { dark } from '@mui/material/styles/createPalette.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode)
  }


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
    <section>
      <AboutMe />
      <Projects />
      <ContactMe />
      <Button onClick={toggleTheme}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
    </section>
    </ThemeProvider>
  )
}

export default App
