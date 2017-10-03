var express = require('express'); 
var app = express();

app.use(express.static("./SnakesNLadders"));
app.listen(3000);
module.exports = app;
