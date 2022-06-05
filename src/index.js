import React from 'react';
import ReactDOM from 'react-dom/client';


import { ThemeProvider, createTheme} from '@mui/material';

import App from './components/app/App';



const theme = createTheme({
  palette: {
      primary: {
        main: "#00000"
      }}
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);

