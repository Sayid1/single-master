/*
 * @Author: Leo Wang
 * @Date: 2018-05-23 12:33:43
 * @LastEditors: Leo Wang
 * @LastEditTime: 2018-05-31 13:39:30
 * @Description: Coding is a kind of art - Leo Wang
 * @Email: 1280394302@qq.com
 */
(function () {
  'use strict'

  var routes = [{
      // 队列一级界面
    name: 'queue',
    url: '/queue',
    templateUrl: 'queue/queue.html',
    controller: 'queueController',
    controllerAs: 'vm',
    resolve: {
      loadQueue: [
        '$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            'queue/queue.css',
            'queue/queue.service.js',
            'queue/queue.directive.js',
            'queue/queue.controller.js'
          ])
        }
      ]
    }
  }, {
      // 队列二级界面
    name: 'queue.detail',
    url: '/detail/:InstanceIds/:queueName/:Region/:tab',
    templateUrl: 'queue/detail/queueDetail.html',
    controller: 'queueDetailController',
    controllerAs: 'vm',
    resolve: {
      loadQueue: [
        '$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            'queue/detail/queueDetail.css',
            'queue/detail/queueDetail.service.js',
            'queue/detail/queueDetail.controller.js', // 详情

            'queue/detail/queueInfo/queueInfo.css',
            'queue/detail/queueInfo/queueInfo.directive.js',
            'queue/detail/queueInfo/queueInfo.service.js',
            'queue/detail/queueInfo/queueInfo.controller.js', // 队列信息

            'queue/detail/monitor/monitor.css',
            'queue/detail/monitor/monitor.directive.js',
            'queue/detail/monitor/monitor.service.js',
            'queue/detail/monitor/monitor.controller.js', // 监控

            'queue/detail/messageBack/messageBack.css',
            'queue/detail/messageBack/messageBack.directive.js',
            'queue/detail/messageBack/messageBack.service.js',
            'queue/detail/messageBack/messageBack.controller.js' // 消息回溯
          ])
        }
      ]
    }
  },
  {
      // 消息接收一级界面
      // /:Region/:queueId/:queueName/:pollingWaitSeconds
    name: 'message',
    url: '/message',
    templateUrl: 'message/message.html',
    controller: 'messageController',
    controllerAs: 'vm',
    resolve: {
      loadMessage: [
        '$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            'message/message.css',
            'message/message.service.js',
            'message/message.controller.js'
          ])
        }
      ]
    },
    params: {
      Region: null,
      queueId: null,
      queueName: null,
      pollingWaitSeconds: null,
      visibilityTimeoutNochange:null
    }
  },
  {
    name: 'message.detail',
    url: '/messageDetail',
    templateUrl: 'message/detail/message.detail.html',
    controller: 'MessageDetailController',
    controllerAs: 'vm',
    resolve: {
      loadMessageDetail: [
        '$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            'message/detail/message.detail.service.js',
            'message/detail/message.detail.controller.js'
          ])
        }
      ]
    }
  },
  {
      // 主题订阅一级界面
    name: 'topic',
    url: '/topic',
    templateUrl: 'topic/topic.html',
    controller: 'topicController',
    controllerAs: 'vm',
    resolve: {
      loadMessage: [
        '$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            'topic/topic.css',
            'topic/topic.service.js',
            'topic/topic.directive.js',
            'topic/topic.controller.js'
          ])
        }
      ]
    }
  },
  {
      // 主题订阅二级界面
    name: 'topic.detail',
    url: '/detail/:InstanceIds/:InstanceName/:Region/:tab/:filterType',
    templateUrl: 'topic/detail/detail.html',
    controller: 'detailController',
    controllerAs: 'vm',
    resolve: {
      loadMessage: [
        '$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            'topic/detail/detail.css',
            'topic/detail/detail.directive.js',
            'topic/detail/detail.service.js',
            'topic/detail/detail.controller.js',

              // 基本信息
            'topic/detail/baseInfo/baseInfo.css',
            'topic/detail/baseInfo/baseInfo.service.js',
            'topic/detail/baseInfo/baseInfo.controller.js',

              // 监控
            'topic/detail/monitor/monitor.css',
            'topic/detail/monitor/monitor.service.js',
            'topic/detail/monitor/monitor.controller.js',

              // 订阅者
            'topic/detail/subscriber/subscriber.css',
            'topic/detail/subscriber/subscriber.service.js',
            'topic/detail/subscriber/subscriber.controller.js'
          ])
        }
      ]
    }
  }
  ]

  angular
    .module('app')
    .config(RouterConfig)
    .config(HttpConfig)

  RouterConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
  ]
  HttpConfig.$inject = ['$httpProvider']
  /**
   * 路由配置
   */
  function RouterConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('')
    $urlRouterProvider.otherwise('/queue')

    angular.forEach(routes, function (route) {
      $stateProvider.state(route)
    })
  }
  /**
   * Http配置
   */
  function HttpConfig ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor')
  }
})()
