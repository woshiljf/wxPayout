// app.js

// 使用fundebug监测小程序异常错误
/**
 *  服务器域名没有配置(https://fundebug.com)
 */
// var fundebug = require('./utils/fundebug.1.3.1.min.js')
// fundebug.init(
//   {  
//       // 测试用的apikey
//       apikey : '5df9dafca14af2b9cece3952e3bb94db4c86522425c3a4a126cfb9e702be3864'
// })

App({
  onLaunch() {
    // 获取设备信息
    // fundebug.test()
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          // 导航栏的高度
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;
          this.globalData.navHeight = navHeight;
          this.globalData.navTop = navTop;
          this.globalData.windowHeight = res.windowHeight;
          this.globalData.windowWight = res.windowWidth
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  // 监听错误信息
  onError(err){
    // 上报错误
    // wx.request({
    //   url: "https://testerror", 
    //   method: "POST",
    //   errMsg: err
    // })
  },
  globalData: {
    userInfo: null
  }
})
