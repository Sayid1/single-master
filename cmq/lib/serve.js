// 预付费调整新增服务
app.factory('PrepaidFactory', function () {
  var service = {
    addParams: addParams
  }
  return service

  function addParams (params, num, fee, mon) {
    params['__num__'] = Number(num)
    params['__fee__'] = Number(fee)
    params['__mon__'] = Number(mon)
    return params
  }
})

// 控制分页下沉
app.directive('pagenum', [function () {
  return {
    restrict: 'A',
    replace: false,
    link: function (scope, ele, attr) {
      $(function () {
        var load = ele.next()
        // console.log(load);
        load.css({
          position: 'fixed',
          bottom: '0',
          right: '20px',
          zIndex: '1000'
        })
      })
    }
  }
}])

// 控制分页下沉
app.directive('pagenum2', [function () {
  return {
    restrict: 'A',
    replace: false,
    link: function (scope, ele, attr) {
      $(function () {
        var load = ele.next()
        // console.log(load);
        load.css({
          float: 'right',
          marginTop: '25px'
        })
      })
    }
  }
}])

app.directive('pagenum3', [function () {
  return {
    restrict: 'A',
    replace: false,
    link: function (scope, ele, attr) {
      $(function () {
        var load = ele.next()
        // console.log(load);
        load.css({
          position: 'fixed',
          bottom: '0',
          right: '45px',
          zIndex: '1000'
        })
      })
    }
  }
}])

