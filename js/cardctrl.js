angular.module("flash.controllers.card", [])
  .controller("CardController", function($scope) {
    $scope.addCard = function () {
      $scope.$parent.addCard($scope.front, $scope.back);
      $scope.front = "";
      $scope.back = "";
    };
});
