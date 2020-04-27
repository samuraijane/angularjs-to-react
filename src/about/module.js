(function() {
  angular
    .module("aboutModule", ["ngRoute"])
    .controller("aboutCtrl", function($scope, stylesLoader) {
      $scope.about = stylesLoader.print();
    })
    .config(function($routeProvider) {
      $routeProvider.when("/about", {
        css: "./../src/about/style.css",
        templateUrl: "./../src/about/index.html"
      });
    });
})();
