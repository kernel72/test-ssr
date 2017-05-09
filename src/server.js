/**
 * Created by kernel-72 on 08.05.17.
 */
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from './app';
import {StaticRouter} from 'react-router-dom'
import Helmet from 'react-helmet'

const app = express();

app.use('/static', express.static('./dist'));
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});
app.get('*', (req, res) => {

    console.log(req.url);

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App />
        </StaticRouter>);

    const helmet = Helmet.renderStatic();
    const html = `
        <!DOCTYPE html>
        <html lang="en" ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link rel="stylesheet" href="/static/style.css">
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="react-app">${content}</div>
            <script src="/static/bundle.js"></script>
        </body>
        </html>
    `;
    res.send(html);
});

app.listen('3001', () => {
    console.log('Listening on 3001');
});