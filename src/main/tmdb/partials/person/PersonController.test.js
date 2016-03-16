/**
* the controller needs to be loaded explicitly with requireJS as the normal application only registers the
* controllers inside the route definitions, which are not evaluated during testing, so they are not known to angularJS
*/
define([ 'angular',
         'config/config',
         'tmdb/partials/person/PersonController' ], 
    function( angular, config, PersonController ) {
        "use strict";
        describe("the personcontroller", function () {
            var personcontroller, scope, mockService;

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
                    mockService = {
                        Person: function () {
                            return {
                                person: {
                                    person: function () {
                                        return {
                                            then: function () {
                                                return {};
                                            }
                                        };
                                    }
                                }
                            };
                        }
                    };
                    personcontroller = $controller(PersonController, {$scope: scope, 
                                                                  TMDBAPIService: mockService}
                                     );
                }]);
            });

            /*
            * Test default initialization variables
            */
            it("should have matching defaults", function () {
                expect(scope.view.details).toEqual({});
            });

            /*
            * Test base functionality
            */

        });
    }
);