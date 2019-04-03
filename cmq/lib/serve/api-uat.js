// 域名接口
app.service('serverUrl', function () {
  // ---------------------start客户演示线上---------------------------------
  this.serverUrlFun = function () {
    return '/api/'
  }
  this.loginUrl = function () {
    return 'http://qcloud.huishenghuo.info/bs/login'
  }
  this.authenticationUrl = function () {
    return 'http://qcloud.huishenghuo.info/bs/User-center'
  }
  this.oaUrlFun = function () {
    return 'http://qcloud.huishenghuo.info:8083/bs'
  }
  this.portalUrlFun = function () {
    return 'http://qcloud.huishenghuo.info/'
  }
  // ---------------------end客户演示线上---------------------------------
})
