const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : false}));

app.get('/topic', (req, res) => {
    var topic = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic?id=0">Javascript</a>
    <a href="/topic?id=1">Nodejs</a>
    <a href="/topic?id=2">Express</a>
    ${topic[req.query.id]}
    `
   // for(let i = 0 ; i < topic.length ; i++) 
    res.send(output);
})

app.get('/topic/:id/:mode', (req, res) => {
    res.send(req.params.id + ' , ' + req.params.mode);
})

app.get('/form', (req, res) => {
    res.render('form');
});

app.get('/form_receiver', (req, res) => {
    var title = req.query.title;
    var description = req.query.description;
    res.send(title + ' ,' + description);
})

app.post('/form_receiver', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
   res.send(title + ' ,' + description);
});

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