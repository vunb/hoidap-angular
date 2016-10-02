var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    
    $scope.name = 'Main';
                                    
}]);

myApp.controller('secondController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    
    $scope.name = 'Second';
                                    
}]);

