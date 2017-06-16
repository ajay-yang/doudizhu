var pomelo = require('pomelo');

module.exports = function(app) {
	console.log('room中app调用');
  return new Handler(app);
};

var Handler = function(app) {
	console.log('room中Handler调用');
  this.app = app;
};

Handler.prototype.enterRoom = function(msg, session, next) {
	channel = pomelo.app.get('channelService').getChannel(msg.room,true);
	let uid = msg.id;
	session.bind(uid);
	sid = this.app.get('serverId');
	channel.add(uid,sid);
	next(null,{});
	if(channel.seat){
		len = channel.seat.length;
		if(len<3){
			//--------把其他人发送给进入房间的人
			channel.pushMessage('enterRoom',channel.seat,{},function(err,data){
				console.log(err);
				console.log(data);
			});
			//--------把自己发给其他人

			//--------把自己加入seat

		}else{
			//------此房间已满,请选择其他房间
		}
	}else{
		channel.seat=[];
		channel.seat[0]=msg;
		channel.pushMessage('enterRoom',msg,{},function(err,data){
			console.log(err);
			console.log(data);
		});
	}
	

	//---------下线处理-----------------------------
	session.on('closed', function(){
		console.log(uid+'下线了');
		channel.leave(uid,sid);
	});
	//----------------------------------------------
	
}