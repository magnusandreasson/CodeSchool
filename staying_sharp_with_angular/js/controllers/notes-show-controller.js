angular.module('NoteWrangler')
.controller('NotesShowController', function($http, $routeParams){
        $http({method:'GET', url: '/notes/'})
    })