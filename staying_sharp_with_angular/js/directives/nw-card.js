angular.module('NoteWrangler')
    .directive("nwCard", function($sce) {
        return {
            restrict: "E",
            templateUrl: "templates/directives/nw-card.html",
            scope: {
                title: "=",
                body: "=",
                icon: "=",
                description: "="
            },
            link: function(scope, element) {
               scope.body = $sce.trustAsHtml(markdown.toHTML(scope.body));

                element.on("click", function(){
                    element.find("div.card p").toggleClass("hidden");
                })
            }
        }
    });