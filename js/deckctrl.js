angular.module("flash.controllers.deck", [])
  .controller("DeckController", function ($scope) {
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
