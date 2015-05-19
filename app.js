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
});
