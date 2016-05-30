/**
 * TelevisionSeasonController provides controller support for fetching television series from tmdb
 *
 * @module tmdb.partials.movie.TelevisionSeasonController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 * @returns instance of the TelevisionSeasonController
 *
 *
 */

define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService ) {
        "use strict";

        var TelevisionSeasonController = function($scope, TMDBAPIService, $routeParams ) {

            $scope.view   = {
                details: {},
                tv_id: $routeParams.id,
            };
            
            var api = TMDBAPIService.Television();
            api.tv.season($routeParams.id, $routeParams.season).then( function ( response ) {
                $scope.view.details = response.data;
                //console.log(response.data);
            });

        };

        TelevisionSeasonController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return TelevisionSeasonController;
    }
);