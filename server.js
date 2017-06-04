/**
 * Created by kernel-72 on 08.05.17.
 */

const express = require('express');
const app = express();


app.use(express.static('./dist'));
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

const html = require('./dist/server.bundle').default;

// app.get('/', (req, res) => {
//     setTimeout(() => {
//         res.send(html(req.url, {}, {someData: "daaaataaaaa"} ));
//     }, 100)
// });

app.get('*', (req, res) => {
    console.log(req.url);
    html(req.url, {}).then((generatedHtml) => {
        res.send(generatedHtml);
    });
});

app.listen('3001', () => {
    console.log('Listening on 3001');
});