(function () {
  angular
    .module('app')
    .controller('DemoController', ['$scope', 'storage', DemoController]);
  
  function DemoController($scope, storage) {
    $scope.storageType = 'local';

    $scope.saveKeyValuePair = function () {
      var vault = storage.for($scope.storageType);
      vault.setItem($scope.key, $scope.value);
    };

    
  }
})();
