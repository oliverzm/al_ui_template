/**
* Test the AwesomeSearchController
*/
define([ 'angular',
         'config/config',
         'tmdb/partials/awesomeSearch/AwesomeSearchController'], 
    function( angular, config, AwesomeSearchController) {
        "use strict";
        describe("test suite for AwesomeSearchController", function () {
            var awesomeSearchController, scope, mockService, q;

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

                    mockService = {
                        Person: function () {
                            return {
                                person: {
                                    person: function () {
                                        return $q.when({data:readJSON('src/main/mocks/data/person/person-aniston.json')});
                                    }
                                }
                            };
                        },
                        Search: function () {
                            return {
                                search: {
                                    multi: function (data) {
                                        if (data === "aniston"){
                                            return $q.when({
                                                data:{
                                                    results:readJSON('src/main/mocks/data/movie/search-multi-person.json')
                                                }
                                            });
                                        } else {
                                            return $q.when({
                                                data:{
                                                    results:readJSON('src/main/mocks/data/movie/search-multi.json')
                                                }
                                            });
                                        }
                                    }
                                }
                            };
                        }
                    };

                    awesomeSearchController = $controller(AwesomeSearchController, {$scope:scope, 
                                                                  TMDBAPIService: mockService});
                }]);
            });

            /*
            * Test default initialization variables
            */
            it("should always searchPhrase start empty", function () {
                expect(scope.searchPhrase).toEqual("");
            });

            it("should always timeout to be greater than 250", function () {
                expect(awesomeSearchController.timeWatcher).toBeGreaterThan(250);
            });

            it("should search results not be empty after hits enter key", function () {
            	scope.$apply();
            	scope.searchPhrase = "a";
            	scope.$apply();
            	scope.searchPhrase = "ava";
            	scope.$apply();
            	scope.searchPhrase = "avatar";
            	scope.$apply();

            	//The user types the movie name and hits enter
            	
            	var mockEvent = {
            		which: 13
            	};
            	scope.performSearch(mockEvent);

            	scope.$apply();

                expect(scope.searchResults).toBeDefined();
            });

            it("should search results should bring person data", function () {
                scope.$apply();
                scope.searchPhrase = "aniston";
                scope.$apply();

                //The user types the movie name and hits enter
                var mockEvent = {
                    which: 13
                };

                scope.performSearch(mockEvent);

                scope.$apply();

                expect(scope.searchResults[0].name).toBe('Jennifer Aniston');
                expect(scope.searchResults[0].popularity).toBe(10.830772);
                expect(scope.searchResults[0].media_type).toBe('person');
                expect(scope.searchResults[0].foto).toBe('/4d4wvNyDuvN86DoneawbLOpr8gH.jpg');
                
            });

        });
    }
);