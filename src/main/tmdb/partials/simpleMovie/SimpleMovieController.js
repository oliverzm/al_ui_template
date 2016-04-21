/**
 * MovieController provides controller support for fetching movies from tmdb
 *
 * @module tmdb.partials.movie.MovieController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the MovieController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService ) {
        "use strict";

        var SimpleMovieController = function($scope, TMDBAPIService, $routeParams ) {

            $scope.prueba = {name: $routeParams.name, id:$routeParams.id};

            console.log($routeParams);

        };

        SimpleMovieController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return SimpleMovieController;
    }
);