var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', function(a, b) {
    
    console.log(b);
    //$log.info($scope);
    
}]);
