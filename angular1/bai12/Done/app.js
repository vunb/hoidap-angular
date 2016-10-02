var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    
});

var searchPerson = function(firstName, lastName, email, city, job) {
    return 'Hoa Le';
}

var searchPersonString = searchPerson.toString();

console.log(searchPersonString);