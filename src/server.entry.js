/**
 * Created by kernel-72 on 11.05.17.
 */
import React from 'react';
import App from './app';
import {StaticRouter} from 'react-router-dom'
import { matchPath } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import routes from './routes'
import {createStore} from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux'



export default (url, context) => {

    const toResolve = [];

    routes.some(route => {
        const match = matchPath(url, route);
        if(match){
            route.loadData && toResolve.push(route.loadData(match.params));
        }
        return match;
    });

    return Promise.all(toResolve).then(resolvedData => {
        const store = createStore(reducers, {
            page: {
                isLoading: false,
                data: resolvedData[0],
                url
            }
        });

        const preloadedState = store.getState();

        const content = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={url} context={context}>
                    <App/>
                </StaticRouter>
            </Provider>
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
                
                <script>
                    window.__PRELOADED__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="react-app">${content}</div>
                <script src="/bundle.js"></script>
            </body>
            </html>
        `;
    });


}
