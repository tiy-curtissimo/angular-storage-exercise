(function () {
  angular
    .module('app')
    .controller('DemoController', ['$scope', 'storage', DemoController]);
  
  function DemoController($scope, storage) {
    $scope.storageType = 'local';
    $scope.localKeyValues = storage.for('local').getAll();
    $scope.sessionKeyValues = storage.for('session').getAll();

    $scope.saveKeyValuePair = function () {
      var vault = storage.for($scope.storageType);
      vault.set($scope.key, $scope.value);
      
      $scope.localKeyValues = storage.for('local').getAll();
      $scope.sessionKeyValues = storage.for('session').getAll();
    };

  }
})();
