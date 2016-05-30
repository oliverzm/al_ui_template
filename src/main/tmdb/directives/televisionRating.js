/**
 * Provides a television-rating element
 *
 * @module tmdb.directives.televisionRating
 *
 * @requires angular
 * @requires TvRatingController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} TvRatingController - An instance of TvRatingController 
 *
 * @author Oliver Zuluaga Monsalve <oliverjzm@gmail.com>
 *
 *
 */

define( [ 'angular',
          'tmdb/partials/rating/TvRatingController' ], 
    function( angular, TvRatingController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: TvRatingController,
                templateUrl: '/tmdb/partials/rating/rating.html',
                restrict: 'E',
                scope: {
                    detail: '=ngModel'
                }
            };
        };
    }
);