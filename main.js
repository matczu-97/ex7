let app = angular.module('MyApp', []);
app.controller('PhotoController', function() {
    this.photos = Array.from({length: 20}, (_, index) => ({src: `https://picsum.photos/200/300?random=${index + 1}`, big: false}));

    this.photo = null;

    this.selected = function(photo) {
        
        this.photo = photo;
    };
});
