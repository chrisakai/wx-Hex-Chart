// pages/addPlan/plan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      content: null
    },
    
    bindContent(event){
      this.data.content = event.detail.value
    },

    save() {
      let content = this.data.content
      // 获取缓存数据，如果没有回返回[],如果有返回已有数据
      let list = wx.getStorageSync('list')||[]
      // 组装数据对象
      let data = {
        content: content
      }
      // 在开头插入到数组中
      list.unshift(data)
      // 设置到本地缓存
      wx.setStorageSync('list', list)
      // 回到上一页面
      wx.navigateBack()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    }
})