var HandGeneratorService = angular.module('HandGeneratorService', []);

const MIN = 0,
      ARRAY_ADJUSTMENT = 1;

HandGeneratorService.service('HandGenerator', ['HandType', 'Maths', function(HandType, Maths){

    this.getRandomHand = function() {

        var max = HandType.hands.length - ARRAY_ADJUSTMENT;
        var random = Maths.getRandomNumber(MIN, max);

        return new Hand(HandType.hands[random], random + ARRAY_ADJUSTMENT);
    }
}]);