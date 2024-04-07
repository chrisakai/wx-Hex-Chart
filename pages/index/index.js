//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '方案分析小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  subscribeMessages: function(e) {
    console.log(e)
    wx.requestSubscribeMessage({
      tmplIds: [
        'tcD5JBa018XJfwaXuSCnZ6wynQUqW6HdNir63AxpQ4E',
        'xUXSsSOB3P46k_F8oKoqbshxqxXxPD1lIuiSjRW3afM'
      ],
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  syncOpenid: function(e) {
    wx.login({
      success(res) {
        if (res.code) {
          wx.request({
            url: 'http://127.0.0.1:8080/sync_openid',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('login failed', + res.errMsg)
        }
      }
    })
  },
  selectPlanlist(){
    wx.navigateTo({
      url: '/pages/planList/planList',
    })
  }
})
