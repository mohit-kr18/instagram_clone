import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
    <GoogleOAuthProvider clientId="303049781983-4n0ft4v0leqaj7rjgqvlckcie3aveujm.apps.googleusercontent.com">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
    </MantineProvider>
  </React.StrictMode>,
)
