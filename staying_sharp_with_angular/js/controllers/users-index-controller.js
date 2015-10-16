angular.module('NoteWrangler')
    .controller('UsersIndexController', function($scope, $http, Gravatar){
        $scope.gravatarUrl = function(email) {
            return Gravatar.generate(email);
        };


        $http({method: 'get', url: 'json/users.json'}).success(function(data){
            $scope.users = data;
        });
    });