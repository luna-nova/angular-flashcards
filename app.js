var flashApp = angular.module("flash", []);

flashApp.controller("CardController", function($scope) {
  $scope.cards = [
    { front: "business",
      back: "party"
    },
    { front: "vaginal",
      back: "anal"
    },
    { front: "frontlines",
      back: "backbone"
    }
  ];
});
