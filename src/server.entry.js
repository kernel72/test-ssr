/**
 * Created by kernel-72 on 11.05.17.
 */
import React from 'react';
import App from './app';
import {StaticRouter} from 'react-router-dom'
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

export default (url, context) => {
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={url} context={context}>
            <App />
        </StaticRouter>
    );
    const helmet = Helmet.renderStatic();

    return `
        <!DOCTYPE html>
        <html lang="en" ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link rel="stylesheet" href="/style.css">
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="react-app">${content}</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `;
}
