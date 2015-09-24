angular.module('NoteWrangler')
    .controller('NotesIndexController', function($http){
        var controller = this;


        $http({method: 'get', url: 'json/notes.json'}).success(function(data){
            controller.notes = data;
        });
    });