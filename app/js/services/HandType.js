// This is a service that represents the metadata regarding a hand.
var HandTypeService = angular.module('HandTypeService', []);

HandTypeService.service('HandType', function(){

    return {
        "hands":[
            "rock",
            "paper",
            "scissors"
        ]
    }
});