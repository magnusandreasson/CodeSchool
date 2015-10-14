angular.module("NoteWrangler")
.factory("Note", function NoteFactory($http) {
    return {
        all: function() {
            return $http({method: 'get', url: 'json/notes.json'});
        }
    }
});