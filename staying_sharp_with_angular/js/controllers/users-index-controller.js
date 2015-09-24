angular.module('NoteWrangler')
    .controller('UsersIndexController', function($http){
        var controller = this;

        $http({method: 'get', url: 'json/users.json'}).success(function(data){
            controller.users = data;
        });
    });