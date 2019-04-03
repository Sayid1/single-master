(function () {
  'use strict'

  angular
    .module('app')

    .directive('uiValidate', ['$$uiValidateApplyWatch', function ($$uiValidateApplyWatch) {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
          var validateFn, validateExpr = scope.$eval(attrs.uiValidate)

          if (!validateExpr) {
            return
          }

          if (angular.isString(validateExpr)) {
            validateExpr = {
              validator: validateExpr
            }
          }

          angular.forEach(validateExpr, function (exprssn, key) {
            validateFn = function (modelValue, viewValue) {
              // $value is left for retrocompatibility
              var expression = scope.$eval(exprssn, {
                '$value': modelValue,
                '$modelValue': modelValue,
                '$viewValue': viewValue,
                '$name': ctrl.$name
              })
              // Keep support for promises for retrocompatibility
              if (angular.isObject(expression) && angular.isFunction(expression.then)) {
                expression.then(function () {
                  ctrl.$setValidity(key, true)
                }, function () {
                  ctrl.$setValidity(key, false)
                })
                // Return as valid for now. Validity is updated when promise resolves.
                return true
              } else {
                return expression
              }
            }
            ctrl.$validators[key] = validateFn
          })

          // Support for ui-validate-watch
          if (attrs.uiValidateWatch) {
            $$uiValidateApplyWatch(scope, ctrl, scope.$eval(attrs.uiValidateWatch))
          }
        }
      }
    }])
    .directive('uiValidateAsync', ['$$uiValidateApplyWatch', '$timeout', '$q', function ($$uiValidateApplyWatch, $timeout, $q) {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
          var validateFn, validateExpr = scope.$eval(attrs.uiValidateAsync)

          if (!validateExpr) {
            return
          }

          if (angular.isString(validateExpr)) {
            validateExpr = {
              validatorAsync: validateExpr
            }
          }

          angular.forEach(validateExpr, function (exprssn, key) {
            validateFn = function (modelValue, viewValue) {
              // $value is left for ease of use
              var expression = scope.$eval(exprssn, {
                '$value': modelValue,
                '$modelValue': modelValue,
                '$viewValue': viewValue,
                '$name': ctrl.$name
              })
              // Check if it's a promise
              if (angular.isObject(expression) && angular.isFunction(expression.then)) {
                return expression
                // Support for validate non-async validators
              } else {
                return $q(function (resolve, reject) {
                  setTimeout(function () {
                    if (expression) {
                      resolve()
                    } else {
                      reject()
                    }
                  }, 0)
                })
              }
            }
            ctrl.$asyncValidators[key] = validateFn
          })

          // Support for ui-validate-watch
          if (attrs.uiValidateWatch) {
            $$uiValidateApplyWatch(scope, ctrl, scope.$eval(attrs.uiValidateWatch))
          }
        }
      }
    }])
    .service('$$uiValidateApplyWatch', function () {
      return function (scope, ctrl, watch) {
        // string - update all validators on expression change
        if (angular.isString(watch)) {
          scope.$watch(watch, function () {
            ctrl.$validate()
          })
          // array - update all validators on change of any expression
        } else if (angular.isArray(watch)) {
          angular.forEach(watch, function (expression) {
            scope.$watch(expression, function () {
              ctrl.$validate()
            })
          })
          // object - update appropriate validator
        } else if (angular.isObject(watch)) {
          angular.forEach(watch, function (expression /*, validatorKey */) {
            // value is string - look after one expression
            if (angular.isString(expression)) {
              scope.$watch(expression, function () {
                ctrl.$validate()
              })
            }
            // value is array - look after all expressions in array
            if (angular.isArray(expression)) {
              angular.forEach(expression, function (intExpression) {
                scope.$watch(intExpression, function () {
                  ctrl.$validate()
                })
              })
            }
          })
        }
      }
    })

    // 权限控制指令
    .directive('zgAccess', function ($rootScope) {
      return {
        restrict: 'A',
        priority: '1001',
        compile: function (element, attr) {
          var access = attr['zgAccess']
          return function (scope, element) {
            if ($rootScope.inProduction) {
              if (__power__.indexOf(access) === -1) {
                element.remove()
              }
            }
          }
        }
      }
    })
})()
