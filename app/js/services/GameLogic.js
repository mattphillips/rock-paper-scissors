var GameLogicService = angular.module('GameLogicService', []);

const EVEN = 2,
      ZERO = 0,
      TIE = "TIE";

GameLogicService.service('GameLogic', ['HandType', 'Maths', function(Hands, Maths){

    this.determineWinningPlayer = function(playerOne, playerTwo) {

        var diff = playerOne.getHand().getValue() - playerTwo.getHand().getValue();

        if (diff == ZERO)
            return TIE;

        var numberOfHandTypes = Hands.hands.length;
        var remainder = Maths.mod(diff, numberOfHandTypes);

        return Maths.mod(remainder, EVEN) == ZERO ? playerTwo : playerOne;
    }
}]);