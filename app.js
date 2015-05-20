var flashApp = angular.module("flash", []);

flashApp.controller("CardController", function($scope) {
  $scope.cards = [
    { front: "1abigail",
      back: "2anthony"
    },
    { front: "3barbara",
      back: "4billy"
    },
    { front: "5cindy",
      back: "6chas"
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

  $scope.back = function() {
    var move = +($scope.front);
    var numCards = $scope.cards.length;
    $scope.current = (($scope.current || numCards) - move) % numCards;
    $scope.front = !$scope.front;
  };
});
