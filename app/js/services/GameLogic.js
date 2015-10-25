var GameLogicService = angular.module('GameLogicService', []);

const EVEN = 2,
      TIE = "TIE";

GameLogicService.service('GameLogic', function(){

    this.determineWinningPlayer = function(playerOne, playerTwo) {

        var handOne = playerOne.getHand();
        var handTwo = playerTwo.getHand();

        if (handsAreEqual(handOne, handTwo))
            return TIE;

        if (handsAreBothEvenOrOdd(handOne, handTwo))
            return getLowerValueHand(playerOne, playerTwo);

        else
            return getHigherValueHand(playerOne, playerTwo);
    }
});

function handsAreEqual(handOne, handTwo) {
    return handOne == handTwo;
}

function handsAreBothEvenOrOdd(handOne, handTwo) {
    return getEvenOrOdd(handOne.getValue()) == getEvenOrOdd(handTwo.getValue());
}

function getEvenOrOdd(value) {
    return value % EVEN;
}

function getLowerValueHand(playerOne, playerTwo) {
    return playerOne.getHand().getValue() < playerTwo.getHand().getValue() ? playerOne : playerTwo;
}

function getHigherValueHand(playerOne, playerTwo) {
    return playerOne.getHand().getValue() > playerTwo.getHand().getValue() ? playerOne : playerTwo;
}