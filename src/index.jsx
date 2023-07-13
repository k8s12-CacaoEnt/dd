import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import loginReducer from './reducer/login';

const store = createStore(loginReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />

            <App />
        </React.StrictMode>,
    </Provider>
);



