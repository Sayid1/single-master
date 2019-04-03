// 域名接口
app.service('serverUrl', function () {
  // ---------------------start测试线上---------------------------------
  this.serverUrlFun = function () {
    return 'http://123.206.16.33:8098/'
  }
  this.loginUrl = function () {
    return 'http://94.191.64.197/bs/login'
  }
  this.authenticationUrl = function () {
    return 'http://94.191.64.197/bs/User-center'
  }
  this.oaUrlFun = function () {
    return 'http://123.206.16.33:8093/bs'
  }
  this.portalUrlFun = function () {
    return 'http://94.191.64.197/'
  }
  // ---------------------end测试线上---------------------------------
})
