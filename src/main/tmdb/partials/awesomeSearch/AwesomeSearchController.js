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

        var AwesomeSearchController = function($scope, TMDBAPIService ) {

            var api = TMDBAPIService.Search();

            $scope.searchPhrase = "";

            $scope.performSearch = function(event) {
                if (event.which === 13) {


                    api.search.multi($scope.searchPhrase).then(function(data){
                        console.log(data);
                    });

                }



            }

        };

        AwesomeSearchController.$inject = [ '$scope', 'TMDBAPIService' ];

        return AwesomeSearchController;
    }
);