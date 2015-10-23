angular.module('NoteWrangler')
.directive("nwCategorySelect", function(Category) {
    return  {
      replace: true,
      restrict: "E",
      templateUrl: "/templates/directives/nw-category-select.html",
      controller: function($scope){
        this.getActiveCategory = function() {
          return $scope.activeCategory;
        };
        this.setCategory = function(category){
          $scope.activeCategory = category.name;
        };
      },
      link: function (scope, element, attrs) {
        scope.categories = Category.query();
      }
    };
  });