// index.js
// 获取应用实例
const App = getApp()
Page({
  data: {
    navTop: 100,
    tabs: [],
    activeTab: 0,
    pageTitle: "微信支付境外游礼包",
    slect: true,
    motto: 'Hello World',
    load:false,
    location: '中国香港',
    locationArray: ['美国', '中国香港', '巴西', '日本','新西兰','澳大利亚','菲律宾'],
    userServer: [
      {
        title:'汇率计算',
        icon: '/images/rate.png'
      },
      {
        title:'客服',
        icon: '/images/server.png'
      } ,  {
        title:'本地服务',
        icon: '/images/local1.png'
      }
    ],
    serverSlect:[
      {
        title: '逛街购物',
        url: '',
      },
      {
        title: '美妆零售',
        url: '',
      },
      {
        title: '便利商超',
        url: '',
      },
      {
        title: '餐饮美食',
        url: '',
      },
      {
        title: '餐饮美食',
        url: '',
      }
    ],
    showModal: true
   

  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log("页面首次加载");
    const titles = ['首页', '外卖', '商超生鲜', '购物', '美食饮品', '生活服务', '休闲娱乐', '出行']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
  },
  onReady(){
    console.log("页面加载完成");
    
  },
  onShow(){
    this.setData({
      navTop: App.globalData.navTop
    })
  },
  onHide(){

  },

  bindHandle(e){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  toastHandle(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  loadingHandle(){
    this.setData({load: true})

    setTimeout(()=>{
      this.setData({load: false})
    },3000)
  },
  bindPickerChange: function(e) {
    let index = e.detail.value
    this.setData({
      location: this.data.locationArray[index]
    })
  },
  
  // 关掉
  getYouhuiquan(){
    wx.navigateTo({
      url: '/pages/user/user',
    })
  },
  enterShop(e){

    
  },
  touchmove(){
    return false
  },

  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  }
 

})
