var flashApp = angular.module("flash", []);

flashApp.controller("CardController", function($scope) {
  $scope.cards = [
    { front: "business",
      back: "party"
    },
    { front: "fannypack",
      back: "pack"
    },
    { front: "frontlines",
      back: "backbone"
    }
  ];

  $scope.current = 0;
  $scope.front = true;

  $scope.next = function() {
    var move = +(!$scope.front);
    var numCards = $scope.cards.length;

    $scope.current = ($scope.current + move) % numCards;
    $scope.front = !$scope.front;
  };
});
