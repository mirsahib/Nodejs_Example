var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app)

  // var server = http.createServer(function(req, res){
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/html');
  //   fs.readFile('index.html',function(err,data){
  //     if(err){
  //       return console.log("File not found")
  //     }
  //     res.end(data);
  //   })
  // });
  // server.listen(3000, 'localhost', function(){
  //   console.log('Server running');
  // });
  app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
  })
  app.get('/about',function(req,res){
    res.sendFile(__dirname+'/second.html')
  })

  server.listen(3000,'localhost',function(){
    console.log('Server running')
  })