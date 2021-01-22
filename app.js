const Test = require('./modules/test.controller');

var express = require('express');
var app = express();
const port = 3000;

//Home Route
app.get('/', function (req, res) {
    res.send("Node Test /n Use riders-list route ");
});
//Return the Rider List 
app.get('/riders-list', function (req, res) {
    res.json(JSON.stringify(Test.solution()));

});

app.listen(port, () => {
    console.log(`App Running at http://localhost:${port}`)
});