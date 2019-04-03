// 域名接口
app.service('serverUrl', function () {
  // ---------------------start开发环境本地---------------------------------
  this.serverUrlFun = function () {
    return 'http://123.206.16.33:8098/'
  }
  this.loginUrl = function () {
    return 'http://localhost:8001/bs/login'
  }
  this.authenticationUrl = function () {
    return 'http://localhost:8001/bs/User-center'
  }
  this.oaUrlFun = function () {
    return 'http://123.206.16.33:8093/bs'
  }
  this.portalUrlFun = function () {
    return 'http://localhost:8001/'
  }
  // ---------------------end开发环境本地---------------------------------
})
