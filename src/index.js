import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './service/state';
import AppProvider from './providers/AppProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store} >
            <AppProvider>
             <App />
            </AppProvider>
        </Provider>
    </BrowserRouter>);