// 数据表
var dict = {
  'ZONE_STATE': {
    'AVAILABLE': '可用',
    'UNAVAILABLE': '不可用'
  },
  'IMAGE_TYPE': {
    'PUBLIC_IMAGE': '公共镜像 (官方镜像)',
    'SHARED_IMAGE': '共享镜像(其他账户共享给本帐户的镜像)',
    'MARKET_IMAGE': '服务市场 (服务市场提供的镜像)',
    'PRIVATE_IMAGE': '私有镜像 (本帐户创建的镜像)'
  },
  'EIP_STATE': {
    'UNBINDING': '解绑中',
    'UNBIND': '未绑定',
    'BIND': '已绑定',
    'BIND_ENI': '绑定在网卡上，且该网卡没有挂载到实例上',
    'CREATE_FAILED': '创建失败',
    'BINDING': '绑定中',
    'CREATING': '创建中',
    'OFFLINING': '下线中'
  },
  'BLOCK_DEVICE': {
    'LOCAL_BASIC': '本地硬盘',
    'LOCAL_SSD': '本地SSD硬盘',
    'CLOUD_PREMIUM': '高性能云硬盘',
    'CLOUD_BASIC': '普通云硬盘',
    'CLOUD_SSD': 'SSD云硬盘',
    'CLOUDBASIC': '普通云硬盘',
    'CLOUDPREMIUM': '高性能云硬盘',
    'CLOUDSSD': 'SSD云硬盘'
  },
  'AUTO_RENEW': {
    'NOTIFY_AND_AUTO_RENEW': '通知且自动续费 (通知即将过期，而且自动续费)',
    'DISABLE_NOTIFY_AND_MANUAL_RENEW': '不通知且不自动续费 (不通知即将过期，也不自动续费)',
    'NOTIFY_AND_MANUAL_RENEW': '通知且不自动续费。（通知即将过期，但不自动续费)'
  },
  'ZONEID': {
    '100001': '广州一区',
    '100002': '广州二区',
    '100003': '广州三区',
    '100004': '广州四区',
    '200001': '上海一区',
    '200002': '上海二区',
    '200003': '上海三区',
    '200004': '上海四区',
    '300001': '香港一区',
    '400001': '多伦多一区',
    '700001': '上海金融一区',
    '700002': '上海金融二区',
    '800001': '北京一区',
    '800002': '北京二区',
    '900001': '新加坡一区',
    '110001': '深圳金融一区',
    '110002': '深圳金融二区',
    '120001': '广州Open专区',
    '150001': '硅谷一区',
    '160001': '成都一区',
    '160002': '成都二区',
    '170001': '法兰克福一区',
    '180001': '首尔一区',
    '190001': '重庆一区'
  },
  'ZONE': {
    'EU-FRANKFURT-1': '法兰克福一区',
    'AP-SHENZHEN-FSI-1': '深圳金融一区',
    'AP-SHENZHEN-FSI-2': '深圳金融二区',
    'AP-BEIJING-1': '北京一区',
    'AP-SHANGHAI-FSI-1': '上海金融一区',
    'AP-BEIJING-2': '北京二区',
    'AP-SHANGHAI-FSI-2': '上海金融二区',
    'AP-HONGKONG-1': '香港一区',
    'AP-HONGKONG-2': '香港二区',
    'AP-BEIJING-3': '北京三区',
    'AP-BEIJING-4': '北京四区',
    'AP-SINGAPORE-1': '新加坡一区',
    'AP-GUANGZHOU-1': '广州一区',
    'AP-SHANGHAI-2': '上海二区',
    'AP-GUANGZHOU-2': '广州二区',
    'AP-SHANGHAI-1': '上海一区',
    'AP-SHANGHAI-3': '上海三区',
    'AP-SHANGHAI-4': '上海四区',
    'NA-TORONTO-1': '多伦多一区',
    'NA-SILICONVALLEY-1': '硅谷一区',
    'NA-SILICONVALLEY-2': '硅谷二区',
    'AP-GUANGZHOU-3': '广州三区',
    'AP-CHENGDU-1': '成都一区',
    'AP-GUANGZHOU-4': '广州四区',
    'AP-CHENGDU-2': '成都二区',
    'AP-SEOUL-1': '首尔一区',
    'AP-GUANGZHOU-OPEN-1': '广州OPEN专区',
    'AP-CHONGQING-1': '重庆一区',
    'AP-BANGKOK-1': '泰国一区',
    'EU-MOSCOW-1': '莫斯科一区',
    'AP-MUMBAI-1': '孟买一区',
    'NA-ASHBURN-1': '弗吉尼亚一区'
  },
  'ZONEA2': {
    'AP-SHENZHEN-FSI-1': 'sz',
    'AP-SHENZHEN-FSI-2': 'sz',
    'AP-BEIJING-1': 'bj',
    'AP-SHANGHAI-FSI-1': 'sh',
    'AP-BEIJING-2': 'bj',
    'AP-SHANGHAI-FSI-2': 'sh',
    'AP-BEIJING-3': 'bj',
    'AP-GUANGZHOU-1': 'gz',
    'AP-SHANGHAI-2': 'sh',
    'AP-SHANGHAI-3': 'sh',
    'AP-GUANGZHOU-2': 'gz',
    'AP-SHANGHAI-1': 'sh',
    'AP-GUANGZHOU-3': 'gz',
    'AP-CHENGDU-1': 'cd',
    'AP-GUANGZHOU-4': 'gz',
    'AP-CHENGDU-2': 'cd',
    'AP-GUANGZHOU-OPEN-1': 'gz',
    'AP-CHONGQING-1': 'cq'
  },
  'ZONEA3': {
    'AP-SHENZHEN-FSI': 'sz',
    'AP-BEIJING': 'bj',
    'AP-SHANGHAI-FSI': 'sh',
    'AP-GUANGZHOU': 'gz',
    'AP-SHANGHAI': 'sh',
    'AP-CHENGDU': 'cd',
    'AP-GUANGZHOU-OPEN': 'gz',
    'AP-CHONGQING': 'cq'
  },
  'EREANONUM': {
    'EU-FRANKFURT-1': '法兰克福一区',
    'AP-SHENZHEN-FSI-1': '深圳金融一区',
    'AP-SHENZHEN-FSI-2': '深圳金融二区',
    'AP-BEIJING-1': 'ap-beijing',
    'AP-SHANGHAI-FSI-1': '上海金融一区',
    'AP-BEIJING-2': 'ap-beijing',
    'AP-SHANGHAI-FSI-2': '上海金融二区',
    'AP-HONGKONG-1': 'ap-hongkong',
    'AP-HONGKONG-2': 'ap-hongkong',
    'AP-BEIJING-3': 'ap-beijing',
    'AP-SINGAPORE-1': '新加坡一区',
    'AP-GUANGZHOU-1': 'ap-guangzhou',
    'AP-SHANGHAI-2': 'ap-shanghai',
    'AP-SHANGHAI-3': 'ap-shanghai',
    'AP-GUANGZHOU-2': 'ap-guangzhou',
    'AP-SHANGHAI-1': 'ap-shanghai',
    'NA-TORONTO-1': '多伦多一区',
    'NA-SILICONVALLEY-1': '硅谷一区',
    'AP-GUANGZHOU-3': 'ap-guangzhou',
    'AP-CHENGDU-1': 'ap-chengdu',
    'AP-GUANGZHOU-4': 'ap-guangzhou',
    'AP-CHENGDU-2': 'ap-chengdu',
    'AP-SEOUL-1': '首尔一区',
    'AP-GUANGZHOU-OPEN-1': '广州OPEN专区',
    'AP-CHONGQING-1': 'ap-chongqing'
  },
  'INSTANCE_STATE': {
    'STARTING': '启动中',
    'RUNNING': '运行中',
    'STOPPED': '已停止',
    'REBOOTING': '重启中',
    'PENDING': '准备中',
    'STOPPING': '停止中'
  },
  'CDBINSTANCE_PAYTYPE': {
    '0': '包年包月',
    '1': '按量计费',
    '2': '后付费月结'
  },
  'CDBINSTANCE_STATE': {
    '0': '创建中',
    '1': '运行中',
    '4': '删除中',
    '5': '隔离中',
    '101': '锁定中'
  },
  'CDBINSTANCE_TYPE': {
    '1': '主实例',
    '2': '灾备实例',
    '3': '只读实例'
  },
  'CDBINSTANCE_PROTECTMODE': {
    '0': '异步复制',
    '1': '半同步复制',
    '2': '强同步复制'
  },
  'CDBINSTANCE_TASKSTATUS': {
    '0': '没有任务',
    '1': '升级中',
    '2': '数据导入中',
    '3': '开放Slave中',
    '4': '外网访问开通中',
    '5': '批量操作执行中',
    '6': '回档中',
    '7': '外网访问关闭中',
    '8': '密码修改中',
    '9': '实例名修改中',
    '10': '重启中',
    '12': '自建迁移中',
    '13': '删除库表中',
    '14': '灾备实例创建同步中'
  },

  'IMAGE_SOURCE': {
    'OFFICIAL': '官方提供的镜像。',
    'EXTERNAL_IMPORT': '外部导入的镜像所派生出的镜像。',
    'IMAGE_CREATE': '通过创建实例镜像等方式从官方镜像所派生出的镜像。'
  },
  'IMAGE_STATE': {
    'USING': '使用中',
    'IMPORTING': '导入中',
    'SYNCING': '同步中',
    'DELETING': '删除中',
    'CREATING': '创建中',
    'NORMAL': '正常'
  },
  'NETWORK_PAID': {
    'BANDWIDTH_PREPAID': '按带宽包年包月计费',
    'BANDWIDTH_POSTPAID_BY_HOUR': '按带宽使用时长计费方式',
    'BANDWIDTH_PACKAGE': '带宽包计费方式',
    'BANDWIDTH_POSTPAID_BY_MONTH': '按月后付费方式',
    'TRAFFIC_POSTPAID_BY_HOUR': '按流量计费方式'
  },
  'INSTANCE_PAID': {
    'CDHPAID': 'CDH付费，即只对CDH计费，不对CDH上的实例计费',
    'POSTPAID_BY_HOUR': '后付费，即按量计费',
    'PREPAID': '预付费，即包年包月'
  },
  'REGION': {
    'AP-GUANGZHOU': '广州',
    'AP-BEIJING': '北京',
    'AP-SHANGHAI': '上海',
    'AP-CHENGDU': '成都',
    'AP-CHONGQING': '重庆',
    'AP-SHENZHEN-FSI': '深圳金融',
    'AP-SHANGHAI-FSI': '上海金融',
    'AP-GUANGZHOU-OPEN': '广州OPEN',
    'AP-HONGKONG': '香港',
    'AP-SEOUL': '首尔',
    'AP-SINGAPORE': '新加坡',
    'AP-BANGKOK': '曼谷',
    'EU-FRANKFURT': '法兰克福',
    'AP-MUMBAI': '孟买',
    'NA-TORONTO': '多伦多',
    'NA-SILICONVALLEY': '硅谷',
    'NA-ASHBURN': '弗吉尼亚',
    'EU-FRANKFURT': '德国',
    'EU-MOSCOW': '莫斯科'
  },
  'REGIONV2': {
    'AP-GUANGZHOU': '华南地区（广州）',
    'AP-BEIJING': '华北地区（北京）',
    'AP-SHANGHAI': '华东地区（上海）',
    'AP-CHENGDU': '西南地区（成都）',
    'AP-CHONGQING': '西南地区（重庆）',
    'AP-SHENZHEN-FSI': '华南地区（深圳金融）',
    'AP-SHANGHAI-FSI': '华东地区（上海金融）',
    'AP-GUANGZHOU-OPEN': '华南地区（广州Open）',
    'AP-HONGKONG': '东南亚地区（香港）',
    'AP-SEOUL': '亚太地区（首尔）',
    'AP-SINGAPORE': '东南亚地区（新加坡）',
    'AP-BANGKOK': '亚太地区（泰国）',
    'EU-FRANKFURT': '欧洲地区（法兰克福）',
    'AP-MUMBAI': '亚太地区（孟买）',
    'NA-TORONTO': '北美地区（多伦多）',
    'NA-SILICONVALLEY': '美国西部（硅谷）',
    'NA-ASHBURN': '美国东部（弗吉尼亚）',
    'EU-MOSCOW': '欧洲地区（莫斯科）',
    'AP-TOKYO': '亚太东北（东京）'
  },
  'SHORT_REGION': {
    'sh': '(华东地区)上海',
    'gz': '(华南地区)广州',
    'bj': '(华北地区)北京',
    'cd': '(西南地区)成都',
    'cq': '(西南地区)重庆'
  },
  'SHORT_REGIONV2': {
    'ap-guangzhou': '华南地区（广州）',
    'ap-beijing': '华北地区（北京）',
    'ap-shanghai': '华东地区（上海）',
    'ap-chengdu': '西南地区（成都）',
    'ap-chongqing': '西南地区（重庆）',
    'ap-shenzhen-fsi': '华南地区（深圳金融）',
    'AP-SHANGHAI-FSI': '华东地区（上海金融）',
    'ap-shanghai-fsi': '华南地区（广州Open）',
    'ap-hongkong': '东南亚地区（香港）',
    'ap-seoul': '亚太地区（首尔）',
    'ap-singapore': '东南亚地区（新加坡）',
    'ap-bangkok': '亚太地区（泰国）',
    'eu-frankfurt': '欧洲地区（法兰克福）',
    'AP-MUMBAI': '亚太地区（孟买）',
    'na-toronto': '北美地区（多伦多）',
    'na-siliconvalley': '美国西部（硅谷）',
    'na-ashburn': '美国东部（弗吉尼亚）',
    'eu-moscow': '欧洲地区（莫斯科）',
    'ap-tokyo': '亚太东北（东京）',
    'gz': '华南地区（广州）',
    'bj': '华北地区（北京）',
    'sh': '华东地区（上海）',
    'cd': '西南地区（成都）',
    'cq': '西南地区（重庆）',
    'szjr': '华南地区（深圳金融）',
    'shjr': '华东地区（上海金融）',
    'gzopen': '华南地区（广州）',
    'hk': '东南亚地区（香港）',
    'kr': '亚太地区（首尔）',
    'sg': '东南亚地区（新加坡）',
    'th': '亚太地区（泰国）',
    'de': '欧洲地区（法兰克福）',
    'in': '亚太地区（孟买）',
    'ca': '北美地区（多伦多）',
    'usw': '美国西部（硅谷）',
    'use': '美国东部（弗吉尼亚）',
    'ru': '欧洲地区（莫斯科）'

  },
  'REGIONCONVERT': {
    'gz': 'ap-guangzhou',
    'bj': 'ap-beijing',
    'sh': 'ap-shanghai',
    'cd': 'ap-chengdu',
    'cq': 'ap-chongqing',
    'szjr': 'ap-shenzhen-fsi',
    'shjr': 'ap-shanghai-fsi',
    'gzopen': 'ap-guangzhou-open',
    'hk': 'ap-hongkong',
    'kr': 'ap-seoul',
    'sg': 'ap-singapore',
    'th': 'ap-bangkok',
    'de': 'eu-frankfurt',
    'in': 'ap-mumbai',
    'ca': 'na-toronto',
    'usw': 'na-siliconvalley',
    'use': 'na-ashburn',
    'de': 'eu-frankfurt',
    'ru': 'eu-moscow'
  },
  'DISKTYPE': {
    'ROOT': '系统盘',
    'DATA': '数据盘'
  },
  'SNAPSHOTSTATUS': {
    'NORMAL': '已创建',
    'CREATING': '创建中',
    'ROLLBACKING': '回滚中'
  },
  'ATTACHED': {
    '0': '未挂载',
    '1': '已挂载'
  },
  'FILTER_TYPE': {
    '1': '标签',
    '2': '路由匹配'
  },
  'PROTOCOL': {
    'HTTP': 'URL地址',
    'QUEUE': 'Queue队列服务'
  },
  'NOTIFYC': {
    'JSON': 'JSON',
    'SIMPLIFIED': '消息原文'
  },
  'NOTIFYS': {
    'BACKOFF_RETRY': '退避重试',
    'EXPONENTIAL_DECAY_RETRY': '衰退指数重试'
  },
  'PORTABLE': {
    '0': '不支持',
    '1': '支持'
  },
  'PAYMODE': {
    'PREPAY': '包年包月',
    'POSTPAY': '按量计费'
  },
  'INSTTYPEA': {
    'S3': '标准型S3',
    'S2': '标准型S2',
    'S1': '标准型S1',
    'SN2': '标准网络增强型SN2',
    'I2': '高IO型规格族',
    'I1': '高IO型I1',
    'M3': '内存型M3',
    'M2': '内存型M2',
    'M1': '内存型M1',
    'C3': '计算型C3',
    'C2': '计算型C2',
    'CN2': '计算网络增强型CN2',
    'CN3': '计算型CN3',
    'D1': '大数据型 D1',
    'GN2': 'GPU计算型GN2',
    'GN8': 'GPU计算型GN8',
    'GA': 'GPU渲染型GA2',
    'FX2': 'FPGA型FX2',
    'SN3NE': '标准网络优化型',
    'SA1': '标准型SA1',
    'S2NE': '标准网络优化型 S2ne',
    'BS1': '批量计算型 BS1',
    'BC1': '批量计算型 BC1'
  },
  'STATUS': {
    'EXPIRED': '待回收'
  },
  'PROJECT': {
    '0': '默认项目'
  },
  'NETWORK': {
    'VPC-AQ7BH4QW': 'Default-VPC'

  },
  'DISK_STATE': {
    'UNATTACHED': '未挂载',
    'ATTACHING': '挂载中',
    'ATTACHED': '已挂载',
    'DETACHING': '解挂中',
    'EXPANDING': '扩容中',
    'ROLLBACKING': '回滚中',
    'TORECYCLE': '待回收'
  },
  'DISK_USAGE': {
    'SYSTEM_DISK': '系统盘',
    'DATA_DISK': '数据盘'
  },
  'PAIDTYPE': {
    'PREPAID': '预付费',
    'POSTPAID_BY_HOUR': '后付费',
    'CDHPAID': 'CDH付费'
  },
  'DISK_TYPE': {
    'CLOUD_BASIC': '普通云硬盘',
    'CLOUD_PREMIUM': '高性能云硬盘',
    'CLOUD_SSD': 'SSD云硬盘'
  },
  'STATUSNAME': {
    'PENDING': '准备中',
    'RUNNING': '运行中',
    'STOPPED': '已关机',
    'REBOOTING': '重启中',
    'STARTING': '启动中',
    'STOPPING': '停止中',
    'TERMINATING': '销毁中',
    'SHUTDOWN': '待回收'
  },
  'DATAMOVE_STATUS': {
    '1': '创建中',
    '2': '创建完成',
    '3': '校验中',
    '4': '校验通过',
    '5': '校验不通过',
    '6': '准备运行',
    '7': '任务运行',
    '8': '准备完成',
    '9': '任务成功',
    '10': '任务失败',
    '11': '中止中',
    '12': '完成中'
  },
  'PUBLIC': {
    '0': '私有',
    '1': '公有'
  },
  'SERVER_STATUS': {
    'NORMAL': '运行中',
    'ABNORMAL': '异常',
    'WAITING': '启动中',
    'PAUSED': '暂停中',
    'UPDATING': '更新中',
    'ROLLINGBANK': '回滚中'
  },
  'INVOKE_METHOD': {
    'ALL': '全部触发',
    'TAGLIST': '指定tag触发',
    'REGEX': '正则表达式触发'
  },
  'INSTANCE_STATUS': {
    'RUNNING': '运行中',
    'WAITING': '	启动中',
    'TERMINATING': '正在终止',
    'TERMINATED': '已经终止',
    'NOTREADY': '未就绪'
  },
  'SYNCTASK_STATUS': {
    '0': '未配置',
    '1': '已配置',
    '2': '校验中',
    '3': '校验失败',
    '4': '校验成功',
    '5': '准备同步',
    '6': '同步中',
    '7': '待切换',
    '8': '同步失败',
    '9': '同步成功'

  },
  'MIGRATE_TYPE': {
    '1': '结构同步',
    '2': '全量同步',
    '3': '全量+增量同步'
  },
  'ACCESS_REGION': {
    'NORTHCHINA': '中国大陆-华北大区',
    'EASTCHINA': '中国大陆-华东大区',
    'SOUTHCHINA': '中国大陆-华南大区',
    'SOUTHWESTCHINA': '中国大陆-西南大区',
    'HONGKONG': '中国香港',
    'SOUTHEASTASIA': '新加坡',
    'SL_JAPAN': '日本东京',
    'KOREA': '韩国首尔',
    'SL_TAIWAN': '中国台湾',
    'SL_INDIA': '印度东部金奈',
    'SL_AUSTRALIA': '澳大利亚悉尼',
    'EUROPE': '德国法兰克福',
    'SL_UK': '英国伦敦',
    'SL_SOUTHAMERICA': '巴西圣保罗',
    'NORTHAMERICA': '美国西部硅谷',
    'SL_MIDDLEUSA': '美国中部达拉斯',
    'CANADA': '加拿大',
    'WESTINDIA': '印度西部孟买',
    'THAILAND': '泰国曼谷',
    'CHINA': '中国大陆',
    'VIRGINIA': '美国东部弗吉尼亚',
    'RUSSIA': '俄罗斯',
    'JAPAN': '日本东京',
    'SL_INDONESIA': '印度尼西亚雅加达'
  },
  'PRODUCT_ID': {
    '0': '默认项目',
    '1113008': '联通云',
    '1107774': '测试项目2',
    '1107007': '测试项目1'
  },
  'PROXIES_STATUS': {
    'RUNNING': '已开启',
    'CREATING': '创建中',
    'DESTROYING': '销毁中',
    'OPENING': '开启中',
    'CLOSING': '关闭中',
    'CLOSED': '已关闭',
    'ADJUSTING': '配置变更中',
    'ISOLATING': '隔离中',
    'ISOLATED': '已隔离',
    'UNKNOWN': '未知状态'
  },
  'VIDEO_SPEC': {
    '0': '原始',
    '10': 'MP4-流畅-FLU',
    '510': 'MP4-流畅-FLU',
    '210': 'HLS-流畅-FLU',
    '610': 'HLS-流畅-FLU',
    '10046': 'FLV-流畅-FLU',
    '710': 'FLV-流畅-FLU',
    '20': 'MP4-标清-SD',
    '520': 'MP4-标清-SD',
    '220': 'HLS-标清-SD',
    '620': 'HLS-标清-SD',
    '10047': 'FLV-标清-SD',
    '720': 'FLV-标清-SD',
    '30': 'MP4-高清-HD',
    '530': 'MP4-高清-HD',
    '230': 'HLS-高清-HD',
    '630': 'HLS-高清-HD',
    '10048': 'FLV-高清-HD',
    '730': 'FLV-高清-HD',
    '40': 'MP4-全高清-FHD',
    '540': 'MP4-全高清-FHD',
    '240': 'HLS-全高清-FHD',
    '640': 'HLS-全高清-FHD',
    '10049': 'FLV-全高清-FHD',
    '740': 'FLV-全高清-FHD',
    '70': 'MP4-2K',
    '570': 'MP4-2K',
    '270': 'HLS-2K',
    '670': 'HLS-2K',
    '370': 'FLV-2K',
    '770': 'FLV-2K',
    '80': 'MP4-4K',
    '580': 'MP4-4K',
    '280': 'HLS-4K',
    '680': 'HLS-4K',
    '380': 'FLV-4K',
    '780': 'FLV-4K'
  },
  'SYNCSTATUS': [
    '未同步',
    '创建同步中',
    '创建同步完成',
    '同步失败',
    '同步修复中'
  ]
}

