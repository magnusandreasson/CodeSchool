angular.module('NoteWrangler')
    .controller('NotesIndexController', function($http, $scope, Note){


        $scope.notes = Note.query();

    });