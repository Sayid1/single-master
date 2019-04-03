// 域名接口
app.service('serverUrl', function ($rootScope) {
  // ---------------------start客户线上---------------------------------
  this.serverUrlFun = function () {
    return '/api/'
  }
  this.loginUrl = function () {
    return 'https://dhycloud.com/bs/login'
  }
  this.authenticationUrl = function () {
    return 'https://dhycloud.com/bs/User-center'
  }
  this.oaUrlFun = function () {
    return 'https://dhycloud.com:8083/bs'
  }
  this.portalUrlFun = function () {
    return 'https://dhycloud.com/'
  }
  // ---------------------end客户线上---------------------------------
})