/**
 * 全局的 数据表 字典。
 * 数据表查找网址： https://cloud.tencent.com/document/api/213/9452#zone
 * 在控制器中引入该服务:    app.controller('example',['col',function (col){})
 * 在控制器中的调用方法:   col.val(tableName, key)
 * tableName -- 对应表的名称,
 * key 对应 key的名称,
 * 返回对应的具体字段
 *
 * **/
var desProCont = []
var resNetCont = []

app.service('col', ['$http', 'serverUrl', function ($http, serverUrl) {
  // 获取项目ID进行渲染
  $http({
    method: 'POST',
    url: serverUrl.serverUrlFun() + 'account/DescribeProject',
    data: JSON.stringify({}),
    dataType: 'json'
  }).then(function successCallback (response) {
    var describeProjectArr = response.data.data
    // console.log(describeProjectArr);
    for (var i = 0; i < describeProjectArr.length; i++) {
      var desProNaId = {
        projectId: describeProjectArr[i].projectId,
        projectName: describeProjectArr[i].projectName
      }
      desProCont.push(desProNaId)
    }
  }, function errorCallback (response) {
    console.log('错误')
  })

  // 获取私有网络的id与名称渲染
  $http({
    method: 'POST',
    url: serverUrl.serverUrlFun() + 'vpc/DescribeVpcEx',
    // url: serverUrl.serverUrlFun() + 'vpc/DescribeNetworkAcl',
    data: JSON.stringify({

    }),
    dataType: 'json'
  }).then(function successCallback (response) {
    var resNetArr = response.data.data
    // console.log(resNetArr);
    for (var i = 0; i < resNetArr.length; i++) {
      var resNetArrName = {
        resNetId: resNetArr[i].unVpcId,
        resNetName: resNetArr[i].vpcName
      }
      resNetCont.push(resNetArrName)
    }
  }, function errorCallback (response) {
    console.log('错误')
  })

  // 返回字段的服务
  this.val = function (tableName, key) {
    var TN = tableName.toUpperCase()
    if (key == undefined) {
      return ''
    }
    if (typeof (key) === 'number') {
      key = '' + key
    }
    var KEY = key.toUpperCase()
    return dict[TN][KEY]
  }

  this.Val = function (tableName, key) {
    var TN = tableName.toUpperCase()
    var KEY = key
    console.log(dict[TN][KEY])
    return dict[TN][KEY]
  }
}])

