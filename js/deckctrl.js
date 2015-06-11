var deckModule = angular.module("flash.deck", []);

deckModule.controller("DeckController", function ($scope) {
  var allDecks = [
    { name: "Deck 0",
      cards: [
        { front: "Your Face?",
          back: "Beautiful."
        },
        { front: "Height?",
          back: "Just right."
        },
        { front: "Life Goals?",
          back: "Whatever you want!"
        }
      ]
    },
    { name: "Deck 1",
      cards: [
        { front: "How Many Fingers Am I Holding Up?",
          back: "A Lot."
        },
        { front: "What's My Middle Name?",
          back: "[insert name here]"
        },
        { front: "Why Did The Chicken Cross The Road?",
          back: "To Get To The Other Side."
        }
      ]
    }
  ];

  var allCards = allDecks[0].cards;
  var studyDeck;

  $scope.decks = allDecks;

  $scope.refreshStudyDeck = function () {
    return studyDeck = [].concat(allCards);
  };

  $scope.addCard = function (side1, side2) {
    var newCard = { front: side1, back: side2 };
    allCards.push(newCard);
    studyDeck && studyDeck.push(newCard);
  };

});
