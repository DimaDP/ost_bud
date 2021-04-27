import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import AboutUS from './Components/AboutUS';
import Footer from './Components/Footer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Gallery from './Components/Gallery';
import Partners from './Components/Partners';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'Jost'].join(',')
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main style={{ padding: '0px calc(50% - 500px)' }}>
        <AboutUS />
        <Gallery />
        <Partners />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
