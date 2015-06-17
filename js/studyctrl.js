var studyModule = angular.module("flash.study", ["ngRoute"]);

studyModule.controller("StudyController", ["$scope", "$routeParams", function($scope, $routeParams) {

  $scope.indexNumber = $routeParams.index;

  $scope.next = function() {
    var move = +(!$scope.front);
    var numCards = $scope.cards.length;
    $scope.current = ($scope.current + move) % numCards;
    $scope.front = !$scope.front;
  };

  $scope.back = function() {
    var move = +($scope.front);
    var numCards = $scope.cards.length;
    $scope.current = (($scope.current || numCards) - move) % numCards;
    $scope.front = !$scope.front;
  };

  $scope.iGotIt = function() {
    $scope.front = true;
    $scope.cards.splice($scope.current, 1);
    $scope.current = ($scope.current % $scope.cards.length) || 0;
  };

  $scope.reset = function() {
    $scope.cards = $scope.$parent.refreshStudyDeck($routeParams.index);
    $scope.current = 0;
    $scope.front = true;
  };

  $scope.reset();

}]);
