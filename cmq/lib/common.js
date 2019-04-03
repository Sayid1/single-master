/**
 * 设置一个全局的监听器，页面1个小时无响应，则跳转至登录页，强制重新获取token，避免token鉴权失败的问题
 */
(function (window) {
  var lTime, // 最后一次点击时间
    ctTime, // 当前时间
    tOut, // 过期时间
    host, // 主机
    protocol, // 协议
    index // 计数器

  lTime = new Date()
  ctTime = new Date()
  tOut = 60 * 60 * 1000
  host = window.location.host
  protocol = window.location.protocol
  index = 1

  document.body.onclick = function () {
    index = 0
    lTime = new Date() // 记录最后一次点击时间
  }
  window.setInterval(validator, 5 * 60 * 1000)

  function validator () {
    ctTime = new Date()
    index++
    // console.log('lTime: ' + lTime)
    // console.log('ctTime: ' + ctTime)
    if (ctTime - lTime > tOut) {
      console.log('token失效')
      sessionStorage.setItem('Login', false)
      clearAllCookie()
      window.location.href = protocol + '//' + host + '/bs/login'
    }
  }
})(window)

// 清除当前域名下的所有cookie
function clearAllCookie () {
  var cookies = document.cookie.split(';')
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i]
    var eqPos = cookie.indexOf('=')
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
  }
  if (cookies.length > 0) {
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i]
      var eqPos = cookie.indexOf('=')
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      var domain = location.host.substr(location.host.indexOf('.'))
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + domain
    }
  }
}

// 获取浏览器cookie的uuid
app.service('uuidService', function () {
  this.uuidServiceFun = function (sName) {
    var aCookie = document.cookie.split('; ')
    for (var i = 0; i < aCookie.length; i++) {
      var aCrumb = aCookie[i].split('=')
      if (sName == aCrumb[0]) {
        return decodeURIComponent(aCrumb[1])
      }
    }
    return null
  }
})

// 顶部导航栏  产品
app.directive('navTop', [function () {
  return {
    restrict: 'AEMC',
    templateUrl: '../tplnav/nav.html',
    replace: true
  }
}])

// 顶部导航栏  新建
app.directive('navTopPortal', [function () {
  return {
    restrict: 'AEMC',
    templateUrl: '../../tplnav/navPortal.html',
    replace: true
  }
}])

// 顶部导航栏  订单确认界面
app.directive('navTopSure', [function () {
  return {
    restrict: 'AEMC',
    templateUrl: '../../../tplnav/navSure.html',
    replace: true
  }
}])

// 底部 新建
app.directive('footerBottom', [function () {
  return {
    restrict: 'AEMC',
    templateUrl: '../../tplnav/footer.html',
    replace: true
  }
}])

// 底部 订单确认界面
app.directive('footerBottomSure', [function () {
  return {
    restrict: 'AEMC',
    templateUrl: '../../../tplnav/footerSure.html',
    replace: true
  }
}])

// 左侧菜单栏
app.directive('menuLeft', [function () {
  return {
    restrict: 'AEMC',
    templateUrl: '../tplnav/menu.html',
    replace: true
  }
}])

// 加载动画 产品列表
app.directive('loadingNode', [function () {
  return {
    restrict: 'AEMC',
    templateUrl: '../tplnav/loading.html',
    replace: true
  }
}])

// 加载动画 新建购买
app.directive('loadingNodeNew', [function () {
  return {
    restrict: 'AEMC',
    templateUrl: '../../tplnav/loading.html',
    replace: true
  }
}])

// 封装的$http的全局加载样式
app.factory('httpInterceptor', ['$log', '$rootScope', 'uuidService', function ($log, $rootScope, uuidService) {
  return {
    request: function (config) {
      config.headers['uuid'] = uuidService.uuidServiceFun('uuid') || 'prepay'
      $rootScope.loadNodeShow = true
      return config
    },
    response: function (response) {
      $rootScope.loadNodeShow = false
      // if (response.data.skip) {
      //   window.open(response.data.url, '_blank')
      // }
      return response
    }
  }
}])
app.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('httpInterceptor')
  $httpProvider.defaults.withCredentials = true
}])

