var rpsApp = angular.module('rpsApp', [
        'ngRoute',
        'GameLogicService',
        'HandTypeService',
        'MathService',
        'HandGeneratorService'
    ]
);


rpsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'templates/home.tpl.html'
        });
    }
]);