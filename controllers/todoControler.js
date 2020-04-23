var bodyParser = require('body-parser');    
var fs = require('fs');

var utlencodedParser = bodyParser.urlencoded({extended: false});
var serverData;

// Async call
fs.readFile('data_server.json', 'utf8', function(err, data) {
    // when data is fetched with 'readFile' method, it comes into javascript obj
    // To convert, use `JSON.parse()`
    serverData = JSON.parse(data);
})
// Sync call
//var data = fs.readFileSync('data_server.json', 'utf8');

module.exports = function(app) {   
    app.get('/todo', function(req, res) {
        res.render('todo', {todos: serverData});
        // .render will try to find name 'todo.ejs' in 'views'(inbuild configured) folder
    });

    app.post('/todo', utlencodedParser, function(req, res) {
        // `req.body` will give you the current object in this case, means new object gonna to be `add` 
        console.log(req.body); // // check the terminal
        serverData.push(req.body);

        // sending `data` back as a response of ajax call in `todo-list.js`
        res.json(serverData);
    });

    app.delete('/todo/:item', function(req, res) {
        var itemToDelete = req.params.item;
            //console.log(itemToDelete); // check the terminal

        serverData = serverData.filter(function(data) {
            return data.item.replace(/ /g, "-") !== itemToDelete;
        })

        res.json(serverData);
    });
}