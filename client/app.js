(function() {
    'use strict';
    
    var app = angular.module('contactsApp', []);

    app.controller('contactsController', function ($scope, $http) {
        $http.get('http://192.168.1.33:3001/api/contacts')
        .then(function(response) {
            $scope.contacts = response.data;
        });

        $scope.saveContact = function (contact) {
            $http.post('http://192.168.1.33:3001/api/contacts', contact)
            .then(function(response) {
                $scope.contacts.push(response.data);
            });
        }
    });
})();