// 路由监听器
app.run(['$rootScope', 'uuidService', 'serverUrl', function ($rootScope, uuidService, serverUrl) {
  var portalUrla = serverUrl.portalUrlFun() // 获取点击产品控制台logo的链接调转
  // 监听路由开始时的操作
  $rootScope.$on('$stateChangeStart', function (evt, next, current) {
    /*
    1、cookie里面的用户类型userType
    2、userType 0是代理商或者平台管理员(不可登录产品控制台)   1是代客(可登录产品控制台)  2是超级代理商管理员(可登录产品控制台)
    */
    if (uuidService.uuidServiceFun('userType') === '0') {
      alert('您不是代客账号，您无法查看，请登录代客账号')
      window.location.href = portalUrla + 'bs/login'
    } else if (!uuidService.uuidServiceFun('userType') || !uuidService.uuidServiceFun('userType') === '') {
      alert('您还未登录，请您登录再查看')
      window.location.href = portalUrla + 'bs/login'
    }
  })
}])

// 菜单栏控制器 navCtrl
app.controller('navCtrl', ['$scope', 'serverUrl', '$http', 'uuidService', function ($scope, serverUrl, $http, uuidService) {
  $scope.portalUrla = serverUrl.portalUrlFun() // 获取点击产品控制台logo的链接调转
  $scope.userName = uuidService.uuidServiceFun('username')
  $scope.myShow = false // 我的控制台下拉
  $scope.loginState = false // 判断登录的状态
  if (uuidService.uuidServiceFun('token')) {
    $scope.loginState = true
  } else {
    $scope.loginState = false
  }

  $scope.consoleShow = false // 判断控制台的显示与隐藏
  if (uuidService.uuidServiceFun('userType') == '0') {
    $scope.consoleShow = false
  } else {
    $scope.consoleShow = true
  }

  $scope.showTip = true // 运维提示
  $scope.hideTips = function () {
    $scope.showTip = false
    $('.menu-div').css('top', '60px')
  }

  // 退出
  $scope.exit = function () {
    clearAllCookie()
    sessionStorage.setItem('Login', false)
    window.location.href = $scope.portalUrla + 'bs/login'
  }
}])

