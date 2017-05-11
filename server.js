/**
 * Created by kernel-72 on 08.05.17.
 */

const express = require('express');


const app = express();

app.use(express.static('./dist'));
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});
app.get('*', (req, res) => {

    console.log(req.url);

    const html = require('./dist/server.bundle').default;
    res.send(html(req.url, {}));
});

app.listen('3001', () => {
    console.log('Listening on 3001');
});