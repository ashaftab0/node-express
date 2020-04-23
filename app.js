var express = require('express');
var controllers = require('./controllers/todoControler');

// For initializing express app
var app = express();

// For setting the template, using 'ejs' template in our app
app.set('view engine', 'ejs');

// For static files, inbuild middleware in `express lib`
app.use(express.static('./public'));
    // whenever request to localhost:3000
    // automitacally will target all the files and images inside it, example
    // localhosst:3000/assets/styles.css

// fire controllers
controllers(app);

// For listen to port
app.listen(3000);
console.log('you are listening the port `3000`');