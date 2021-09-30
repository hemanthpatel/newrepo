import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/ibm-plex-sans';
import Amplify from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import amplifyConfig from './aws-exports';
import theme from './components/common/theme';
import reportWebVitals from './reportWebVitals';

Amplify.configure(amplifyConfig);


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
