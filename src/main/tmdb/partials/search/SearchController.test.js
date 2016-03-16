/**
* the controller needs to be loaded explicitly with requireJS as the normal application only registers the
* controllers inside the route definitions, which are not evaluated during testing, so they are not known to angularJS
*/
define([ 'angular',
         'config/config',
         'tmdb/partials/search/SearchController' ], 
    function( angular, config, SearchController ) {
        "use strict";
        describe("the searchcontroller", function () {
            var searchcontroller, scope, mockService;

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
                        Search: function () {
                            return {
                                search: {
                                    multi: function () {
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
                    searchcontroller = $controller(SearchController, {$scope: scope, 
                                                                  TMDBAPIService: mockService}
                                     );
                }]);
            });

            /*
            * Test default initialization variables
            */
            it("should have matching defaults", function () {
                expect(scope.view.searchPhrase).toBe("");
                expect(scope.view.resultList).toEqual([]);
            });

            /*
            * Test base functionality
            */

        });
    }
);