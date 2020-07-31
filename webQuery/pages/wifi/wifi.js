// pages/wifi/wifi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*wifi:[
      {
        'id':1,
        'content_w1': '教学楼WiFi',
        'content_w2': '共2间教室'

      },
      {
        'id': 2,
        'title': '图书馆WiFi',
        'content_w2': '共3层'
      }
    ]*/
  },

/*view_1被点击的事件*/
onViewClick_1:function(event){
  wx.navigateTo({
    url:'/pages/teachingB/teachingB'
  })
},

/*view_2被点击的事件*/
onViewClick_2: function (event) {
    wx.navigateTo({
      url: '/pages/library/library'
    })
  }

/*
  /**
   * 生命周期函数--监听页面加载
   *//*
  onLoad: function (options) {

  },*/

  /**
   * 生命周期函数--监听页面初次渲染完成
   *//*
  onReady: function () {

  },*/

  /**
   * 生命周期函数--监听页面显示
   *//*
  onShow: function () {

  },*/

  /**
   * 生命周期函数--监听页面隐藏
   *//*
  onHide: function () {

  },*/

  /**
   * 生命周期函数--监听页面卸载
   *//*
  onUnload: function () {

  },*/

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   *//*
  onPullDownRefresh: function () {

  },*/

  /**
   * 页面上拉触底事件的处理函数
   *//*
  onReachBottom: function () {

  },*/

  /**
   * 用户点击右上角分享
   *//*
  onShareAppMessage: function () {

  }*/
})