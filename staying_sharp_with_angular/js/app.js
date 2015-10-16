angular.module("NoteWrangler", ['ngRoute'])
.config(function (GravatarProvider) {
    GravatarProvider.setSize(100);
});