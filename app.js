const express = require('express');
const app = express();

let counter = 0;

app.get('/ping', function(req, res) {
    res.send('Pong')
});

app.post('/increment', function(req, res) {
    counter++;
    res.json({value: counter});
});

app.post('/decrement', function(req, res) {
    counter--;
    res.json({value: counter});
});

app.get('/value', function(req, res) {
    res.json({value: counter});
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})