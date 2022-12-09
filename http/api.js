const { request } = require('./request')

module.exports = {


  // 登录
  login:(d,p)=>request('login' + p, 'POST', d, true),
  // 首页帖子list
  recommendList:()=>request('/api/article/recommendList', 'GET', null, true),

}