// 选择地域时同步region v1 v2
function setRegionV12 (region) {
  localStorage.setItem('regionv1', region.regionCode)
  localStorage.setItem('regionv2', region.region)
}

/**
 *
 * @param {String} aim 界面指定元素ID
 * @param {JSONObject} title 导出数据结构
 * @param {JSONArray} downloadData 导出数据内容
 * @returns {File}
 */
function initDownload (aim, title, downloadData) {
  // 暂时不做值判断
  if (downloadData instanceof Array) {
    var str = '\ufeff' + (_download_pack_data(title, downloadData))
    var blob = new Blob([str], {
      type: 'text/csv,charset=UTF-8'
    })
    var target = document.getElementById(aim)
    if (target === undefined) {
      target = document.createElement('a')
      target.href = window.URL.createObjectURL(blob)
      target.download = 'fileName.csv'
    }
    if (window.navigator.msSaveOrOpenBlob) {
      target.onclick = function () {
        navigator.msSaveBlob(blob, target.getAttribute('download'))
      }
    } else {
      document.getElementById(aim).href = URL.createObjectURL(blob)
    }
  }
}
// var data=undefined;
// <a id="" download="sdfsd.cnf"></a>
// initDownloadByKV("asd",__array_2_map(data,"name","cur_value"));
/**
 *
 * @param aim 界面指定元素ID
 * @param data {"key1":"data1","key2":"data2","key3":"data2","key4":"data2"}
 * @param keys ["key1","key2"]
 */
function initDownloadByKV (aim, data, keys) {
  Array.prototype.contains = function (obj) {
    var i = this.length
    while (i--) {
      if (this[i] === obj) {
        return true
      }
    }
    return false
  }
  if (data instanceof Object) {
    var txt = ''
    if (keys === undefined || !(keys instanceof Array)) {
      for (var key in data) {
        txt += key + '=' + data[key] + '\r\n'
      }
    } else {
      for (var key in data) {
        if (keys.contains(key)) {
          txt += key + '=' + data[key] + '\r\n'
        }
      }
    }
    var str = '\ufeff' + txt
    var blob = new Blob([str], {
      type: 'text/cnf,charset=UTF-8'
    })
    var target = document.getElementById(aim)
    if (target === undefined) {
      target = document.createElement('a')
      target.href = window.URL.createObjectURL(blob)
      target.download = 'fileName.txt'
    }
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, target.getAttribute('download'))
    } else {
      document.getElementById(aim).href = URL.createObjectURL(blob)
    }
  }
}

/**
 *
 * @param arr []
 * @param key string
 * @param val string
 * @returns {{}}
 * @private
 */
function __array_2_map (arr, key, val) {
  var tmp = {},
    _tmp_key, _tmp_val
  if (arr instanceof Array) {
    for (var i = 0, j = arr.length; i < j; i++) {
      if (arr[i] instanceof Object) {
        _tmp_key = arr[i][key]
        _tmp_val = arr[i][val]
        if (_tmp_key === undefined) {
          continue
        }
        tmp[_tmp_key] = _tmp_val
      }
    }
  }
  return tmp
}
/**
 *
 * @param {type} title 格式为"{字段名1:中文标题1,字段名2:中文标题2}"
 * @param {type} obj 处理后的数据集，[{字段名1:字段值11,字段名2:字段值12},{字段名1:字段值21,字段名2:字段值22}]
 * @returns {String} 可以下载的CSV格式数据集
 */
function _download_pack_data (title, obj) {
  var str = ''
  if (title instanceof Object) {
    var cols = [],
      cvn = {}
    // pack column title
    var idx
    for (var col in title) {
      if ((idx = col.indexOf('@')) === -1) {
        cols.push(col)
      } else {
        cols.push(col.substring(0, idx))
        cvn[col.substring(0, idx)] = col.substr(idx + 1)
      }
      str += title[col] + ','
    }
    str += '\r\n'
    // pack row stat
    if (obj instanceof Array) {
      var _tmp_key, skp
      for (var _i = 0, _j = obj.length; _i < _j; _i++) {
        for (var i = 0, j = cols.length; i < j; i++) {
          _tmp_key = cols[i]
          if (cvn.hasOwnProperty(_tmp_key)) {
            var mk = cvn[_tmp_key]
            if ((skp = _tmp_key.indexOf('.')) !== -1) {
              _tmp_key = _tmp_key.substring(0, skp)
              str += _download_parse_Val(dict[mk][_download_parse_Val(obj[_i][_tmp_key], cols[i].substr(skp + 1)).toUpperCase()]) + ','
            } else {
              str += _download_parse_Val(dict[mk][_download_parse_Val(obj[_i][_tmp_key]).toUpperCase()]) + ','
            }
          } else {
            if ((skp = _tmp_key.indexOf('.')) !== -1) {
              _tmp_key = _tmp_key.substring(0, skp)
              str += _download_parse_Val(obj[_i][_tmp_key], cols[i].substr(skp + 1)) + ','
            } else {
              str += _download_parse_Val(obj[_i][_tmp_key]) + ','
            }
          }
        }
        str += '\r\n'
      }
    }
  }
  return str
}

