import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import  {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { authContextProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <authContextProvider>
            <ToastContainer theme='dark' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false} />
      <App />
    </authContextProvider>
    </BrowserRouter>

  </StrictMode>,
);
