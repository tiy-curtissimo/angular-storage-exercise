(function () {
  angular
    .module('app')
    .controller('DemoController', ['$scope', 'storage', DemoController]);
  
  function DemoController($scope, storage) {
    $scope.storageType = 'local';

    function updateUi() {
      $scope.localKeyValues = storage.for('local').getAll();
      $scope.sessionKeyValues = storage.for('session').getAll();
    }

    updateUi();

    $scope.delete = function (storageType, key) {
      storage.for(storageType).delete(key);
      updateUi();
    };

    $scope.saveKeyValuePair = function () {
      var vault = storage.for($scope.storageType);
      vault.set($scope.key, $scope.value);
      updateUi();
    };

  }
})();
