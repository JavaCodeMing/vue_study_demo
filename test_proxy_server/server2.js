const express = require('express') 
const app = express() 
app.use((request,response, next)=>{ 
	console.log('有人请求服务器1了');
	console.log('请求的资源是:', request.url); 
	console.log('请求来自于 ',request.get('Host'));
	next() 
}) 
app.get('/cars',(request, response)=>{ 
	const cars = [ 
		{id:'001',name: '奔驰',price: 70}, 
		{id:'002',name: '宝马',price: 80}, 
		{id:'003',name: '比亚迪',price: 50}, 
	] 
	response.send(cars) 
}) 
app.listen(5001,(err)=>{ 
	if(!err) console.log('服务器2后动成功了,请求轿车信息地址为:http://localhost:5001/cars') 
})