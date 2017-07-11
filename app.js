const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello home page");
});

app.get('/login', (req, res) => {
    res.send('Login please');
});

app.listen(3000, () => {
    console.log("Connected 300 port");
});