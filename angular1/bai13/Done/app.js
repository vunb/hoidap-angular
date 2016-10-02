var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    console.log($scope);
});

var searchPerson = function(firstName, $scope, email, city, job) {
    return 'Hoa Le';
}

console.log(angular.injector().annotate(searchPerson));