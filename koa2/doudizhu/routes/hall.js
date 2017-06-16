var router = require('koa-router')();
var sd  = require('silly-datetime');
//---引入内存数据库
var redis = require('redis');
var client = redis.createClient();

client.on("error", function(err) {
console.log("Error " + err);
});
//---获取房间所有的房间列表
router.get('/getRoomList', async function (ctx, next) {
  let loginbean = ctx.session.loginbean;
  if(!loginbean){
  	ctx.body='登陆过期';
  	return;
  }
  let roomList = []; //--创建房间列表
  
 //---获取房间号
let roomNames = await new Promise(function(resolve ,reject){
	client.lrange('room',0 ,20,function(err,rs){
		resolve(rs);
	})
});
  let len = roomNames.length;
  
for(let i=0;i<len;i++){
	let roomInfo = await new Promise(function(resolve,reject){
		client.hgetall(roomNames[i],function(err,rs){
			resolve(rs);
		});
	});
	if(roomInfo!=null){
		if(roomInfo.pwd==''){
			roomInfo.pwd ='无';
		}else{
			roomInfo.pwd = '有';
		}
		let time = roomInfo.createtime;
		roomInfo.room = roomNames[i];
		roomList.push(roomInfo);
	}
}
 	ctx.body = roomList;

});
//---创建房间号
router.get('/newroom', async function (ctx, next) {
  let loginbean = ctx.session.loginbean;
   if(!loginbean){
	  	ctx.body='登陆过期';
	  	return;
   }
   //---获取房间流水号
   let roomid = await new Promise(function(resolve,reject){
   	client.hincrby('roomid','id',1,function(err,roomidRS){
// 	    console.log(roomidRS)
   		  resolve(roomidRS);
   	})
   });
   //---流水id插入房间。
   await client.lpush('room','room'+roomid);
   //---设置房间的基本信息。
   let roompwd = ctx.query.roompwd;
	//---使用一个日期时间，格式为时间201706091356
//	var nowtime = sd.format(new Date(),'YYYY-MM-DD HH:mm');
	var date = new Date();
	var daytime = sd.format(date,'YYYY-MM-DD');
	var hourtime = sd.format(date,'HH:mm');
  var arrDay = ['日','一','二','三','四','五','六'];

// 	console.log(date.getDay());

  let time = daytime +' / ' + '周' + arrDay[date.getDay()] +' / '+ hourtime  ;

   await client.hmset('room'+roomid,'num',1,'start',0,'pwd',roompwd,'createtime',time);
//	console.log(roomid);
	
   ctx.body='roomid='+roomid;
});
module.exports = router;