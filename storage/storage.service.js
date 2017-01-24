(function () {
  angular
    .module('storage')
    .factory('storage', ['$window', storageService]);
  
  function storageService($window) {

    return {
      for: function (type) {
        var storage = null;
        if (type === 'local') {
          storage = $window.localStorage;
        } else if (type === 'session') {
          storage = $window.sessionStorage;
        }
        return {
          set: function (key, value) {
            storage.setItem(key, value);
          },
          getAll: function () {
            var result = [],
                key;
            for (var i = 0; i < storage.length; i += 1) {
              key = storage.key(i);
              result.push({
                key: key,
                value: storage.getItem(key)
              });
            }
            return result;
          }
        }
      }
    }

  }
})();
