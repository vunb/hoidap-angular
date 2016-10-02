var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.name = 'Vu';
    
    $timeout(function(){
       
        $scope.name = 'Boy';
        
    }, 3000);
    
                                    
}]);