// 菜单栏列表控制器 menuCtrl
app.controller('menuCtrl', ['$scope', '$location', function ($scope, $location) {
  // 备案
  $scope.beiAnFun = function () {
    window.location.href = '../beiAn/index.html#/beiAnPage'
  }

  $scope.navFunc1 = function (arg) {
    if ($scope.navActionA === arg) {
      $scope.navActionA = 'A'
      $scope.navActionC = 'C'
    } else {
      $scope.navActionA = arg
      $scope.navActionC = arg
    }
  }
  $scope.navFunc2 = function (arg) {
    $scope.navActionB = arg
  }

  // 根据地址栏的url判断当前选中的菜单
  var address = $location.absUrl().split('bs-cloud/')[1].split('/index.html')[0] // angular --> 获取url里面产品的名称
  var bigTitle = $location.absUrl().split('index.html#/')[1] // angular --> 获取url里面模块的路由名称
  if (address === 'cloudServer') {
    $scope.navActionA = '云服务器'
    $scope.navActionC = '云服务器'
    if (bigTitle === 'overview') {
      $scope.navActionB = '概览'
    } else if (bigTitle === 'cloudHost') {
      $scope.navActionB = '云主机'
    } else if (bigTitle === 'mirrorImage') {
      $scope.navActionB = '镜像'
    } else if (bigTitle === 'snapshot') {
      $scope.navActionB = '快照列表'
    } else if (bigTitle === 'sshkey') {
      $scope.navActionB = 'SSH密钥'
    } else if (bigTitle === 'securityGroup') {
      $scope.navActionB = '安全组'
    } else if (bigTitle === 'elasticityIp') {
      $scope.navActionB = '弹性公网IP'
    } else if (bigTitle === 'mirServe') {
      $scope.navActionB = '镜像服务'
    } else if (bigTitle === 'portDeb') {
      $scope.navActionB = '25端口解封'
    } else if (bigTitle === 'cloudDisk') {
      $scope.navActionB = '云硬盘'
      $scope.navActionA = '云硬盘'
      $scope.navActionC = '云硬盘'
    } else if (bigTitle === 'diskRecycled') {
      $scope.navActionB = '云硬盘回收站'
      $scope.navActionA = '云硬盘'
      $scope.navActionC = '云硬盘'
    }
  } else if (address === 'relationalDatabase') {
    $scope.navActionA = '关系型数据库'
    $scope.navActionC = '关系型数据库'
    if (bigTitle === 'instancesList') {
      $scope.navActionB = 'MySQL-实例列表'
    } else if (bigTitle === 'taskList') {
      $scope.navActionB = 'MySQL-任务列表'
    } else if (bigTitle === 'parameterTem') {
      $scope.navActionB = 'MySQL-参数模板'
    } else if (bigTitle === 'recycleBin') {
      $scope.navActionB = 'MySQL-回收站'
    }
  } else if (address === 'SQLServer') {
    $scope.navActionA = '关系型数据库'
    $scope.navActionC = '关系型数据库'
    if (bigTitle === 'serverList') {
      $scope.navActionB = 'SQLServer-实例列表'
    }
  } else if (address === 'PostgreSQL') {
    $scope.navActionA = '关系型数据库'
    $scope.navActionC = '关系型数据库'
    if (bigTitle === 'postgreList') {
      $scope.navActionB = 'PostgreSQL-实例列表'
    }
  } else if (address === 'disDatabase') {
    $scope.navActionA = '关系型数据库'
    $scope.navActionC = '关系型数据库'
    if (bigTitle === 'exampleList') {
      $scope.navActionB = 'DCDB-实例列表'
    }
  } else if (address === 'PostgreSQL') {
    $scope.navActionA = '关系型数据库'
    $scope.navActionC = '关系型数据库'
    if (bigTitle === 'postgreList') {
      $scope.navActionB = 'PostgreSQL-实例列表'
    }
  } else if (address === 'Redis') {
    $scope.navActionA = 'NoSQL 数据库'
    $scope.navActionC = 'NoSQL 数据库'
    if (bigTitle === 'exampleList') {
      $scope.navActionB = 'Redis-实例列表'
    } else if (bigTitle === 'taskManage') {
      $scope.navActionB = 'Redis-任务管理'
    }
  } else if (address === 'mongoDB') {
    $scope.navActionA = 'NoSQL 数据库'
    $scope.navActionC = 'NoSQL 数据库'
    if (bigTitle === 'copyList') {
      $scope.navActionB = 'MongoDB-副本集实例'
    } else if (bigTitle === 'taskManage') {
      $scope.navActionB = 'MongoDB-任务管理 '
    } else if (bigTitle === 'recycleBin') {
      $scope.navActionB = 'MongoDB-回收站'
    }
  } else if (address === 'loadBalance') {
    $scope.navActionA = '负载均衡'
    $scope.navActionC = '负载均衡'
    if (bigTitle === 'LB') {
      $scope.navActionB = '实例列表'
    } else if (bigTitle === 'Certificates') {
      $scope.navActionB = '证书管理'
    }
  } else if (address === 'privateNet') {
    $scope.navActionA = '私有网络'
    $scope.navActionC = '私有网络'
    if (bigTitle === 'priNetwork') {
      $scope.navActionB = '私有网络'
    } else if (bigTitle === 'subnet') {
      $scope.navActionB = '子网'
    } else if (bigTitle === 'routTable') {
      $scope.navActionB = '路由表'
    } else if (bigTitle === 'elaCard') {
      $scope.navActionB = '弹性网卡'
    } else if (bigTitle === 'natGateway') {
      $scope.navActionB = 'NAT网关'
    } else if (bigTitle === 'equityLink') {
      $scope.navActionB = '对等连接'
    } else if (bigTitle === 'vpnGateway') {
      $scope.navActionB = 'VPN网关'
    } else if (bigTitle === 'vpnWay') {
      $scope.navActionB = 'VPN通道'
    } else if (bigTitle === 'oppGateway') {
      $scope.navActionB = '对端网关'
    } else if (bigTitle === 'linkGateway') {
      $scope.navActionB = '专线网关'
    } else if (bigTitle === 'netAcl') {
      $scope.navActionB = '网络ACL'
    } else if (bigTitle === 'parameterTpl') {
      $scope.navActionB = '参数模板'
    }
  } else if (address === 'siteManager') {
    $scope.navActionA = '网站管家'
    $scope.navActionC = '网站管家'
    if (bigTitle === 'overview') {
      $scope.navActionB = '安全概览'
    } else if (bigTitle === 'config') {
      $scope.navActionB = '防护设置'
    } else if (bigTitle === 'attack') {
      $scope.navActionB = '攻击详情'
    } else if (bigTitle === 'dnshijack') {
      $scope.navActionB = 'DNS劫持检测'
    }
  } else if (address === 'netSecurity') {
    $scope.navActionA = '大禹网络安全'
    $scope.navActionC = '大禹网络安全'
    if (bigTitle === 'defend_ip') {
      $scope.navActionB = 'BGP高防IP'
    }
  } else if (address === 'CDN') {
    $scope.navActionA = 'CDN'
    $scope.navActionC = 'CDN'
    if (bigTitle === 'domainMan') {
      $scope.navActionB = '域名管理'
    } else if (bigTitle === 'cacheRef') {
      $scope.navActionB = '缓存刷新'
    } else if (bigTitle === 'logMan') {
      $scope.navActionB = '日志管理'
    } else if (bigTitle === 'certificateMan') {
      $scope.navActionB = '证书管理'
    } else if (bigTitle === 'flowMan') {
      $scope.navActionB = '流量包管理'
    } else if (bigTitle === 'photoDia') {
      $scope.navActionB = '图片鉴黄'
    }
  } else if (address === 'message') {
    $scope.navActionA = '短信'
    $scope.navActionC = '短信'
    if (bigTitle === 'message') {
      $scope.navActionB = '开发资源'
    }
  } else if (address === 'tianyu') {
    $scope.navActionA = '天御活动防刷'
    $scope.navActionC = '天御活动防刷'
    if (bigTitle === 'tianyu') {
      $scope.navActionB = '概览'
    }
  } else if (address === 'proManage') {
    $scope.navActionA = '项目管理'
    $scope.navActionC = '项目管理'
    if (bigTitle === 'proManage') {
      $scope.navActionB = '项目管理'
    }
  } else if (address === 'COS') {
    $scope.navActionA = '对象存储'
    $scope.navActionC = '对象存储'
    if (bigTitle === 'overview') {
      $scope.navActionB = '概览'
    } else if (bigTitle === 'bucket') {
      $scope.navActionB = '存储桶列表'
    }
  } else if (address === 'CCS') {
    $scope.navActionA = '容器服务'
    $scope.navActionC = '容器服务'
    if (bigTitle === 'overview') {
      $scope.navActionB = '容器服务概览'
    } else if (bigTitle === 'cluster') {
      $scope.navActionB = '集群'
    } else if (bigTitle === 'ingress') {
      $scope.navActionB = 'Ingress'
    } else if (bigTitle === 'myMir') {
      $scope.navActionB = '我的镜像'
    } else if (bigTitle === 'myColl') {
      $scope.navActionB = '我的收藏'
    } else if (bigTitle === 'publicMir') {
      $scope.navActionB = '公有镜像'
    } else if (bigTitle === 'serve') {
      $scope.navActionB = '服务'
    } else if (bigTitle === 'log') {
      $scope.navActionB = '日志'
    }
  } else if (address === 'fileStorage') {
    $scope.navActionA = '文件存储'
    $scope.navActionC = '文件存储'
    if (bigTitle === 'fileSystem') {
      $scope.navActionB = '文件系统列表'
    } else if (bigTitle === 'perGroup') {
      $scope.navActionB = '权限组'
    }
  } else if (address === 'logService') {
    $scope.navActionA = '日志服务'
    $scope.navActionC = '日志服务'
    if (bigTitle === 'overView') {
      $scope.navActionB = '日志服务概览'
    } else if (bigTitle === 'logSet') {
      $scope.navActionB = '日志集管理'
    } else if (bigTitle === 'machGroup') {
      $scope.navActionB = '机器组管理'
    } else if (bigTitle === 'logSearch') {
      $scope.navActionB = '日志检索'
    } else if (bigTitle === 'sendTask') {
      $scope.navActionB = '投递任务管理'
    }
  } else if (address === 'DSA') {
    $scope.navActionA = '动态加速'
    $scope.navActionC = '动态加速'
    if (bigTitle === 'overview') {
      $scope.navActionB = '动态加速概览'
    } else if (bigTitle === 'domainMan') {
      $scope.navActionB = '域名管理'
    } else if (bigTitle === 'usageStatistics') {
      $scope.navActionB = '使用量统计'
    } else if (bigTitle === 'statuscode') {
      $scope.navActionB = '状态码统计'
    } else if (bigTitle === 'certificateMan') {
      $scope.navActionB = '证书管理'
    } else if (bigTitle === 'hostLogs') {
      $scope.navActionB = '日志管理'
    }
  } else if (address === 'HWCDN') {
    $scope.navActionA = '海外加速'
    $scope.navActionC = '海外加速'
    if (bigTitle === 'overview') {
      $scope.navActionB = '海外加速概览'
    } else if (bigTitle === 'domainMan') {
      $scope.navActionB = '域名管理 '
    } else if (bigTitle === 'cache') {
      $scope.navActionB = '缓存刷新 '
    } else if (bigTitle === 'usageStatistics') {
      $scope.navActionB = '使用量统计 '
    } else if (bigTitle === 'access') {
      $scope.navActionB = '访问情况统计 '
    } else if (bigTitle === 'statuscode') {
      $scope.navActionB = '状态码统计 '
    } else if (bigTitle === 'orgion') {
      $scope.navActionB = '源站统计 '
    } else if (bigTitle === 'certificateMan') {
      $scope.navActionB = '证书管理 '
    } else if (bigTitle === 'hostLogs') {
      $scope.navActionB = '日志管理 '
    } else if (bigTitle === 'nodeIP') {
      $scope.navActionB = 'CDN节点IP归属 '
    }
  } else if (address === 'GAAP') {
    $scope.navActionA = '全球应用加速'
    $scope.navActionC = '全球应用加速'
    if (bigTitle === 'joinMan') {
      $scope.navActionB = '接入管理'
    } else if (bigTitle === 'channelMan') {
      $scope.navActionB = '通道组管理'
    } else if (bigTitle === 'souMan') {
      $scope.navActionB = '源站管理'
    } else if (bigTitle === 'statData') {
      $scope.navActionB = '统计数据'
    } else if (bigTitle === 'open') {
      $scope.navActionB = '开通'
    }
  } else if (address === 'elaFlex') {
    $scope.navActionA = '弹性伸缩'
    $scope.navActionC = '弹性伸缩'
    if (bigTitle === 'flexGroup') {
      $scope.navActionB = '伸缩组'
    } else if (bigTitle === 'startCon') {
      $scope.navActionB = '启动配置'
    }
  } else if (address === 'DTS') {
    $scope.navActionA = '数据传输服务'
    $scope.navActionC = '数据传输服务'
    if (bigTitle === 'overview') {
      $scope.navActionB = '数据传输概览'
    } else if (bigTitle === 'dataMove') {
      $scope.navActionB = '数据迁移'
    } else if (bigTitle === 'migLog') {
      $scope.navActionB = '迁移日志'
    } else if (bigTitle === 'dataSyn') {
      $scope.navActionB = '数据同步'
    }
  } else if (address === 'VOD') {
    $scope.navActionA = '点播'
    $scope.navActionC = '点播'
    if (bigTitle === 'overview') {
      $scope.navActionB = '服务概览'
    } else if (bigTitle === 'videoMan') {
      $scope.navActionB = '视频管理'
    } else if (bigTitle === 'webUpload') {
      $scope.navActionB = 'web上传'
    } else if (bigTitle === 'statisAna') {
      $scope.navActionB = '统计分析'
    } else if (bigTitle === 'videoPull') {
      $scope.navActionB = '视频拉取'
    } else if (bigTitle === 'classifyMan') {
      $scope.navActionB = '分类管理'
    } else if (bigTitle === 'waterMark') {
      $scope.navActionB = '水印模版'
    } else if (bigTitle === 'transcodeTpl') {
      $scope.navActionB = '转码模版'
    }
  } else if (address === 'CKafka') {
    $scope.navActionA = '消息服务CKafka'
    $scope.navActionC = '消息服务CKafka'
    if (bigTitle === 'ckafka') {
      $scope.navActionB = 'CKafka'
    }
  }

  $scope.expanders = [{
    title: '云服务器',
    text: [{
      title: '概览',
      href: '../cloudServer/index.html#/overview'
    },
    {
      title: '云主机',
      href: '../cloudServer/index.html#/cloudHost'
    },
    {
      title: '镜像',
      href: '../cloudServer/index.html#/mirrorImage'
    },
    {
      title: '快照列表',
      href: '../cloudServer/index.html#/snapshot'
    },
    {
      title: 'SSH密钥',
      href: '../cloudServer/index.html#/sshkey'
    },
    {
      title: '安全组',
      href: '../cloudServer/index.html#/securityGroup'
    },
    {
      title: '弹性公网IP',
      href: '../cloudServer/index.html#/elasticityIp'
    },
    {
      title: '镜像服务',
      href: '../cloudServer/index.html#/mirServe'
    },
    {
      title: '25端口解封',
      href: '../cloudServer/index.html#/portDeb'
    },
    {
      title: '云服务器回收站',
      href: '../cloudServer/index.html#/hostRecycle'
    }
    ]
  },
  {
    title: '云硬盘',
    text: [{
      title: '云硬盘',
      href: '../cloudServer/index.html#/cloudDisk'
    },
    {
      title: '云硬盘回收站',
      href: '../cloudServer/index.html#/diskRecycled'
    }
    ]
  },
  {
    title: '关系型数据库',
    text: [{
      title: 'MySQL-实例列表',
      href: '../relationalDatabase/index.html#/instancesList'
    },
    {
      title: 'MySQL-任务列表',
      href: '../relationalDatabase/index.html#/taskList'
    },
    {
      title: 'MySQL-参数模板',
      href: '../relationalDatabase/index.html#/parameterTem'
    },
    {
      title: 'MySQL-回收站',
      href: '../relationalDatabase/index.html#/recycleBin'
    },
    {
      title: 'SQLServer-实例列表',
      href: '../SQLServer/index.html#/serverList'
    },
    {
      title: 'PostgreSQL-实例列表',
      href: '../PostgreSQL/index.html#/postgreList'
    },
    {
      title: 'DCDB-实例列表',
      href: '../disDatabase/index.html#/exampleList'
    }
    ]
  },
  {
    title: 'NoSQL 数据库',
    text: [{
      title: 'Redis-实例列表',
      href: '../Redis/index.html#/exampleList'
    },
    {
      title: 'Redis-任务管理',
      href: '../Redis/index.html#/taskManage'
    },
    {
      title: 'MongoDB-副本集实例',
      href: '../mongoDB/index.html#/copyList'
    },
    {
      title: 'MongoDB-任务管理 ',
      href: '../mongoDB/index.html#/taskManage'
    },
    {
      title: 'MongoDB-回收站',
      href: '../mongoDB/index.html#/recycleBin'
    }
    ]
  },
  {
    title: '负载均衡',
    text: [{
      title: '实例列表',
      href: '../loadBalance/index.html#/LB'
    },
    {
      title: '证书管理',
      href: '../loadBalance/index.html#/Certificates'
    }
    ]
  },
  {
    title: '私有网络',
    text: [{
      title: '私有网络',
      href: '../privateNet/index.html#/priNetwork'
    },
    {
      title: '子网',
      href: '../privateNet/index.html#/subnet'
    },
    {
      title: '路由表',
      href: '../privateNet/index.html#/routTable'
    },
    {
      title: '弹性网卡',
      href: '../privateNet/index.html#/elaCard'
    },
    {
      title: 'NAT网关',
      href: '../privateNet/index.html#/natGateway'
    },
    {
      title: '对等连接',
      href: '../privateNet/index.html#/equityLink'
    },
    {
      title: 'VPN网关',
      href: '../privateNet/index.html#/vpnGateway'
    },
    {
      title: 'VPN通道',
      href: '../privateNet/index.html#/vpnWay'
    },
    {
      title: '对端网关',
      href: '../privateNet/index.html#/oppGateway'
    },
    {
      title: '专线网关',
      href: '../privateNet/index.html#/linkGateway'
    },
    {
      title: '网络ACL',
      href: '../privateNet/index.html#/netAcl'
    },
    {
      title: '参数模板',
      href: '../privateNet/index.html#/parameterTpl'
    }
    ]
  },
  {
    title: '网站管家',
    text: [{
      title: '安全概览',
      href: '../siteManager/index.html#/overview'
    },
    {
      title: '防护设置',
      href: '../siteManager/index.html#/config'
    },
    {
      title: '攻击详情',
      href: '../siteManager/index.html#/attack'
    },
    {
      title: 'DNS劫持检测',
      href: '../siteManager/index.html#/dnshijack'
    }
    ]
  },
  {
    title: '大禹网络安全',
    text: [{
      title: 'BGP高防IP',
      href: '../netSecurity/index.html#/defend_ip'
    }]
  },
  {
    title: 'CDN',
    text: [{
      title: '域名管理',
      href: '../CDN/index.html#/domainMan'
    },
    {
      title: '缓存刷新',
      href: '../CDN/index.html#/cacheRef'
    },
        // {
        //   title: '使用量统计',
        //   href: '../CDN/index.html#/useStat'
        // },
        // {
        //   title: '访问情况统计',
        //   href: '../CDN/index.html#/visitStat'
        // },
        // {
        //   title: '状态码统计',
        //   href: '../CDN/index.html#/statusStat'
        // },
        // {
        //   title: '源站统计',
        //   href: '../CDN/index.html#/sourceStat'
        // },
        // {
        //   title: "全网状态监控",
        //   href: "../CDN/index.html#/dnshijack"
        // },
        // {
        //   title: '运营月报',
        //   href: '../CDN/index.html#/operMonth'
        // },
    {
      title: '日志管理',
      href: '../CDN/index.html#/logMan'
    },
    {
      title: '证书管理',
      href: '../CDN/index.html#/certificateMan'
    },
    {
      title: '流量包管理',
      href: '../CDN/index.html#/flowMan'
    },
    {
      title: '图片鉴黄',
      href: '../CDN/index.html#/photoDia'
    }
    ]
  },
  {
    title: '短信',
    text: [{
      title: '开发资源',
      href: '../message/index.html#/message'
    }]
  },
  {
    title: '项目管理',
    text: [{
      title: '项目管理',
      href: '../proManage/index.html#/proManage'
    }]
  },
  {
    title: '对象存储',
    text: [{
      title: '概览',
      href: '../COS/index.html#/overview'
    }, {
      title: '存储桶列表',
      href: '../COS/index.html#/bucket'
    }]
  },
  {
    title: '专线接入',
    text: [{
      title: '专线通道',
      href: '../lineEnter/index.html#/lineAisle'
    }]
  },
  {
    title: '主机安全（云镜）',
    text: [{
      title: '安全概览',
      href: '../cloudMirror/index.html#/overview'
    }, {
      title: '入侵检测',
      href: '../cloudMirror/index.html#/trojan_check'
    }, {
      title: '漏洞管理',
      href: '../cloudMirror/index.html#/bug_manage/sys_cmp_bug'
    }, {
      title: '告警设置',
      href: '../cloudMirror/index.html#/setting'
    }]
  },
  {
    title: '消息服务CMQ',
    text: [{
      title: '队列',
      href: '../CMQ/index.html#/queue'
    }, {
      title: '队列接收消息',
      href: '../CMQ/index.html#/message'
    }, {
      title: '主题订阅',
      href: '../CMQ/index.html#/topic'
    }]
  },
  {
    title: '云监控',
    text: [{
      title: '云服务器',
      href: '../cloudMonitor/index.html#/cloudServer'
    }, {
      title: '云数据库-Mysql',
      href: '../cloudMonitor/index.html#/cloudMysql'
    }, {
      title: '云硬盘',
      href: '../cloudMonitor/index.html#/cloudDisk'
    }, {
      title: 'NAT 网关',
      href: '../cloudMonitor/index.html#/NATgateway'
    }, {
      title: '对等连接',
      href: '../cloudMonitor/index.html#/peerConnect'
    }, {
      title: 'VPN 网关',
      href: '../cloudMonitor/index.html#/VPNgateway'
    }, {
      title: 'VPN 通道',
      href: '../cloudMonitor/index.html#/VPNchannel'
    }, {
      title: '对象存储',
      href: '../cloudMonitor/index.html#/objectStorage'
    }]
  }, {
    title: 'Elasticsearch Service',
    text: [{
      title: '集群列表',
      href: '../ES/#/es'
    }]
  },
  {
    title: '容器服务',
    text: [{
      title: '容器服务概览',
      href: '../CCS/index.html#/overview'
    }, {
      title: '集群',
      href: '../CCS/index.html#/cluster'
    }, {
      title: 'Ingress',
      href: '../CCS/index.html#/ingress'
    }, {
      title: '我的镜像',
      href: '../CCS/index.html#/myMir'
    }, {
      title: '我的收藏',
      href: '../CCS/index.html#/myColl'
    }, {
      title: '公有镜像',
      href: '../CCS/index.html#/publicMir'
    }, {
      title: '服务',
      href: '../CCS/index.html#/serve'
    }, {
      title: '日志',
      href: '../CCS/index.html#/log'
    }]
  },
  {
    title: '文件存储',
    text: [{
      title: '文件系统列表',
      href: '../fileStorage/index.html#/fileSystem'
    }, {
      title: '权限组',
      href: '../fileStorage/index.html#/perGroup'
    }]
  },
  {
    title: '日志服务',
    text: [{
      title: '日志服务概览',
      href: '../logService/index.html#/overView'
    }, {
      title: '日志集管理',
      href: '../logService/index.html#/logSet'
    }, {
      title: '机器组管理',
      href: '../logService/index.html#/machGroup'
    }, {
      title: '日志检索',
      href: '../logService/index.html#/logSearch'
    }, {
      title: '投递任务管理',
      href: '../logService/index.html#/sendTask'
    }]
  },
  {
    title: '动态加速',
    text: [{
      title: '动态加速概览',
      href: '../DSA/index.html#/overview'
    }, {
      title: '域名管理',
      href: '../DSA/index.html#/domainMan'
    }, {
      title: '使用量统计',
      href: '../DSA/index.html#/usageStatistics'
    }, {
      title: '状态码统计',
      href: '../DSA/index.html#/statuscode'
    }, {
      title: '证书管理',
      href: '../DSA/index.html#/certificateMan'
    }, {
      title: '日志管理',
      href: '../DSA/index.html#/hostLogs'
    }]
  },
  {
    title: '海外加速',
    text: [{
      title: '海外加速概览',
      href: '../HWCDN/index.html#/overview'
    }, {
      title: '域名管理 ',
      href: '../HWCDN/index.html#/domainMan'
    }, {
      title: '缓存刷新 ',
      href: '../HWCDN/index.html#/cache'
    }, {
      title: '使用量统计 ',
      href: '../HWCDN/index.html#/usageStatistics'
    }, {
      title: '访问情况统计 ',
      href: '../HWCDN/index.html#/access'
    }, {
      title: '状态码统计',
      href: '../HWCDN/index.html#/statuscode'
    }, {
      title: '证书管理 ',
      href: '../HWCDN/index.html#/certificateMan'
    }, {
      title: '日志管理 ',
      href: '../HWCDN/index.html#/hostLogs'
    }, {
      title: 'CDN节点IP归属 ',
      href: '../HWCDN/index.html#/nodeIP'
    }]
  },
  {
    title: '全球应用加速',
    text: [{
      title: '接入管理',
      href: '../GAAP/index.html#/joinMan'
    }, {
      title: '通道组管理',
      href: '../GAAP/index.html#/channelMan'
    }, {
      title: '源站管理',
      href: '../GAAP/index.html#/souMan'
    }, {
      title: '统计数据',
      href: '../GAAP/index.html#/statData'
    }, {
      title: '开通',
      href: '../GAAP/index.html#/open'
    }]
  },
  {
    title: '弹性伸缩',
    text: [{
      title: '伸缩组',
      href: '../elaFlex/index.html#/flexGroup'
    }, {
      title: '启动配置',
      href: '../elaFlex/index.html#/startCon'
    }]
  },
  {
    title: '数据传输服务',
    text: [{
      title: '数据传输概览',
      href: '../DTS/index.html#/overview'
    }, {
      title: '数据迁移',
      href: '../DTS/index.html#/dataMove'
    }, {
      title: '迁移日志',
      href: '../DTS/index.html#/migLog'
    }, {
      title: '数据同步',
      href: '../DTS/index.html#/dataSyn'
    }]
  },
  {
    title: '点播',
    text: [{
      title: '服务概览',
      href: '../VOD/index.html#/overview'
    }, {
      title: '视频管理',
      href: '../VOD/index.html#/videoMan'
    }, {
      title: 'web上传',
      href: '../VOD/index.html#/webUpload'
    }, {
      title: '统计分析',
      href: '../VOD/index.html#/statisAna'
    }, {
      title: '视频拉取',
      href: '../VOD/index.html#/videoPull'
    }, {
      title: '分类管理',
      href: '../VOD/index.html#/classifyMan'
    }, {
      title: '水印模版',
      href: '../VOD/index.html#/waterMark'
    }, {
      title: '转码模版',
      href: '../VOD/index.html#/transcodeTpl'
    }]
  },
  {
    title: '消息服务CKafka',
    text: [{
      title: 'CKafka',
      href: '../CKafka/index.html#/ckafka'
    }]
  },
  {
    title: '天御活动防刷',
    text: [{
      title: '概览',
      href: '../tianyu/index.html#/tianyu'
    }]
  }
  ]
}])
