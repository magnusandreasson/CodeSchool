angular.module("NoteWrangler")
.factory("Note", function NoteFactory($http, $resource) {
    return $resource("json/notes.json/:id", {}, {
        update: {
            method: "PUT"  // ngResource doesn't have an update method
        }
    });

    //return {
    //    all: function() {
    //        return $http({method: 'get', url: 'json/notes.json'});
    //    }
    //}
});