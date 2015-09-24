angular.module('NoteWrangler')
    .config(function($routeProvider){
        $routeProvider.when('/notes', {
            templateUrl: 'templates/pages/notes/index.html',
            controller: 'NotesIndexController',
            controllerAs: 'indexController'
        })
        .when('/notes/:id', {
            templateUrl: 'templates/pages/notes/show.html',
            controller: 'NotesShowController',
            controllerAs: 'showController'
        })
        .when('/users', {
                templateUrl: 'templates/pages/users/index.html',
                controller: 'UsersIndexController',
                controllerAs: 'indexController'
        })
        .when('/users/:id', {
            templateUrl: 'templates/pages/users/show.html',
            controller: 'UsersShowController',
            controllerAs: 'showController'
        })
        .when('/', {
            templateUrl: 'templates/pages/notes/index.html',
            controller: 'NotesIndexController',
            controllerAs: 'indexController'
        })
        .otherwise( { redirectTo: '/'});
    });