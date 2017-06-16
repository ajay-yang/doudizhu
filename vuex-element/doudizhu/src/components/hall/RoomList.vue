<template>
	<div>
		<el-button type="success" @click='openNewRoom'>新建房间</el-button><br/>
		<el-form ref="newRoomForm" name='newRoomForm' style='display:none'>
			<br/>
			<el-form-item style='text-align: center;margin:0px;'>
				</el-form-item>
		  	<el-form-item  >
		    <el-input placeholder="设置密码,无密码任何人都可进入" class='elInputClass' name='roompwd'></el-input>
			    <center>
			    <el-button type="primary"  @click='newRoom'>创建房间</el-button>
			    <el-button @click='hidNewRoom'>收起</el-button>
			    </center>
			  </el-form-item>
		</el-form>
		
		<!--显示房间列表-->
		<el-table :data="roomList">
		    <el-table-column
		      fixed
		      prop="room"
		      label="房号">
		    </el-table-column>
		    <el-table-column
		      prop="num"
		      label="人数">
		    </el-table-column>
		    <el-table-column
		      prop="pwd"
		      label="密码">
		    </el-table-column>
		    <el-table-column
		      prop="createtime"
		      label="创建时间">
		    </el-table-column>
		    <el-table-column
		      fixed="right"
		      label="操作">
		      <template scope="scope">
		        <el-button
		          type="text"
		          size="small">
		         	 进入
		        </el-button>
		      </template>
		    </el-table-column>
		  </el-table>

	</div>
</template>

<script>
import {newRoom,getRoomlist} from '../../vuex/actions/HallAction'//---请求后台
export default {
	data(){
		return{
			roomList:[]
		}
	},
	mounted:function(){
		//页面加载完，axios向服务器发起请求，获取房间列表。
		getRoomlist(this);
	},
  	methods:{
	  	openNewRoom:function(){
	  		$(newRoomForm).show();
	  	},
	  	hidNewRoom:function(){
	  		$(newRoomForm).hide();
	  	},
		newRoom:function(){
		 let formObj ='roompwd='+ newRoomForm.roompwd.value;
			newRoom(formObj,this);
		}
  	}
}
</script>