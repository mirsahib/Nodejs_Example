var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app)

  app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
  })
  app.get('/about',function(req,res){
    res.sendFile(__dirname+'/second.html')
  })

  server.listen(3000,'localhost',function(){
    console.log('Server running')
  })