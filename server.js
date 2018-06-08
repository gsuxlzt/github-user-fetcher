const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname));

app.use(staticFileMiddleware);
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
app.use(history());

app.use(staticFileMiddleware);



app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/index.html'))
});

app.listen(8080, function () {
    console.log('listening');
})

