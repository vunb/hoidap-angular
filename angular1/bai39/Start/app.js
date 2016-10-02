var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider.when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.directive('searchResult', function(){
    
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchResult.html',
        replace: true,
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
        }
    }
    
})

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.person = {
        name: 'Hoa Lê',
        address: '59 Láng Hạ',
        city: 'Hà Nội',
        country: 'Việt Nam'
    }
    
    $scope.formattedAddress = function(person) {
        
        return person.address + ', ' + person.city + ', ' + person.country;
        
    }

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
                                    
}]);

