var fetch=require('node-fetch');

callusers=(appToken,userInfo)=>{
	
	return new Promise((resolve,reject)=>{
			fetch('https://jsonplaceholder.typicode.com/users')
 			 .then(response => response.json())
  			 .then(json => resolve(json));
	});
};

module.exports={
	callusers
};