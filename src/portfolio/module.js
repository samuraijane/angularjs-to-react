(function() {
  angular
    .module("portfolioModule", ["ngRoute"])
    .controller("portfolioCtrl", function($scope, stylesLoader) {
      $scope.portfolio = stylesLoader.print();
    })
    .config(function($routeProvider) {
      $routeProvider.when("/portfolio", {
        css: "./../src/portfolio/style.css",
        templateUrl: "./../src/portfolio/index.html"
      });
    });
})();
