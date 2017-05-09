/**
 * Created by kernel-72 on 08.05.17.
 */
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import ejs from 'ejs';
import App from './app';
import {StaticRouter} from 'react-router-dom'

const app = express();

app.use('/static', express.static('./dist'));
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});
app.get('*', (req, res) => {

    console.log(req.url);
    ejs.renderFile('./index.ejs', {
        page: {
            title: "Hi from server!",
            content: ReactDOMServer.renderToString(
                <StaticRouter location={req.url} context={{}}>
                    <App />
                </StaticRouter>)
        }
    }, (err, result) => {
        res.send(result);
    })
});

app.listen('3001', () => {
    console.log('Listening on 3001');
});