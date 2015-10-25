describe('Tests for GameLogicService', function() {

    // load modules
    beforeEach(module('rpsApp'));

    // Test service availability
    it('check the existence of the Game Logic', inject(function(GameLogic) {
        expect(GameLogic).toBeDefined();
    }));

    it('should return player one as winner with rock beating scissors', inject(function(GameLogic) {

        var playerOne = new Player("winner", new Hand("rock", 1));
        var playerTwo = new Player("loser", new Hand("scissors", 3));

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(playerOne);
    }));

});