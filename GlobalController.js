app.controller('globalController', function($scope, $location, mainService, $state, toastr){
    $scope.selectedItem = "Allocation";


    $scope.changeSelectedItem = function(item) {
      $scope.selectedItem = item;
    }

});