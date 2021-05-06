// pages/shop/shop.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: '境外游礼包',
    username:"小狗",
    pageLogo: '/images/watsons.jpeg',
    shopName:{
      name: '屈臣氏',
      ename: 'watsons'
    },
    textColor: 'black',
    newsList: [],
    showModal1: true,
    showModal2: false,
    navTop: 100,
    isMore: false,
    coutMoneny: 0,
    isShow: true,
    // 优惠券列表
    youhuiList:[],
    // 商家优惠券列表
    shopYouList:[],
    // 微信支付优惠券信息
    wxpay:null,
    wxpayOut:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      that.setData({
        wxpay: data.inner,
        wxpayOut: data.out
      })
    })
  // 获取微信优惠券数据
  that.getWxconpon()
  // 获取店铺优惠券
  that.getShopconpon()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      navTop: App.globalData.navTop
    })
    
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 自定义异步调用函数
 promiseify(fn){
  return async function(args){
    return new Promise((resolve,reject)=>{
      fn({
        ...(args || {}),
        success: res =>resolve(res),
        fail: err => reject(err)
      })
 
    })
 
  }
 },
  getWxconpon(){
    // 获取微信优惠券数据
//  判断是否存储换成数据，没有发起请求，有了读取
    try {
      var value = wx.getStorageSync('youhuiList')
      // 已经有数据
      if (value) {
        this.setData({
          youhuiList: value
        })
      }else{
        // 发起请求
        this.getRequestWxconpon()
      }
    } catch (e) {
      // Do something when catch error
    }

  },
// 获取店铺优惠券
  getShopconpon(){
    // 获取微信优惠券数据
//  判断是否存储换成数据，没有发起请求，有了读取
    try {
      var value = wx.getStorageSync('shopYouList')
      // 已经有数据
      if (value) {
        this.setData({
          shopYouList: value
        })
      }else{
        // 发起请求
        this.getRequestShopConpon()
      }
    } catch (e) {
      // Do something when catch error
    }

  },

//  获取微信优惠券列表请求
  getRequestWxconpon(){
    let that = this
    wx.request({
      url: 'https://example.com/ajax?dataType=member',
      dataType: 'json',
      success(res) {
        // 存储数据
        wx.setStorage({
          key:"youhuiList",
          data: res.data.list
        })
        that.setData({
          youhuiList: res.data.list
        })
      }
    })
  },
  getRequestShopConpon(){
    let that = this
    // 获取店铺优惠券数据
    wx.request({
      url: 'https://example.com/ajax?num=4',
      dataType: 'json',
      data: {
        num: 4
      },
      success(res) {
        wx.setStorage({
          key:"shopYouList",
          data: res.data.list
        })
        that.setData({
          shopYouList: res.data.list
        })
      }
    })
  },
  // 自定义逻辑处理
  getNext: function() { 
    this.setData({
    showModal1: false,
    showModal2: true
    })
   },
  //  领取更多
   getMore(data){
    var tempList = this.data.youhuiList
    tempList[1].moneny4 = data.detail.m
    this.setData({
        youhuiList: tempList
    })
     this.setData({
       showModal2: false
     })
   },

})