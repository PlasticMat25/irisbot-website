const path = require('path');
const express = require('express');
const server = express();

server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, '/public')))
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get('/', (req, res) => {
    res.render('feedback')
});

server.post('/', (req, res) => {
    const { feedback } = req.body;
    console.log(feedback);
    const data = {message: "Ok :)"};
    res.render('feedback', data)
});

server.listen(3000);