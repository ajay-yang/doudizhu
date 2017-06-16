<template>
  <div class="gamehallBox">
	   <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex2" theme="dark" >
	   		<el-menu-item index="1">
	   			<h2 style='color: darkgoldenrod;'>
	   					欢迎来到游戏大厅
	   			</h2>
	   		</el-menu-item>
			  <el-submenu  index="2" style='float:right;margin-right:10px'>
				    <template slot="title">个人中心</template>
				    <el-menu-item class='el-icon-message' index='2-1'> 消息 </el-menu-item>
				    <el-menu-item  class='el-icon-star-on'  index='2-2'> 我的空间 </el-menu-item>
				    <el-menu-item class='el-icon-delete2'  index='2-3'> 注销 </el-menu-item>
			  </el-submenu>
		</el-menu>
		<el-row>
			<el-col :span='4'>
					<levelnav/>
			</el-col>
			<el-col :span='20'>
					<roomlist/>
			</el-col>
		</el-row>
  </div>
</template>

<script>
	import Levelnav from './Levelnav'
	import RoomList from './RoomList'
export default {
  name: 'hello',
  data () {
    return {
    		
    }
  },
  components:{
		levelnav:Levelnav,
		roomlist:RoomList
  }
}
</script>

