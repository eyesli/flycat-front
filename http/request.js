

const {baseUrl}=require('./env.js').test
module.exports = {
  request: function(url, method = 'POST', data = {}, isLoading = true, loadingMsg = "加载中...") {
    // 操作url
    var url = `${baseUrl}${url}`
    console.log(url)
    // 操作data
    var data = data
    if (isLoading) wx.showLoading({ title: loadingMsg });
    let usertoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODAwNjgyMDUsInVzZXJJZCI6IjYzOTQ3NGRmNjUzZmJkNzY3MDllMmJmYSJ9.IF8DzckZfSBOxXpQbHlHT8-mtYHbV3eIfUOAp8-bzPY';
    return new Promise((resolve, reject)=>{
      wx.request({
        url: url,
        method: method,
        data: data,
        timeout: 5 * 1000,
        header: {
          'Content-type': 'application/json',
          'access-token': usertoken
        },
        success(res) {
          console.log(`##############################`)
          console.log(`url: ${url}`)
          console.log(`----- start reqBody -----`);
          console.log(data);
          console.log(`----- end reqBody -----`);
          console.log(`----- start res -----`);
          console.log(res.data);
          console.log(`----- end res -----`);
          console.log(`##############################`)
          if (res.data.code === 200) {
            resolve(res.data);
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            });
          }
        },
        fail(res) {
          wx.showToast({
            title: res.msg,
            icon: 'none'
          });
          reject(res.data)
        }
      })
    })
  }
}
