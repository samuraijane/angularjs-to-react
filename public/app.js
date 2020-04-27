var app = angular.module("app", [
  "ngRoute",
  "aboutModule",
  "portfolioModule",
  "startModule"
]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      redirectTo: "/start"
    })
    .otherwise({
      redirectTo: "/page-not-found",
      templateUrl: "./../src/page404/index.html"
    });
});

app.directive("appNavigation", function() {
  return {
    restrict: "E",
    templateUrl: "./../src/navigation/index.html"
  };
});

app.controller("mainCtrl", function($scope, $route) {
  const vm = this;
  $scope.$watch(
    function() {
      return $route.current && $route.current.css ? $route.current.css : "";
    },
    function(value) {
      vm.scopedStyle = value;
    }
  );
});

app.controller("navigationCtrl", function($location, navsLoader) {
  const vm = this;
  vm.navs = navsLoader.getNavs();
  vm.loadPage = page => $location.url(page);
});
