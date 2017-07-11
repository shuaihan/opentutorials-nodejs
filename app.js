const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello home page");
});

app.get('/route', (req, res) => {
    res.send("Hello Router, <img src='/router.png' />")
});

app.get('/login', (req, res) => {
    res.send('Login please');
});

app.listen(3000, () => {
    console.log("Connected 300 port");
});