var flashApp = angular.module("flash", []);

flashApp.controller("CardController", function($scope) {
  $scope.cards = [
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

  $scope.current = 0;
  $scope.front = true;
  $scope.resetDeck = [];
  for (var i = 0; i < $scope.cards.length; i++) {
    $scope.resetDeck[i] = $scope.cards[i]
  }

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
    for (var i = 0; i < $scope.resetDeck.length; i++) {
      $scope.cards[i] = $scope.resetDeck[i]
    }
    $scope.current = 0;
    $scope.front = true;
  };

});
