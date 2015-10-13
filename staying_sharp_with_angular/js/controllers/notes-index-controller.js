angular.module('NoteWrangler')
    .controller('NotesIndexController', function($http, $scope){
        var controller = this;


        $http({method: 'get', url: 'json/notes.json'}).success(function(data){
            $scope.notes = data;
        });
    });