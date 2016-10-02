var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.username = '';
    
    $scope.lowercaseUsername = function() {
        
        return $filter('lowercase')($scope.username);
        
    }
    
    $scope.$watch('username', function(newValue, oldValue){
       
        console.log('Changed !!');
        console.log("New: " + newValue);
        console.log("Old: " + oldValue);
        
    });
    
    $timeout(function(){
        
        $scope.username = 'Vunb';
        console.log('Scope changed !');
      
        
    }, 3000);
                                    
}]);
