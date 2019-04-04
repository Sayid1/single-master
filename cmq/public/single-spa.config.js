var cmqApp = window.singleSpaAngularjs.default({
  angular: window.angular,
  domElementGetter: function () {
    return document.getElementById('cmq')
  },
  mainAngularModule: 'AngularCmq',
  uiRouter: false,
  preserveGlobal: true,
  template: '<display-cmq />',
})

window.singleSpa.registerApplication('cmq', cmqApp, function activityFunction(location) {
  return location.hash.startsWith('#/cmq');
})

window.singleSpa.start()