function _download_parse_Val (data, key) {
  if (data === undefined) {
    return ''
  } else if (typeof (data) === 'string' || data instanceof Date) {
    return data
  } else if (typeof (data) === 'number') {
    return '' + data
  } else if (data instanceof Object) {
    var skp
    if (key === undefined) {
      return JSON.stringify(data)
    }
    if ((skp = key.indexOf('.')) !== -1) {
      var _tmp_key = key.substring(0, skp)
      return _download_parse_Val(data[_tmp_key], key.substr(skp + 1))
    } else {
      return _download_parse_Val(data[key])
    }
  } else if (data instanceof Array) {
    return _download_parse_Val(data[0], key)
  } else {
    console.log('not found type by value >' + data + '::' + typeof (data))
    return data
  }
}

// 消息弹窗
var toast = {
  danger: function (msg) {
    bootoast({
      message: msg,
      type: 'danger'
      // ,position:'right-bottom'
    })
  },
  info: function (msg) {
    bootoast({
      message: msg,
      timeout: 2
      // ,position:'right-bottom'
    })
  },
  success: function (msg) {
    bootoast({
      message: msg,
      type: 'success',
      timeout: 2
      // ,position:'right-bottom'
    })
  },
  warning: function (msg) {
    bootoast({
      message: msg,
      type: 'warning', // ,position:'right-bottom'

      timeout: 2
    })
  },
  custom: function (msg, type, position, timeout) {
    bootoast({
      message: msg,
      type: type || 'info',
      position: position || 'bottom-center',
      timeout: timeout || 9999
    })
  }
}

// 重写JS原生alert函数
window.alert = function (e) {
  toast.info(e)
}
// 城市全称改为简称

app.filter('zoneAFilterr', ['col', function (col) {
  return function (type) {
    return col.val('ZONEA2', type)
  }
}])

app.filter('zoneAFilterr3', ['col', function (col) {
  return function (type) {
    return col.val('ZONEA3', type)
  }
}])
// 过滤可用区域
app.filter('zoneFilterr', ['col', function (col) {
  return function (type) {
    return col.val('ZONE', type)
  }
}])

// 过滤可用区域  不带数字
app.filter('zoneFilterrnonum', ['col', function (col) {
  return function (type) {
    return col.val('EREANONUM', type)
  }
}])

// 过滤地域
app.filter('RegionFilterr', ['col', function (col) {
  return function (type) {
    return col.val('REGION', type)
  }
}])

// 过滤可用区域
app.filter('regionFilterr', ['col', function (col) {
  return function (type) {
    return col.val('REGION', type.toUpperCase())
  }
}])

// 过滤短地域
app.filter('ShortRegionFilterr', ['col', function (col) {
  return function (type) {
    return col.Val('SHORT_REGION', type)
  }
}])

// 过滤系统盘
app.filter('systemDiskFilterr', ['col', function (col) {
  return function (type) {
    return col.Val('BLOCK_DEVICE', type)
  }
}])
// 过滤主机计费模式
app.filter('instanceFilterr', ['col', function (col) {
  return function (type) {
    return col.val('INSTANCE_PAID', type)
  }
}])

// 过滤状态
app.filter('statusFilter', ['col', function (col) {
  return function (type) {
    return col.val('STATUS', type)
  }
}])
// 过滤过期时间
app.filter('ExpiredTimeFilter', ['col', function (col) {
  return function (type) {
    return col.val('EXPIREDTIME', type)
  }
}])
// 过滤所属网络
app.filter('internetFilter', ['col', function (col) {
  return function (type) {
    return col.val('NETWORK', type)
  }
}])
// 过滤项目
app.filter('projectFilter', ['col', function (col) {
  return function (type) {
    return col.val('PROJECT', type)
  }
}])

// 过滤网络计费模式
app.filter('networkFilterr', ['col', function (col) {
  return function (type) {
    return col.val('NETWORK_PAID', type)
  }
}])
// 过滤项目ID
app.filter('ProIdFilterr', function () {
  // console.log(desProCont);
  return function (type) {
    if (desProCont.length == 0 && type == 0) {
      return '默认项目'
    } else {
      for (var i = 0; i < desProCont.length; i++) {
        if (type == desProCont[i].projectId) {
          return desProCont[i].projectName
        } else if (type == 0) {
          return '默认项目'
        }
      }
    }
  }
})
// 过滤网络名称与网络ID字段
app.filter('netNameFilterr', function () {
  console.log(resNetCont)
  return function (type) {
    console.log(type)
    if (resNetCont.length == 0 || type == undefined) {
      return '基础网络'
    } else {
      for (var i = 0; i < resNetCont.length; i++) {
        if (type == resNetCont[i].resNetId) {
          return resNetCont[i].resNetName
        }
      }
    }
  }
})
// region gz/ap-guangzhou  -> 华南地区（广州）
app.filter('regionNameFilter', function (serverUrl, $http) {
  var data = null,
    serviceInvoked = false

  function realFilter (region) {
    return data
  }
  filterStub.$stateful = true

  function filterStub (region) {
    // console.log(data);
    if (data === null) {
      if (!serviceInvoked) {
        serviceInvoked = true
        // 根据region获取regionName
        $http({
          method: 'POST',
          url: serverUrl.serverUrlFun() + 'redesc/Conversion',
          data: JSON.stringify({
            Region: region
          }),
          dataType: 'json'
        }).then(function successCallback (response) {
          data = response.data.data[0].lable
          // console.log(data);
        }, function errorCallback (response) {
          console.log('错误')
        })
      }
      return '-'
    } else {
      return realFilter(region)
    }
  }
  return filterStub
})
// vpcId 394387  ->  Default-vpc
app.filter('vpcNameFilter', function (serverUrl, $http) {
  var data = null,
    serviceInvoked = false

  function realFilter (vpcId) {
    return data
  }
  filterStub.$stateful = true

  function filterStub (vpcId) {
    if (data === null) {
      if (!serviceInvoked) {
        serviceInvoked = true
        // 获取私有网络的id与名称渲染
        $http({
          method: 'POST',
          url: serverUrl.serverUrlFun() + 'vpc/DescribeVpcEx',
          data: JSON.stringify({
            vpcId: vpcId
          }),
          dataType: 'json'
        }).then(function successCallback (response) {
          data = response.data.data[0].vpcName
        }, function errorCallback (response) {
          console.log('错误')
        })
      }
      return '-'
    } else {
      return realFilter(vpcId)
    }
  };
  return filterStub
})
// 过滤主机类型
app.filter('instTypeFilterr', ['col', function (col) {
  return function (type) {
    return col.val('INSTTYPEA', type)
  }
}])

// 数据库状态类型
app.filter('CDBINSTANCE_STATE_Filterr', ['col', function (col) {
  return function (type) {
    return col.Val('CDBINSTANCE_STATE', type)
  }
}])

// 数据库状态类型
app.filter('CDBINSTANCE_PAYTYPE_Filterr', ['col', function (col) {
  return function (type) {
    return col.Val('CDBINSTANCE_PAYTYPE', type)
  }
}])
// 挂载状态
app.filter('attachedFillterr', ['col', function (col) {
  return function (type) {
    return col.Val('ATTACHED', type)
  }
}])

// mysql实例列表 实例类型
app.filter('cdbInstanceType_Filterr', ['col', function (col) {
  return function (type) {
    return col.Val('CDBINSTANCE_TYPE', type)
  }
}])

// mysql实例列表 当前任务
app.filter('cdbInstanceTaskStatus_Filterr', ['col', function (col) {
  return function (type) {
    return col.Val('CDBINSTANCE_TASKSTATUS', type)
  }
}])

// 过滤付费方式
app.filter('chargeTypeFilterr', ['col', function (col) {
  return function (type) {
    // console.log(col.Val('PAIDTYPE', type));
    return col.Val('PAIDTYPE', type)
  }
}])
// 过滤可用区域
app.filter('zoneIdFilterr', ['col', function (col) {
  return function (type) {
    return col.Val('ZONEID', type)
  }
}])

// 过滤云主机状态
app.filter('statusNameFilterr', ['col', function (col) {
  return function (type) {
    return col.Val('STATUSNAME', type)
  }
}])

