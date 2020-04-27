(function() {
  app.factory("stylesLoader", function() {
    var service = { print };

    function print() {
      return "This is the stylesLoader service";
    }

    return service;
  });
})();
