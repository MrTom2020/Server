var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var fs = require("fs");
server.listen(process.env.PORT || 3000);
console.log("hihihi");
var arrayu = [];
var arrnd = [];
io.sockets.on('connection',function(socket){
  console.log("HIỆP ĐÃ TỚI ");
socket.on('Nhannn',function(data)
{
  
if(arrayu .indexOf(data) == -1)
{
	arrayu.push(data);
console.log("Đã nhận thành công" + data);
socket.un = data;		
}
else
{
	console.log("Đã nhận không thành công" + data);
}

   io.sockets.emit('guinha',{noidung:arrayu});	

});
socket.on('gnd',function(data1)
{
arrnd.push(socket.un + " " + data1);
  console.log(socket.un + " " + data1);	
io.sockets.emit('htnd',{noidung1:arrnd});
});


});