// 过滤当返回的字段为undefined或者为null 默认DOM渲染为' - '
app.filter('undefinedFillterr', function () {
  return function (type) {
    if (type == undefined || type == null) {
      return ' - '
    } else {
      return type
    }
  }
})
// 过滤内网IP
app.filter('undefinedPubFillterr', function () {
  return function (type) {
    if (type == undefined || type == null) {
      return ' - '
    } else {
      return type
    }
  }
})
// 过滤内网IP
app.filter('undefinedPriFillterr', function () {
  return function (type) {
    if (type == undefined || type == null) {
      return ' - '
    } else {
      return type
    }
  }
})
app
  .filter('zoneByWangFilter', function () {
    return function (region) {
      region = region.toUpperCase()
      return dict['REGIONV2'][region]
    }
  })
  .filter('zoneV2ByWangFilter', function () {
    return function (region) {
      return dict['SHORT_REGIONV2'][region]
    }
  })

  .filter('zoneV3Filter', function () {
    return function (region) {
      return dict['REGIONCONVERT'][region]
    }
  })
  .filter('syncStatusFilter', function () {
    return function (statusCode) {
      return dict['SYNCSTATUS'][statusCode]
    }
  })

// 过滤mysql参数设置的是否重启状态
app.filter('RestartFilterr', function () {
  return function (type) {
    if (type == 0) {
      return ' 否 '
    } else if (type == 1) {
      return '是'
    }
  }
})

// 权限控制指令
// app.directive("zgAccess", function($rootScope) {
//     return {
//         restrict: 'A',
//         priority: '1001',
//         compile: function(element, attr) {
//             var access = attr["zgAccess"];
//             return function(scope, element) {
//                 //var __power__ = __power__ || [];
//                 if($rootScope.inProduction) {
//                     if (__power__.indexOf(access) === -1) {
//                     element.remove();
//                     }
//                 }

//             };
//         }
//     }
// })

/**
 * 全局的 popover 弹出框触发事件由鼠标点击，变为鼠标悬停。
 */
$(function () {
  $(document).on('mouseover', '[data-toggle=popover]', function () {
    $(this).popover('show')
  })
  $(document).on('mouseleave', '[data-toggle=popover]', function () {
    $(this).popover('hide')
  })
  // $('[data-toggle=popover]').popover({
  //     trigger:"hover",
  //     animation:'false'
  // })
})

app.directive('rxSliderInput', function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      min: '=',
      max: '=',
      step: '=',
      slider: '=rxSliderInput',
      onBlur: '&'
    },
    link: function (scope, element, attrs, ngModelCtrl) {
      var min = scope.min || 0
      var max = scope.max || 16000
      var step = scope.step || 1

      var getValidValue = function (input, min, max, step) {
        var value = parseFloat(input) || 0
        // determine if input is in the valid range

        if (value < min) {
          value = min
        } else if (value > max) {
          value = max
        }
        console.log(value)
        // determin if input is valid
        value = min + Math.round((value - min) / step) * step
        console.log(min)
        if (value < min) {
          value += step
        } else if (value > max) {
          value -= step
        }

        return value
      }

      // the input value should be consistent with the slider model.
      scope.$watch('slider', function (value) {
        ngModelCtrl.$setViewValue(value)
        ngModelCtrl.$render()
      })

      // validate value and reset slider when blur
      element.on('blur', function () {
        var value = getValidValue(ngModelCtrl.$viewValue, min, max, step)

        if (value != scope.slider) {
          scope.onBlur({
            value: value
          })
        }

        ngModelCtrl.$setViewValue(value)
        ngModelCtrl.$render()
        scope.$apply()
      })
    }
  }
})

// 全局封装$http
app.service('BaseService', ['serverUrl', '$http', function (serverUrl, $http) {
  /**
   * 工具类方法
   * Object.prototype.toString.call
   */
  var tostring = function (val) {
    var str = Object.prototype.toString.call(val)
    return str.slice(8, str.length - 1).toLowerCase()
  }
  var errorCallback = function (err) {
    alert(err.message)
  }
  /**
   * 基础服务公共请求方法
   * @param {String} uri API相对路径
   * @param {Object} params 请求参数
   * @param {Function} succ 成功的回调函数
   * @param {Function} err 失败的回调函数
   * @param {String} key Response结构解析标识
   */
  var baseUrl = serverUrl.serverUrlFun()
  this.$$request = $$request

  function $$request (uri, params, succ, err, key) {
    // 类型检测
    checkType(uri, params, succ, err, key)
    params.Region = params.Region || localStorage.getItem('regionv2') || 'ap-guangzhou'
    err = err || errorCallback
    key = key || (key === '' ? '' : 'data')
    $http({
      method: 'post',
      url: baseUrl + uri,
      data: JSON.stringify(params),
      dataType: 'json'
    })
      .then(function (response) {
        var data = response.data
        if (data.code && data.code !== 0) {
          err({
            state: -3,
            message: data.info || data.message
          })
        } else {
          if (key.indexOf('.') === -1) {
            if (key === '') {
              data = data
            } else if (typeof data[key] === 'undefined') {
              err({
                state: -2,
                message: '未找到指定键值 ' + key
              })
            } else {
              data = data[key]
            }
          } else {
            var keys = key.split('.')
            for (var i = 0, len = keys.length; i < len; i++) {
              if (typeof data[keys[i]] === 'undefined') {
                err({
                  state: -2,
                  message: '未找到指定键值 ' + keys[i]
                })
              } else {
                data = data[keys[i]]
              }
            }
          }
          succ(data)
        }
      }, function () {
        err({
          state: -1,
          message: '服务不可用'
        })
      })
  }

  function checkType (uri, params, succ, err, key) {
    if (tostring(uri) !== 'string') {
      throw new Error('uri 参数必传，且类型为String')
    }
    if (tostring(params) !== 'object') {
      throw new Error('params 参数必传，且类型为Object, 若请求参数为空，可预置为{}')
    }
    if (tostring(succ) !== 'function') {
      throw new Error('succ 参数必传，且类型为Function')
    }
    if (typeof err !== 'undefined' && tostring(err) !== 'function') {
      throw new Error('err 参数可选，若传，则类型为Function')
    }
    if (typeof key !== 'undefined' && tostring(key) !== 'string') {
      throw new Error('key 参数可选，若传，则类型为String')
    }
  }
}])

