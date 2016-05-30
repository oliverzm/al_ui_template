/**
 * TelevisionController provides controller support for fetching television series from tmdb
 *
 * @module tmdb.partials.movie.TelevisionController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 * @returns instance of the TelevisionController
 *
 *
 */

define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService ) {
        "use strict";

        var TelevisionController = function($scope, TMDBAPIService, $routeParams ) {

            $scope.view   = {
                details: {},
            };
            
            var api = TMDBAPIService.Television();
            api.tv.tv($routeParams.id).then( function ( response ) {
                $scope.view.details = response.data;
                //console.log(response.data);
            });

        };

        TelevisionController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return TelevisionController;
    }
);