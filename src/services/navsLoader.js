(function() {
  app.factory("navsLoader", function() {
    var navs = [
      {
        href: "/about",
        icon: null,
        name: "About",
        order: 2
      },
      {
        href: "/portfolio",
        icon: null,
        name: "Portfolio",
        order: 1
      },
      {
        href: "/start",
        icon: "./../assets/icon-home.png",
        name: "Home",
        order: 0
      }
    ];

    var service = { getNavs };

    function getNavs() {
      return navs.sort((a, b) => a.order - b.order);
    }

    return service;
  });
})();
