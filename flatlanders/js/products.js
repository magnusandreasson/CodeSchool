(function(){
    var app = angular.module('store-products', []);

    app.directive('descriptionPanel', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/description-panel.html'
        };
    });

    app.directive('specPanel', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/spec-panel.html'
        };
    });

    app.directive('reviewPanel', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/review-panel.html',
            controller: function(){
                this.review = {};
                this.addReview = function(product){
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl'
        };
    });

    app.directive('productPanels',function(){
        return {
            restrict: 'E',
            templateUrl:'templates/product-panels.html',
            controller: function() {
                this.tab = 1;
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panels'
        };
    });
})();