var cardModule = angular.module("flash.card", []);

cardModule.controller("CardController", ["$scope", "$routeParams", function($scope, $routeParams) {
  $scope.addCard = function () {
    $scope.$parent.addCard($scope.front, $scope.back, $routeParams.index);
    $scope.front = "";
    $scope.back = "";
  };
}]);
