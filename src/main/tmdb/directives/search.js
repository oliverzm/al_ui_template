/**
 * Provides a search element
 *
 * @module tmdb.directives.search
 *
 * @requires angular
 * @requires SearchController
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

 define( [ 'angular', 
           'tmdb/partials/search/SearchController' ], 
    function( angular, SearchController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: SearchController,
                templateUrl: '/tmdb/partials/search/search.html',
                restrict: 'E',
                scope: {
                    movieList: '=ngModel'
                }
            };
        };
    }
);