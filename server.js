var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

var app = express();

// View Engine
app.set('views' ,path.join(__dirname , 'views'));
app.set('view engine', 'ejs');
app.engine('html' , require('ejs').renderFile);

// Set Static folder
app.use(express.static(path.join(__dirname , 'client')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routing
app.get(['/','/dept/add' , '/emp/add' , '/emp/list'] , function(req , res , next) {
    res.render('index.html');
});

// 404 routing
app.use((req , res , next) => {
    res.render('index.html');
})

app.listen(process.env.PORT || 5000, function() {
console.log('server started on port 5000');
});
