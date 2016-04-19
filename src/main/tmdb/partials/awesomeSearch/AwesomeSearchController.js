/**
 * AwesomeSearchController provides controller support for inline searching
 *
 * @module tmdb.partials.search.AwesomeSearchController
 *
 * @requires angular
 * @requires config
 * @requires TMDBAPIService
 *
 * @author John Gomez <jgomez@alertlogic.com>
 *
 * @returns instance of the AwesomeSearchController
 *
 * @copyright Alert Logic, Inc 2016
 *
 */

define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, config, TMDBAPIService ) {
        "use strict";

        var AwesomeSearchController = function($scope, TMDBAPIService, $timeout ) {
            //Reference variables
            var self = this;
            var apiSearch = TMDBAPIService.Search();
            var apiPerson = TMDBAPIService.Person();
            var searchPromise;
            self.timeWatcher = 500;

            $scope.searchPhrase = "";

            $scope.$watch('searchPhrase',function(newValue,oldValue){
                console.log("newValue="+newValue+",oldValue="+oldValue);
            
                $timeout.cancel(searchPromise);

                searchPromise = $timeout(function(){
                    searchPromise = undefined;
                    self.search();
                },self.timeWatcher);
            });

            $scope.performSearch = function(event) {
                if (event.which === 13) {
                    self.search();
                }
            };

            /**
            * Call the API with the search phrase
            */
            self.search = function(){
                if ($scope.searchPhrase) {
                    if ($scope.searchPhrase.length >= 3) {
       
                        apiSearch.search.multi($scope.searchPhrase).then(function(response){

                            $scope.searchResults = response.data.results;

                            $scope.searchResults.forEach(function(item){
                                if (item.media_type === "person") {
                                    // Get images for persons 
                                    apiPerson.person.person(item.id).then( function(r) {
                                        item.foto = r.data.profile_path;
                                    });
                                }
                                else {
                                    item.foto = item.poster_path;
                                }
                            });

                        });
                    }
                }
            };

        };

        AwesomeSearchController.$inject = [ '$scope', 'TMDBAPIService', '$timeout' ];

        return AwesomeSearchController;
    }
);