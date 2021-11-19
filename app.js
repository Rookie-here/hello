// app.js
App({
  //小程序初始化完成自动执行onLaunch
  onLaunch() {
    // 展示本地存储能力,如果为空，logs = []
    const logs = wx.getStorageSync('logs') || []
    //数组头部插入
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
