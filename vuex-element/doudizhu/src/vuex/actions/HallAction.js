import {axGet} from '../../common/HttpBean'

export function getRoomlist(thisa){
	axGet('/api/hall/getRoomlist',{},function(res){
			thisa.roomList = res.data;
		},function(err){
			alert(err);
	});
};
export function newRoom(formObj,thisa){
	axGet('/api/hall/newroom?'+ formObj,{},function(res){
		//---创建房间成功，打印出房间号。
//		alert(res.data);
		alert('创建房间成功')
//	    thisa.$router.push({path: '/my/profile', query: queryData});
		},function(err){
			alert(err);
	});
};
