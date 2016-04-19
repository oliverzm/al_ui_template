/**
* the controller needs to be loaded explicitly with requireJS as the normal application only registers the
* controllers inside the route definitions, which are not evaluated during testing, so they are not known to angularJS
*/
define([ 'angular',
         'config/config',
         'tmdb/partials/movie/MovieController'], 
    function( angular, config, MovieController ) {
        "use strict";
        describe("the moviecontroller", function () {
            var moviecontroller, scope, mockService, tmdbAPIService;

            beforeEach(function () {
                /**
                * Load the required modules
                */
                module("config");
                module("ngRoute");

                /**
                * Injection
                */
                inject(["$rootScope", "$controller", "$q", function ($rootScope, $controller, $q) {
                    //instantiate the controller with a newly created scope
                    scope       = $rootScope.$new();
                    
                    var mockData = readJSON('src/main/mocks/data/movie/search-multi.json');

                    mockService = {
                        Movie: function () {
                            return {
                                movie: {
                                    movie: function () {
                                        return $q.when({data:mockData});
                                    }
                                }
                            };
                        }
                    };

                    moviecontroller = $controller(MovieController, {$scope: scope, 
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

            it("should have query 20 movie details", function () {
                scope.$apply();
                expect(scope.view.details.length).toEqual(20);
            });

        });
    }
);