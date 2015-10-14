angular.module('NoteWrangler')
    .controller('NotesIndexController', function($http, $scope, Note){

        Note.all().success(function(data){
            $scope.notes = data;
        });
    });