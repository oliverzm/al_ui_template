/**
 * PopularMoviesController provides info about more popular movies and more popular tv shows
 *
 * @module tmdb.partials.search.PopularMoviesController
 *
 * @requires angular
 * @requires config
 * @requires TMDBAPIService
 *
 * @author John Gomez <jgomez@alertlogic.com>
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 * @returns instance of the PopularMoviesController
 *
 * @copyright Alert Logic, Inc 2016
 *
 */

define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, config, TMDBAPIService ) {
        "use strict";

        var PopularMoviesController = function($scope, TMDBAPIService ) {
            var config    = angular.module("config");
            $scope.view   = {
                images: config.apiImg
            };

            $scope.info = {
                typeone: "movie", 
                typetwo: "tv"
            };
        };       

        PopularMoviesController.$inject = [ '$scope', 'TMDBAPIService' ];

        return PopularMoviesController;
    }
);