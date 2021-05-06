// pages/loading/loading.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      timeId: 0,
      navTop:0,
      title: "境外游礼包"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log('加载onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 async onReady () {
    let that = this
    const getwxPayinfo = this.promiseify(wx.request)
    const getOutpayinfo = this.promiseify(wx.request)
    try {
      // 获取微信支付弹出优惠券数据
        const res1 = await getwxPayinfo({
        url: 'https://example.com/ajax?wxp=all',
        dataType: 'json',
        data: {
          wxp: "all"
        },
      })
      const res2 = await getOutpayinfo({
        url: 'https://example.com/ajax?wxout=all',
        dataType: 'json',
        data: {
          wxout: "all"
        },
      })
      let inner = res1.data.info
      let out = res2.data.info
      // 路由跳转
      wx.navigateTo({
        url: '/pages/shop/shop',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', {inner,out})
        }
    })

    } catch (error) {
      // 请求失败
      wx.showModal({
        title: '提示',
        content: '网络延时，重新加载',
        success (res) {
          if (res.confirm) {
            that.onReady()
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
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

    clearTimeout(this.data.timeId)

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

  }
})