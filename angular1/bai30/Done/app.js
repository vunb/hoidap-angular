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

myApp.service('nameService', function(){
    
    var self = this;
    
    this.name = 'Hoa Lê';
    
    this.nameLength = function() {
        return self.name.length;
    }
    
});


myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.name = nameService.name;
    
    $log.log(nameService.name);
    $log.log(nameService.nameLength());
    
    $scope.$watch('name', function(){
       
        nameService.name = $scope.name; 
        
    });
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    $scope.name = nameService.name;
    
    $log.log(nameService.name);
    $log.log(nameService.nameLength());
    
    $scope.$watch('name', function(){
       
        nameService.name = $scope.name; 
        
    });
                                    
}]);

