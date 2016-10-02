var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.username = '';
    
    $scope.lowercaseUsername = function() {
        
        return $filter('lowercase')($scope.username);
        
    }
    
    $scope.len5 = 5;
    
    $scope.rules = [
        {ruleName: 'Tài khoản phải có 5 kí tự'},
        {ruleName: 'Tài khoản chưa được sử dụng'},
        {ruleName: 'Tài khoản có ý nghĩa 1 chút'}
    ];
    
    console.log($scope.rules);

                                    
}]);
