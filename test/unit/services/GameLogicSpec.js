describe('Tests for GameLogicService', function() {

    const ROCK     = new Hand("rock", 1),
          PAPER    = new Hand("paper", 2),
          SCISSORS = new Hand("scissors", 3),
          TIE      = "TIE";

    // load modules
    beforeEach(module('rpsApp'));

    // Test service availability
    it('check the existence of the Game Logic', inject(function(GameLogic) {
        expect(GameLogic).toBeDefined();
    }));

    it('should return player one as winner with rock beating scissors', inject(function(GameLogic) {

        var playerOne = new Player("winner", ROCK);
        var playerTwo = new Player("loser", SCISSORS);

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(playerOne);
    }));

    it('should return player one as winner with paper beating rock', inject(function(GameLogic) {

        var playerOne = new Player("winner", PAPER);
        var playerTwo = new Player("loser", ROCK);

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(playerOne);
    }));

    it('should return player one as winner with scissors beating paper', inject(function(GameLogic) {

        var playerOne = new Player("winner", SCISSORS);
        var playerTwo = new Player("loser", PAPER);

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(playerOne);
    }));

    it('should return player two as winner with rock beating scissors', inject(function(GameLogic) {

        var playerOne = new Player("loser", SCISSORS);
        var playerTwo = new Player("winner", ROCK);

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(playerTwo);
    }));

    it('should return player two as winner with paper beating rock', inject(function(GameLogic) {

        var playerOne = new Player("loser", ROCK);
        var playerTwo = new Player("winner", PAPER);

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(playerTwo);
    }));

    it('should return player two as winner with scissors beating paper', inject(function(GameLogic) {

        var playerOne = new Player("loser", PAPER);
        var playerTwo = new Player("winner", SCISSORS);

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(playerTwo);
    }));

    it('should return tie when both players have the same rock as their hand', inject(function(GameLogic) {

        var playerOne = new Player("p1", ROCK);
        var playerTwo = new Player("p2", ROCK);

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(TIE);
    }));

    it('should return tie when both players have the same paper as their hand', inject(function(GameLogic) {

        var playerOne = new Player("p1", PAPER);
        var playerTwo = new Player("p2", PAPER);

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(TIE);
    }));

    it('should return tie when both players have the same scissors as their hand', inject(function(GameLogic) {

         var playerOne = new Player("p1", SCISSORS);
         var playerTwo = new Player("p2", SCISSORS);

        expect(GameLogic.determineWinningPlayer(playerOne, playerTwo)).toEqual(TIE);
    }));
});