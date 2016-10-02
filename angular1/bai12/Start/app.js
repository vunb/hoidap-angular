var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.name = 'Hoa';
    $scope.job = 'Admin';
    
    $scope.getInfo = function() {
        return 'Hoa Admin';
    }
    
    $scope.getInfo();
    
    console.log($scope);
    
});