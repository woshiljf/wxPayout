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
    youhuiList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   showModal: true
  },
  // 组件生命周期函数
  lifetimes: {
    // 还不能设置数据this.setData
    created: function(){

    },
    // 可以获取值
    attached: function () {
  
     },
    //  组件离开页面节点被出发
     detached(){

     }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
    getNext(){
      
      // 出发父组件的getNext方法
      this.triggerEvent('getNext')
      

    }

  }
})
