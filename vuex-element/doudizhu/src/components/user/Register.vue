<template>
  <div class="registerBox">
    <el-row>
			<el-col :span="8">&nbsp;</el-col>
			<el-col :span="8" style='align-content: center;border:1px solid #99a9bf;padding: 21px;'>
				<el-form ref="form" name='zhuceForm'>
					<el-form-item style='text-align: center;margin:0px;'>
						注册
					</el-form-item>
				  <el-form-item >
				    <el-input placeholder="请输入email" class='elInputClass' name='email'></el-input>
				    <el-input placeholder="请输入密码" type='password' class='elInputClass' name='pwd'></el-input>
				    <el-input placeholder="请再次输入密码" type='password' class='elInputClass' name='repwd'></el-input>
				    <el-input placeholder="请输入昵称" class='elInputClass' name='nicheng'></el-input>
				  </el-form-item>
				  <el-form-item style='text-align: center'>
				    <el-button type="primary" @click='register'>注册</el-button>
				    <router-link to="/">
				    	<el-button>返回登陆</el-button>
				    </router-link>
				  </el-form-item>
				</el-form>
			</el-col>
			<el-col :span="8">&nbsp;</el-col>
		</el-row>
  </div>
</template>

<script>
import {zhuce} from '../../vuex/actions/UserAction'//---请求后台
import {getZhuce} from '../../vuex/getters/UserGetter'//---监听前台
export default {
  name: 'registerBox',
  data () {
    return {
   
    }
  },
  methods:{
  	register:function(e){
  		zhuce(zhuceForm,this);
  	}
  },
  computed:{
		data:getZhuce
	}
  
}
</script>
<style>
	.elInputClass{
		margin-bottom:15px;
	}
</style>

