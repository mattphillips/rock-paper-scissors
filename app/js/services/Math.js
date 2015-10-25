// This is a nasty service to provide an interface to Math functions required that aren't standard in JS
var MathService = angular.module('MathService', []);
// named to avoid collisions with keyword Math
MathService.service('Maths', function(){

    this.getRandomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});