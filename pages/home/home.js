const {
  recommendListById,
  getTopArticle
} = require('../../http/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {


    active: 0,
    showComment: ['1'],
    pictures: [
    ],
    pageInfo: {
      "page": 1,
      "size": 20
    },
    tabs_active: 1,
    recommendList: [],
    next: false,
    topArticle:[]
  },


  preview: function (e) {

    const list= e.currentTarget.dataset.list;
    const current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: list, // 需要预览的图片http链接列表

    })
  },

  comment: function (e) {
    this.setData({
      showComment: e.detail,
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {


    getTopArticle().then((res) => {

      if (res.code === 200) {

        this.setData({
          topArticle: res.data,
        })

      }
      
      console.log(this.data.topArticle[0].article)
    })

    //第一次进来传index，代表第一页，后面要传帖子ID
    recommendListById("index", 10).then((res) => {

      if (res.code === 200) {


        this.setData({
          recommendList: res.data.content,
          next: res.data.next
        })

      }
    }).finally(() => wx.hideLoading());

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("生命周期函数--监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("生命周期函数--监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("生命周期函数--监听页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("页面相关事件处理函数--监听用户下拉动作")

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("页面上拉触底事件的处理函数")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