app.factory('dateFactory', function () {
  var service = {
    locale: locale // 函数 --> 时间控件数据渲染
  }

  return service

    // 时间控件数据渲染
  function locale (type) {
    var locale = {
      applyLabel: '确定',
      format: type, // YYYY-MM-DD HH:mm:ss是否需要时分秒
      toLabel: '到',
      cancelLabel: '取消',
      customRangeLabel: '自定义时间',
      daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
      firstDay: 1,
      monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
    return locale
  }
})

  /**
   * 区域相关服务
   */
  .factory('RegionFactory', function (BaseService) {
    var service = {
      regionOnInit: regionOnInit,
      pubZoneAll: pubZoneAll,
      regionConversion: regionConversion
    }

    return service
    /**
     * 区域初始化获取区域ID
     * @param {String} type 区域版本类型，可传v1、v2
     */
    function regionOnInit (type) {
      var regionv1 = localStorage.getItem('regionv1'),
        regionv2 = localStorage.getItem('regionv2'),
        region
      switch (type) {
        case 'v1':
          if (regionv1 == null || regionv1 == 'undefined') {
            localStorage.setItem('regionv1', 'gz')
          } else {
            region = regionv1
          }
          break
        case 'v2':
          if (regionv2 == null || regionv2 == 'undefined') {
            localStorage.setItem('regionv2', 'ap-guangzhou')
          } else {
            region = regionv2
          }
          break
        default:
          break
      }
      return region
    }
    // 获取区域列表
    function pubZoneAll (params, succ) {
      BaseService.$$request('pub/zoneAll', params, function (arr) {
        // 返回的数据源  需要已经过滤好的数据源
        succ(arr)
      }, function (err) {
        alert(err.message)
      }, 'data')
    }
    // 区域转换
    function regionConversion (params, succ) {
      BaseService.$$request('redesc/Conversion', params, function (data) {
        succ(data)
      }, function (err) {
        alert(err.message)
      }, 'data')
    }
  })
  /**
   * 工具方法包
   */
  .factory('KitFactory', function (NgTableParams, $state) {
    var service = {
      fnInit: fnInit,
      modalAction: modalAction,
      pageInit: pageInit,
      typeString: typeString,
      goBack: goBack,
      newAssign: newAssign,
      copyToClipboard: copyToClipboard,
      trim: trim
    }
    return service
    // 函数初始化
    function fnInit () {
      var fns = [].slice.call(arguments)
      for (var i = 0, len = fns.length; i < len; i++) {
        fns[i]()
      }
    }
    // 模态框显示隐藏方法
    function modalAction (modalId, action) {
      $(modalId).modal(action)
    }
    // 分页初始化方法
    function pageInit (dataSource, initialParams, initialSettings) {
      if (typeString(dataSource) !== 'array') {
        throw new Error('dataSource 参数必传，且类型为数组!')
      }
      if (typeof initialParams !== 'undefined' && typeString(initialParams) !== 'object') {
        throw new Error('initialParams 参数可选，若传，则类型为对象')
      }
      if (typeof initialSettings !== 'undefined' && typeString(initialSettings) !== 'object') {
        throw new Error('initialSettings 参数可选，若传，则类型为对象')
      }
      var initialParamsTarget = {
        count: 10 // 每页显示条数
      }
      var initialSettingsTarget = {
        counts: [10, 15, 20], // 页码配置
        paginationMaxBlocks: 6, // 最大分页码显示
        paginationMinBlocks: 2, // 最小分页码显示
        dataset: dataSource // 请求到的数据
      }
      if (typeof Object.assign !== 'function') {
        initialParams && newAssign(initialParamsTarget, initialParams)
        initialSettings && newAssign(initialSettingsTarget, initialSettings)
      } else {
        initialParams && Object.assign(initialParamsTarget, initialParams)
        initialSettings && Object.assign(initialSettingsTarget, initialSettings)
      }
      return new NgTableParams(initialParamsTarget, initialSettingsTarget)
    }
    // 类型检查toString方法
    function typeString (val) {
      var str = Object.prototype.toString.call(val)
      return str.slice(8, str.length - 1).toLowerCase()
    };
    // Object.assign()方法polyfill
    function newAssign (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
    // 路由至一个state
    function goBack (stateName, params) {
      params = params || {
        reload: true
      }
      $state.go(stateName, {}, params)
    }
    // 复制操作
    function copyToClipboard (containerid) {
      var that = document.getElementById(containerid)
      // console.log(that.textContent)
      var inp = document.createElement('input')
      that.appendChild(inp)
      inp.value = that.textContent
      inp.select()
      document.execCommand('copy')
      inp.remove()
      alert('复制成功！')
    }
    // 去除空格
    function trim (str, is_global) {
      var result
      result = str.replace(/(^\s+)|(\s+$)/g, '')
      if (is_global.toLowerCase() == 'g') {
        result = result.replace(/\s/g, '')
      }
      return result
    }
  })
  /**
   * 表单服务
   */
  .factory('FormFactory', function () {
    var service = {
      formChecker: formChecker
    }
    return service
    /**
     * 表单校验器
     * @param {Object} scope 当前控制器作用域$scope
     * @param {String} formData 需要监控的表单数据对象 'vm.editNameForm' 字符串形式
     * @param {Object} verifyMessages 表单验证信息
     * @param {Object} form vm.form 是一个 {} 空对象
     * @param {String} formName 表单名称 是一个字符串
     */
    function formChecker (scope, formData, verifyMessages, form, formName) {
      scope.$watch(formData, function (A, B) {
        if (A === B) {
          return
        }
        for (var field in verifyMessages) {
          verifyMessages[field].errorMsg = ''
          var control = form[formName][field]
          if (control && control.$dirty && !control.$valid) {
            var message = verifyMessages[field]
            for (var key in control.$error) {
              message[key] && (verifyMessages[field].errorMsg += message[key] + ' ')
            }
          }
        }
      }, true)
    }
  })
  .service('dateHour', function () {
    // 该服务是过滤时间控件 例如传的参数是 -24*5指的是5天前  24*5指的是五天后
    var service = {
      dateHourFun: dateHourFun // 函数 --> 图表初始化数据
    }
    return service

    function dateHourFun (number) {
      var date = new Date()
      date.setHours(date.getHours() + number)
      var year = date.getFullYear()
      var month = (date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)
      var dt = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()
      var hour = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()
      var minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
      var seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
      return year + '-' + month + '-' + dt + ' ' + hour + ':' + minutes + ':' + seconds
    }
  })
  .factory('chartFactory', function () {
    var service = {
      datasetOverride: datasetOverride, // 函数 --> 图表基本数据渲染
      options: options, // 函数 --> 定义y坐标轴
      require: require,
      xrData: xrData,
      downloadEchartPic: downloadEchartPic,
      xyData: xyData,
      xjData: xjData

    }

    return service

    // 折线图
    function datasetOverride (type, bg) {
      var datasetOverride = [{
        yAxisID: 'y-axis-1', // 数据渲染为y坐标轴
        type: type, // 渲染的图表类型
        borderWidth: 2, // 线的宽度
        backgroundColor: bg, // 渲染图表的颜色 transparent为透明颜色
        tension: 0 // 取消曲线 0表示折线 0.4表示曲线
      }]
      return datasetOverride
    }

    function options () {
      var options = {
        scales: {
          yAxes: [{
            id: 'y-axis-1', // 定义y坐标轴
            type: 'linear',
            display: true,
            position: 'left' // y坐标轴的值渲染在左侧还是右侧
            // ticks: {
            // 	// tick为设置y坐标轴的值 一般不用 y坐标的值一般是根据数据的大小自己进行渲染
            // 	beginAtZero: true,
            // 	max: 8,
            // 	min: 0
            // }
          }]

        }

      }
      return options
    }

    /**
     *echart图表封装函数
     * @ labelData, 实例ID数组
     * @ XArr, X轴数据
     *@ YArr, Y轴数据
     *@ divId,图表所在DIV的ID
     *@ titleText ,Y轴标题
     *@s ubtext ,Y轴标题
     */
    function xrData (labelData, XArr, YArr, divId, titleText, subtext) {
      var lineColor = ['#3C72C4', '#DD2292', '#F79709', '#2BD56F', '#666699']
      var seriesDataArr = []
      var countFor = 0
      for (var i = 0; i < labelData.length; i++) {
        var seriesObj = {
          /* name:idArr[i].DBInstanceId, */
          type: 'line',
          data: YArr[i],
          itemStyle: {
            normal: {
              color: lineColor[i],
              lineStyle: { // 系列级个性化折线样式
                width: 1
              }
            }
          }
        }
        seriesDataArr.push(seriesObj)
        countFor++
        if (countFor == labelData.length) {
          require(labelData, XArr, seriesDataArr, divId, titleText, subtext)
        }
      }
    };

    /**
     *echart加载模块函数
     * @ labelData, 实例ID数组
     * @ XArr, X轴数据
     *@ YArr, Y轴数据
     *@ divId,图表所在DIV的ID
     *@ titleText ,Y轴标题
     *@ subtext ,Y轴标题
     */
    function require (labelData, XArr, seriesDataArr, divId, titleText, subtext) {
      var option1 = {
        title: {
          text: titleText,
          subtext: subtext
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: labelData
        },
        grid: {
          containLabel: true
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: XArr
        }],
        yAxis: [{
          type: 'value'
        }],
        series: seriesDataArr
      }
      echarts.init(document.getElementById(divId)).setOption(option1, true)
    }

    /**
     *echart图表封装函数
     * @ labelData, 实例ID数组
     * @ XArr, X轴数据
     *@ YArr, Y轴数据
     *@ divId,图表所在DIV的ID
     *@ titleText ,Y轴标题
     *@ ubtext ,Y轴标题
     *@ unit ,Y轴单位刻度
     */
    function xyData (labelData, XArr, YArr, divId, titleText, subtext, unit) {
      var lineColor = ['#3C72C4', '#DD2292', '#F79709', '#2BD56F', '#666699']
      var seriesDataArr = []
      var countFor = 0
      for (var i = 0; i < labelData.length; i++) {
        var seriesObj = {
          name: labelData[i], // y轴上的鼠标事件显示
          type: 'line',
          data: YArr[i], // y轴数据
          itemStyle: {
            normal: {
              color: lineColor[i],
              lineStyle: { // 系列级个性化折线样式
                width: 1
              }

            }
          }
        }
        seriesDataArr.push(seriesObj)
        countFor++
        if (countFor == labelData.length) {
          XYRequire(labelData, XArr, seriesDataArr, divId, titleText, subtext, unit)
        }
      }
    };

    /**
     *echart加载模块函数
     * @ labelData, 实例ID数组
     * @ XArr, X轴数据
     *@ YArr, Y轴数据
     *@ divId,图表所在DIV的ID
     *@ titleText ,Y轴标题
     *@ subtext ,Y轴标题
     *@ unit ,Y轴单位刻度
     */
    function XYRequire (labelData, XArr, seriesDataArr, divId, titleText, subtext, unit) {
      var option1 = {
        title: {
          text: titleText, // y轴大标题
          subtext: subtext // y轴小标题
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: labelData // 线的名称，可以选择是否显示
        },
        grid: {
          containLabel: true
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: XArr // x轴坐标值
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}' + unit // y轴单位刻度
          }
        }],
        series: seriesDataArr
      }
      echarts.init(document.getElementById(divId)).setOption(option1, true)
    }
    /**
     *echart图表封装函数,矩形图，支持最大支持一组12个矩形不同颜色
     * @ labelData, 实例ID数组
     * @ XArr, X轴数据
     *@ YArr, Y轴数据
     *@ divId,图表所在DIV的ID
     *@ titleText ,Y轴标题
     *@ ubtext ,Y轴标题
     *@ unit ,Y轴单位刻度
     */
    function xjData (labelData, XArr, YArr, divId, titleText, subtext, unit) {
      var lineColor = ['#3C72C4', '#DD2292', '#F79709', '#2BD56F', '#666699']
      var seriesDataArr = []
      var countFor = 0
      for (var i = 0; i < labelData.length; i++) {
        var seriesObj = {
          name: labelData[i], // y轴上的鼠标事件显示
          type: 'bar',
          data: YArr[i], // y轴数据
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = ['#3C72C4', '#DD2292', '#F79709', '#ffc032', '#2BD56F', '#f47e39', '#4D2292', '#879709', '#f0c032', '#9BD56F', '#147e39', '#947e39']
                return colorList[params.dataIndex]
              }
            }
          }
        }
        seriesDataArr.push(seriesObj)
        countFor++
        if (countFor == labelData.length) {
          XJRequire(labelData, XArr, seriesDataArr, divId, titleText, subtext, unit)
        }
      }
    };

    /**
     *echart加载模块函数
     * @ labelData, 实例ID数组
     * @ XArr, X轴数据
     *@ YArr, Y轴数据
     *@ divId,图表所在DIV的ID
     *@ titleText ,Y轴标题
     *@ subtext ,Y轴标题
     *@ unit ,Y轴单位刻度
     */
    function XJRequire (labelData, XArr, seriesDataArr, divId, titleText, subtext, unit) {
      var option2 = {
        title: {
          text: titleText, // y轴大标题
          subtext: subtext // y轴小标题
        },
        tooltip: {
          show: true
        },
        /*  legend: {
              data: labelData//可以选择是否显示
          }, */
        grid: {
          containLabel: true
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          data: XArr // x轴坐标值
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}' + unit // y轴单位刻度
          }
        }],
        series: seriesDataArr
      }
      echarts.init(document.getElementById(divId)).setOption(option2, true)
    }
    /**
     *echart图片下载函数
     * @ divID, divID
     * @ name, 图片名称
     * @ width, 宽度 暂未使用
     *@ height, 高度 暂未使用
     */
    function downloadEchartPic (divID, name, width, height) {
      var myChart = echarts.init(document.getElementById(divID))
      var picbase = myChart.getDataURL()

      var img = new Image()
      img.crossOrigin = 'anonymous'

      /*  setTimeout(function() { */
      img.src = myChart.getDataURL({
        type: 'png',
        pixelRatio: 2, // 放大2倍
        backgroundColor: '#fff'
      })

      img.onload = function () {
        var canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        var ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        var dataURL = canvas.toDataURL('image/png')

        var a = document.createElement('a')
        // 创建一个单击事件
        var event = new MouseEvent('click')
        // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
        a.download = name || '下载图片名称'
        // 将生成的URL设置为a.href属性
        a.href = dataURL
        // 触发a的单击事件
        a.dispatchEvent(event)
      }
      /* }, 2000) */
    }
  })
  .factory('DownloadFactory', function () {
    var service = {
      initDownload: initDownload,
      crtDownload: crtDownload
    }
    return service

    /**
     *
     * @param {String} aim 界面指定元素ID
     * @param {JSONObject} title 导出数据结构
     * @param {JSONArray} downloadData 导出数据内容
     * @returns {File}
     */
    function initDownload (aim, title, downloadData) {
      // 暂时不做值判断
      if (downloadData instanceof Array) {
        var str = '\ufeff' + (_download_pack_data(title, downloadData))
        var blob = new Blob([str], {
          type: 'text/csv,charset=UTF-8'
        })
        var target = document.getElementById(aim)
        if (target === undefined) {
          target = document.createElement('a')
          target.href = window.URL.createObjectURL(blob)
          target.download = 'fileName.csv'
        }
        if (window.navigator.msSaveOrOpenBlob) {
          target.onclick = function () {
            navigator.msSaveBlob(blob, target.getAttribute('download'))
          }
        } else {
          document.getElementById(aim).href = URL.createObjectURL(blob)
        }
      }
    }
    /**
     *
     * @param {type} title 格式为"{字段名1:中文标题1,字段名2:中文标题2}"
     * @param {type} obj 处理后的数据集，[{字段名1:字段值11,字段名2:字段值12},{字段名1:字段值21,字段名2:字段值22}]
     * @returns {String} 可以下载的CSV格式数据集
     */
    function _download_pack_data (title, obj) {
      var str = ''
      if (title instanceof Object) {
        var cols = [],
          cvn = {}
        // pack column title
        var idx
        for (var col in title) {
          if ((idx = col.indexOf('@')) === -1) {
            cols.push(col)
          } else {
            cols.push(col.substring(0, idx))
            cvn[col.substring(0, idx)] = col.substr(idx + 1)
          }
          str += ('"' + title[col] + '"' + ',')
        }
        str += '\r\n'
        // pack row stat
        if (obj instanceof Array) {
          var _tmp_key, skp
          for (var _i = 0, _j = obj.length; _i < _j; _i++) {
            for (var i = 0, j = cols.length; i < j; i++) {
              _tmp_key = cols[i]
              if (cvn.hasOwnProperty(_tmp_key)) {
                var mk = cvn[_tmp_key]
                if ((skp = _tmp_key.indexOf('.')) !== -1) {
                  _tmp_key = _tmp_key.substring(0, skp)
                  str += _download_parse_Val(dict[mk][_download_parse_Val(obj[_i][_tmp_key], cols[i].substr(skp + 1)).toUpperCase()]) + ','
                } else {
                  str += _download_parse_Val(dict[mk][_download_parse_Val(obj[_i][_tmp_key]).toUpperCase()]) + ','
                }
              } else {
                if ((skp = _tmp_key.indexOf('.')) !== -1) {
                  _tmp_key = _tmp_key.substring(0, skp)
                  str += _download_parse_Val(obj[_i][_tmp_key], cols[i].substr(skp + 1)) + ','
                } else {
                  str += ('"' + _download_parse_Val(obj[_i][_tmp_key]) + '"' + ',')
                }
              }
            }
            str += '\r\n'
          }
        }
      }
      return str
    }

    function _download_parse_Val (data, key) {
      if (data === undefined) {
        return ''
      } else if (typeof (data) === 'string' || data instanceof Date) {
        return data
      } else if (typeof (data) === 'number') {
        return '' + data
      } else if (data instanceof Object) {
        var skp
        if (key === undefined) {
          return JSON.stringify(data)
        }
        if ((skp = key.indexOf('.')) !== -1) {
          var _tmp_key = key.substring(0, skp)
          return _download_parse_Val(data[_tmp_key], key.substr(skp + 1))
        } else {
          return _download_parse_Val(data[key])
        }
      } else if (data instanceof Array) {
        return _download_parse_Val(data[0], key)
      } else {
        // console.log("not found type by value >" + data + "::" + typeof (data));
        return data
      }
    }

    function crtDownload (aim, str) {
      var blob = new Blob([str], {
        type: 'text/crt,charset=UTF-8'
      })
      var target = document.getElementById(aim)
      if (target === undefined) {
        target = document.createElement('a')
        target.href = window.URL.createObjectURL(blob)
        target.download = 'fileName.crt'
      }
      if (window.navigator.msSaveOrOpenBlob) {
        target.onclick = function () {
          navigator.msSaveBlob(blob, target.getAttribute('download'))
        }
      } else {
        document.getElementById(aim).href = URL.createObjectURL(blob)
      }
    }
  })
