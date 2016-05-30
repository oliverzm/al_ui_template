/**
 * Provides a movie-rating element
 *
 * @module tmdb.directives.movieCalification
 *
 * @requires angular
 * @requires MovieRatingController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} MovieRatingController - An instance of MovieRatingController 
 *
 * @author Oliver Zuluaga Monsalve <oliverjzm@gmail.com>
 *
 *
 */

define( [ 'angular',
          'tmdb/partials/rating/MovieRatingController' ], 
    function( angular, MovieRatingController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: MovieRatingController,
                templateUrl: '/tmdb/partials/rating/rating.html',
                restrict: 'E',
                scope: {
                    detail: '=ngModel'
                }
            };
        };
    }
);