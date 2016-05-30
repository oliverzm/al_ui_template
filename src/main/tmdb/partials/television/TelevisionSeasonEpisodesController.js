/**
 * TelevisionSeasonEpisodesController provides controller support for fetching television series from tmdb
 *
 * @module tmdb.partials.movie.TelevisionSeasonEpisodesController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 * @returns instance of the TelevisionSeasonEpisodesController
 *
 *
 */

define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService ) {
        "use strict";

        var TelevisionSeasonEpisodesController = function($scope, TMDBAPIService, $routeParams ) {
            var config  = angular.module("config");

            $scope.view   = {
                details: {},
                images: config.apiImg,
                tv_id: $routeParams.id,
            };
            
            var api = TMDBAPIService.Television();
            api.tv.episode($routeParams.id, $routeParams.season, $routeParams.episode).then( function ( response ) {
                $scope.view.details = response.data;
                //console.log(response.data);
            });

        };

        TelevisionSeasonEpisodesController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return TelevisionSeasonEpisodesController;
    }
);