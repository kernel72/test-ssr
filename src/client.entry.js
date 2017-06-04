/**
 * Created by kernel-72 on 09.05.17.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux'

const store = createStore(reducers, window.__PRELOADED__ || {});
delete window.__PRELOADED__;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('react-app')
);



