const { request } = require('./request')

module.exports = {


  // 登录
  login:(d,p)=>request('login' + p, 'POST', d, true),
  // 首页帖子list
  recommendList:(data)=>request('/api/article/recommendList', 'GET', data, true),

  recommendListById:(id,size)=>request(`/api/article/recommendList/${id}?size=${size}`, 'GET', null, true),
  getTopArticle:(id,size)=>request(`/api/article/getTopArticle`, 'GET', null, false),
}