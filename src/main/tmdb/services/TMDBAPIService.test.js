define( [ 'tmdb/services/TMDBAPIService' ], 
  function( TMDBAPIService ) {
    "use strict";
    describe("the tmdbapiservice", function () {
      var tmdbapiservice;

      beforeEach(function () {
        /**
        * Load the required modules
        */
        module("ngRoute");
        module("ozone_core");

        /**
        * Injection
        */
        inject(["TMDBAPIService", function (_tmdbapiservice) {
          tmdbapiservice = _tmdbapiservice;
        }]);
      });
      
    });
  }
);