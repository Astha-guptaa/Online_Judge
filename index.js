var express = require('express'); 
var app = express(); 
  
app.listen(3000, function() { 
    console.log('server running on port 3000'); 
} ) 
app.get('/name', callName); 
  
function callName(req, res) { 
    var spawn = require("child_process").spawn; 
    var process = spawn('python',["./hello.py","..\madarchod\hell.cpp"]); 
    process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
    } ) 
}