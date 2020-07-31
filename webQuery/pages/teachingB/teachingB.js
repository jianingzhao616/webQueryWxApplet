// pages/teachingB/teachingB.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teachingB: [
      {
        sequence: 1,
        lenOfName: 2,
        WIFIname: "class101",
        isRecommend: false,
        state: 0x00,
        userNum: 8,
        MaxSpeed: 10240,
        CurSpeed: 102400,
    },
    {
      sequence: 1,
      lenOfName: 2,
      WIFIname: "class102",
      isRecommend: true,
      state: 0x00,
      userNum: 3,
      MaxSpeed: 1024,
      CurSpeed: 102400,
    },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:2233/classroom',
      data: {
      },
      header: {
      },
      success: function (res){
        console.log(res);
      }
    })
  },

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