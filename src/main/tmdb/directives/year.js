/**
 * It provides a timeline four years before and after the release of the movie
 *
 * @module tmdb.directives.year
 *
 * @requires angular
 * @requires YearController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} YearController - An instance of YearController 
 *
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
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