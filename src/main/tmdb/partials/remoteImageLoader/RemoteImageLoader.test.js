/**
* the controller needs to be loaded explicitly with requireJS as the normal application only registers the
* controllers inside the route definitions, which are not evaluated during testing, so they are not known to angularJS
*/
define([ 'angular',
         'config/config',
         'tmdb/partials/remoteImageLoader/RemoteImageLoader' ], 
    function( angular, config, RemoteImageLoader ) {
        "use strict";
        describe("the remoteimageloader", function () {
            var remoteimageloader, scope, mockService;

            beforeEach(function () {
                /**
                * Load the required modules
                */
                module("config");
                module("ngRoute");

                /**
                * Injection
                */
                inject(["$rootScope", "$controller", function ($rootScope, $controller) {
                    //instantiate the controller with a newly created scope
                    scope       = $rootScope.$new();
                    remoteimageloader = $controller(RemoteImageLoader, {$scope: scope});
                }]);
            });

            /*
            * Test default initialization variables
            */
            it("should have matching defaults", function () {
                expect(scope.view.images).toBe('//image.tmdb.org/t/p/w500');
            });

            /*
            * Test base functionality
            */

        });
    }
);