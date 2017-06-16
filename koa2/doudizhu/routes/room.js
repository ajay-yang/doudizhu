var router = require('koa-router')();

router.get('/', async function (ctx, next) {
	  let loginbean = ctx.session.loginbean;
	  if(!loginbean){
	  	ctx.body='登陆过期';
	  	return;
	  }
	
	

})
module.exports = router;
