(function() {
  angular
    .module("startModule", ["ngRoute"])
    .controller("startCtrl", function($scope, stylesLoader) {
      $scope.start = stylesLoader.print();
    })
    .config(function($routeProvider) {
      $routeProvider
        .when("/start", {
          css: "./../src/start/style.css",
          templateUrl: "./../src/start/index.html"
        })
        .when("/start/:cssType", {
          css: "./../src/start/style.css",
          templateUrl: "./../src/start/index.html"
        });
    });
})();
