const {
  recommendList,
  recommendListById
} = require('../../http/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {


    active: 0,
    showComment: ['1'],
    pictures: [
      'https://ss2.meipian.me/users/7688015/fd48714cf63cb47ee267c9823f468ab7.jpg?imageView2/2/w/750/h/1400/q/80',
      'https://img2.baidu.com/it/u=1929970115,3940539460&fm=253&fmt=auto&app=138&f=JPEG?w=291&h=220',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200220%2Fd40e11b10c9c4b91ab7e3338173744c8.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672824205&t=a96bec56e2e68a7c7647c088d9b4fbf5'
    ],
    pageInfo: {
      "page": 1,
      "size": 20
    },
    tabs_active: 1,
    recommendList: [],
    next:false
  },


  preview: function (e) {
    var index = e.currentTarget.dataset.index;

    wx.previewImage({
      current: "https://ss2.meipian.me/users/7688015/fd48714cf63cb47ee267c9823f468ab7.jpg?imageView2/2/w/750/h/1400/q/80", // 当前显示图片的http链接
      urls: this.data.pictures, // 需要预览的图片http链接列表

    })
  },

  comment: function (e) {
    this.setData({
      showComment: e.detail,
    });
  },



  tabswitch: function (e) {

  },


  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad(options) {



    //第一次进来传index，代表第一页，后面要传帖子ID
    recommendListById("index",10).then((res) => {

      if (res.code === 200) {

      
        this.setData({
          recommendList:res.data.content,
          next:res.data.next
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

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