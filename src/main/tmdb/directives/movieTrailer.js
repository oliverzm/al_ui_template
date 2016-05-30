/**
 * 
 * It shows the trailer of a movie
 *
 * @module tmdb.directives.movieTrailer
 *
 * @requires angular
 * @requires movieTrailerController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} movieTrailerController - An instance of movieTrailerController 
 *
 * @author unknown
 *
 *
 */

define( [ 'angular',
        'tmdb/partials/movieTrailer/movieTrailerController' ],
    function( angular, movieTrailerController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: movieTrailerController,
                templateUrl: '/tmdb/partials/movieTrailer/movieTrailer.html',
                restrict: 'E',
                scope: {                    
                    mov: '=ngModel'
                }
            };
        };
    });
    