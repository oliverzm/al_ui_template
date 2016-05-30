/**
 * Provides a popular-movies element
 *
 * @module tmdb.directives.popularMovies
 *
 * @requires angular
 * @requires RemoteImageLoader
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} RemoteImageLoader - An instance of RemoteImageLoader 
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'tmdb/partials/popularMovies/PopularMoviesController' ], 
    function( angular, PopularMoviesController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: PopularMoviesController,
                templateUrl: '/tmdb/partials/popularMovies/popularMovies.html',
                restrict: 'E',
                scope: {
                    listResults: '=ngModel'
                }
            };
        };
    }
);