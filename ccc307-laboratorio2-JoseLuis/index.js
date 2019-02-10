var express=require('express');
var fetch=require('node-fetch');
var pack=require('publiclab2');
var prueba=express();

prueba.get('/get_users',function(req,res){
	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => res.send(json))
});

prueba.get('/get_users_new',function(req,res){
	var str=pack;
	res.send(pack.callusers());
});
prueba.listen(3000,function(){
	console.log('Example app listening on port 3000!');
	console.log(pack.callusers());
});