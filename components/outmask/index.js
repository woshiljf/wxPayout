// components/navbar/index.js
const App = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type:Boolean,
      value: true
    },
    wxpayOut:{
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   showModal: true,
   isMore: false,
   autoplay: true,
   interval: 100,
   duration: 100,
   moneny: 0
  },
  // 组件生命周期函数
  lifetimes: {
    // 还不能设置数据this.setData
    created: function(){

    },
    // 可以获取值
    attached: function () {

    
      let timeRand = 2000+ Math.ceil(Math.random()*1000)
      let timeId = setTimeout(() => {
      this.setData({
        autoplay: false,
        isMore: true
      })
    
    }, timeRand);
   this.setData({
     timeId: timeId
   })

  
    },
    //  组件离开页面节点被出发
     detached(){
       clearTimeout(this.data.timeId)
     }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getMore(){
      this.triggerEvent('getMore',{m: this.data.moneny})
    },
     testAimation(e){
      // 获取数据
      var m = e.detail.current
      this.setData({
        moneny: m
      })
     }
  }
})
