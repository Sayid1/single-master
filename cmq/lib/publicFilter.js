(function () {
  'use strict'

  angular
    .module('app')

    // 获取日期
    .filter('getdate', function () {
      return function (date) {
        var unixTimestamp = new Date((date) * 1000)
        var expireTime = unixTimestamp.toLocaleDateString().replace('/', '-').replace('/', '-')
        return expireTime
      }
    })
    // 获取日期时分秒
    .filter('getdateHH', function () {
      return function (timestamp) {
        var date = new Date(timestamp * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        var D = date.getDate() + ' '
        if (D <= 9) {
          D = '0' + D
        }
        var h = date.getHours()
        if (h <= 9) {
          h = '0' + h
        }
        var m = date.getMinutes()
        if (m <= 9) {
          m = '0' + m
        }
        var s = date.getSeconds()
        if (s <= 9) {
          s = '0' + s
        }
        return Y + M + D + h + ':' + m + ':' + s
      }
    })
    // 获取时分秒
    .filter('HHMMSS', function () {
      return function (data) {
        var date = new Date(data)
        date.getHours() // 小时
        date.getMinutes() // 分
        date.getSeconds() // 秒
        date.getMilliseconds() // 毫秒
      }
    })
    .filter('uodatecodec', function () {
      return function (codec) {
        if (codec === 'libx264') {
          return 'H.264'
        } else if (codec === 'libx265') {
          return 'H.265'
        } else if (codec === 'libfdk_aac') {
          return 'ACC'
        } else if (codec === 'libmp3lame') {
          return 'MP3'
        } else if (codec === 1) {
          return '是'
        } else if (codec === 0) {
          return '否'
        }
      }
      // 获取近期日期
    })
    .filter('updateis', function () {
      return function (codec) {
        if (codec === 1) {
          return '单声道'
        } else if (codec === 2) {
          return '双声道'
        }
      }
    })
    .filter('getDay', function () {
      return function getDay (day) {
        var today = new Date()
        var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day
        today.setTime(targetday_milliseconds) // 注意，这行是关键代码
        var tYear = today.getFullYear()
        var tMonth = today.getMonth()
        var tDate = today.getDate()
        if (tMonth >= 1 && tMonth <= 9) {
          tMonth = '0' + tMonth
        }
        if (tDate >= 0 && tDate <= 9) {
          tDate = '0' + tDate
        }
        return tYear + '-' + tMonth + '-' + tDate
      }
    })
    // 获取流量
    .filter('Tflux', function () {
      return function (limit) {
        var size = ''
        if (limit < 0.1 * 1024) { // 如果小于0.1KB转化成B
          size = limit.toFixed(2) + ' B'
        } else if (limit < 0.1 * 1024 * 1024) { // 如果小于0.1MB转化成KB
          size = (limit / 1024).toFixed(2) + ' KB'
        } else if (limit < 0.1 * 1024 * 1024 * 1024) { // 如果小于0.1GB转化成MB
          size = (limit / (1024 * 1024)).toFixed(2) + ' MB'
        } else { // 其他转化成GB
          size = (limit / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
        }
        var sizestr = size + ''
        var len = sizestr.indexOf('\.')
        var dec = sizestr.substr(len + 0, 2)
        if (dec == '00') { // 当小数点后为00时 去掉小数部分
          return sizestr.substring(0, len) + sizestr.substr(len + 3, 2)
        }
        return sizestr
      }
    })
    // 日期增加，年份，月份，天数    * @param interval     * @param number     * @param date
    .filter('DateAdd', function () {
      return function (interval, number, date) {
        switch (interval) {
          case 'y ':
            {
              date.setFullYear(date.getFullYear()() + number)
              return date
              break
            }
          case 'm ':
            {
              date.setMonth(date.getMonth() + number)
              return date
              break
            }
          case 'd ':
            {
              date.setDate(date.getDate() + number)
              return date
              break
            }
        }
      }
    })

    // 过滤服务状态类型
    .filter('serverStatusFilter', ['col', function (col) {
      return function (type) {
        return col.Val('SERVER_STATUS', type)
      }
    }])

    // 过滤实例及容器状态类型
    .filter('instanceStatusFilter', ['col', function (col) {
      return function (type) {
        return col.Val('INSTANCE_STATUS', type)
      }
    }])

    // 过滤数据同步的任务状态
    .filter('syncTaskStatusFillterr', ['col', function (col) {
      return function (type) {
        return col.Val('SYNCTASK_STATUS', type)
      }
    }])

    // 过滤数据同步的数据同步类型
    .filter('migrateTypeFillterr', ['col', function (col) {
      return function (type) {
        return col.Val('MIGRATE_TYPE', type)
      }
    }])

    // 过滤直播状态
    .filter('lvbChannelStatusFillterr', ['col', function (col) {
      return function (type) {
        return col.Val('LVB_STATUS', type)
      }
    }])

    // 全球应用加速地域过滤
    .filter('accessRegionFilter', ['col', function (col) {
      return function (type) {
        return col.Val('ACCESS_REGION', type)
      }
    }])

    // 全球应用加速地域过滤
    .filter('productIdFilterr', ['col', function (col) {
      return function (type) {
        return col.Val('PRODUCT_ID', type)
      }
    }])

    // 全球应用加速通道状态过滤
    .filter('proxiesStatusFilter', ['col', function (col) {
      return function (type) {
        return col.Val('PROXIES_STATUS', type)
      }
    }])
})()
