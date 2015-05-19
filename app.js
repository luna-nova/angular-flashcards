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
  $scope.nextCard = function() {
    $scope.current = ($scope.current+1) % ($scope.cards.length);
  }
});
