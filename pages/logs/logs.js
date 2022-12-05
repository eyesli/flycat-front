// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },


  onChange:function(e){


    util.debounce2();
    let that=this;
   
    const value= e.detail;
    wx.request({
      url: 'http://192.168.101.11:8080/api/test', //接口地址
      method: 'post',
      data: {
        x: value,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
           
            that.setData({
             
              value:res.data.data.x
            })
          
      }

    },
    )
  },



  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
