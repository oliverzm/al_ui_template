/**
 * Provides a similar-movies element
 *
 * @module tmdb.directives.similarMovies
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
          'tmdb/partials/movie/YearController' ], 
    function( angular, YearController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: YearController,
                templateUrl: '/tmdb/partials/movie/year.html',
                restrict: 'E',
                scope: {
                    yearMovie: '=ngModel'
                }
            };
        };
    }
);