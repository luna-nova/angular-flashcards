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

  var studyDeck;

  $scope.refreshStudyDeck = function () {
    return studyDeck = [].concat(allCards);
  };

  $scope.addCard = function (side1, side2) {
    var newCard = { front: side1, back: side2 };
    allCards.push(newCard);
    studyDeck && studyDeck.push(newCard);
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
    $scope.current = ($scope.current % $scope.cards.length) || 0;
  };

  $scope.reset = function() {
    $scope.cards = $scope.$parent.refreshStudyDeck();
    $scope.current = 0;
    $scope.front = true;
  };

  $scope.reset();

});

flashApp.controller("CardController", function($scope) {
  $scope.addCard = function () {
    $scope.$parent.addCard($scope.front, $scope.back);
    $scope.front = "";
    $scope.back = "";
  };
});
