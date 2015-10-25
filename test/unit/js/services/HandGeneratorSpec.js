describe('Tests for GameLogicService', function() {

    // load modules
    beforeEach(module('rpsApp'));

    it('check the existence of the Hand Generator service', inject(function(HandGenerator) {
        expect(HandGenerator).toBeDefined();
        console.log(HandGenerator.getRandomHand());
    }));
});