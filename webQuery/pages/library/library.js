// pages/library/library.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    library: [
      {
        sequence: 1,            
        lenOfName: 8,           //wifi名长
        WIFIname: "library1",   //wifi名
        isRecommend: 0x00,      //0x00推荐，0x01不推荐
        state: 0x00,            //0x00繁忙，0x01普通，0x02空闲
        userNum: 10,            //用户人数
        MaxSpeed: 1232,         //最大带宽
        curSpeed: 12312,        //当前流量
    }
    ],
  },

  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:2233/library',
      data: {
      },
      header: {
      },
      success: function (res){
        console.log(res);   
        var Str =res.data.substr(17,1);
        var num = Number(Str);
        console.log(num);
      }
    }
    )
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