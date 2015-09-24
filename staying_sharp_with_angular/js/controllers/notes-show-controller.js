angular.module('NoteWrangler')
    .controller('NotesShowController', function($http, $filter, $routeParams){
        var controller = this;

        $http({method: 'get', url: 'json/notes.json'}).success(function(data){
            controller.note = $filter('filter')(data, function(d) {return d.id === parseInt($routeParams.id);})[0];
        });

    });