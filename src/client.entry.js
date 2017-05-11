/**
 * Created by kernel-72 on 09.05.17.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('react-app')
);


