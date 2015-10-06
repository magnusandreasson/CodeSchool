angular.module('NoteWrangler')
    .directive("nwCard", function() {
        return {
            restrict: "E",
            templateUrl: "templates/directives/nw-card.html"
        }
    });