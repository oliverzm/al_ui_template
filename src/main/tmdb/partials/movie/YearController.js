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
 * @author Oliver Zuluaga <bskidmore@alertlogic.com>
 *
 * @returns instance of the YearController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, config, TMDBAPIService ) {
        "use strict";

        var YearController = function($scope, TMDBAPIService) {

            //console.log($scope.yearMovie);

            var yearMovieArray = $scope.yearMovie.split("-");
            $scope.yearMovie = parseInt(yearMovieArray[0]);
            $scope.yearMovieArray = [];

            var iterator = 0;
            for (var i = ($scope.yearMovie-4); i <= ($scope.yearMovie+4); i++) {
                $scope.yearMovieArray[iterator] = i;
                iterator++;
            }
        };

        YearController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return YearController;
    }
);