var express = require('express');
var indexRouter = require('./routes/index.js');

var app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/',indexRouter);

app.listen(3000);
console.log('You are listening to port 3000');