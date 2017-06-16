import {axPost} from '../../common/HttpBean'

import userStore from '../stores/UserStore'

export function zhuce(form,thisa){
	axPost('/api/users/zhuce',$(form).serialize(),function(res){
			if(res.data==1){
				thisa.$router.push('/gamehall');
				return;
			}
			userStore.commit('zhuce',res.data);//---提交到userstore
		},function(err){
			alert(err);
	});
};
export function login(form,thisa){
	axPost('/api/users/login',$(form).serialize(),function(res){
			if(res.data==1){
				thisa.$router.push('/gamehall');
				return;
			}else{
				alert('账号或密码错误')
			}	
		},function(err){
			alert(err);
	});
};
