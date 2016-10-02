var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.username = '';
    
    $scope.lowercaseUsername = function() {
        
        return $filter('lowercase')($scope.username);
        
    }
                                    
}]);
