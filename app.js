var flashApp = angular.module("flash", []);
flashApp.controller("DeckController", function ($scope) {
  var allCards = [
    { front: "Your Face?",
      back: "Beautiful."
    },
    { front: "Height?",
      back: "Just right."
    },
    { front: "Life Goals?",
      back: "Whatever you want!"
    }
  ];

  $scope.copyDeck = function () {
    return [].concat(allCards);
  };
});

flashApp.controller("StudyController", function($scope) {

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
    $scope.current = $scope.current % $scope.cards.length;
  };

  $scope.reset = function() {
    $scope.cards = $scope.$parent.copyDeck();
    $scope.current = 0;
    $scope.front = true;
  };

  $scope.reset();

});
