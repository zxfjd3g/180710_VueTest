(function (window) {
  // 定义插件对象
  const MyPlugin = {}

  // 插件对象中必须包含一个install方法(回调调用)
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', (el, binding) => {
      el.textContent = 'my-directive ' + binding.value
    })

    // 3. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm的$myMethod()')
    }
  }

  // 暴露插件对象
  window.MyPlugin = MyPlugin
})(window)