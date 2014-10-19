(function(){
    var app = angular.module('gemStore',['store-products']);

    // Controllers
    app.controller('StoreController', ['$http', function($http) {
       //this.products = gems;
        var store = this;
        store.products = [];

        $http.get('products.json').success(function(data){
            store.products = data;
        });
    }]);

    app.controller('ReviewController', function(){
       this.review = {};
       this.addReview = function(product){
         product.reviews.push(this.review);
         this.review = {};
       };
    });



    var gems = [
        {
            name: 'Dodecahedron',
            price: 2,
            description: "Fantastic Gem! at a wonderfull price",
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'images/dodecahedron-01-full.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "neilhoff@gmail.com"
                },
                {
                    stars: 1,
                    body: "booo!",
                    author: "someidiot@nolife.com"
                }
            ]
        },
        {
            name: 'Pentogonal Gem',
            price: 5.95,
            description: "Wonderful, Wonderful, Wonderful!!!!",
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'images/pentogonal-01-full.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "neilhoff@gmail.com"
                },
                {
                    stars: 1,
                    body: "booo!",
                    author: "someidiot@nolife.com"
                }
            ]
        }
    ]

})();
