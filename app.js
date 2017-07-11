const express = require('express');

const app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello home page");
});

app.get('/template', (req, res) => {
    res.render('temp', { time :  Date(), _title:'Jade' });
});

 app.get('/dynamic', (req, res) => {
    var lis = '';
    for(let i = 0 ; i < 5 ;i++) {
        lis = lis + '<li>coding</li>';
    }
    var date = new Date();
    let output = `<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h1>Hello dynamic html</h1>
        ${lis}
        ${date}
    </body>
</html>        
`;
    res.send(output);
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