var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '后台服务已经开启。。。。。'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
