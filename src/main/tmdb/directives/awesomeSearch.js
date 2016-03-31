/**
 * Provides a search element
 *
 * @module tmdb.directives.awesomeSearch
 *
 * @requires angular
 * @requires SearchController
 *
 * @author John Gomez <jgomez@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2016
 *
 */

 define( [ 'angular', 
           'tmdb/partials/awesomeSearch/AwesomeSearchController' ], 
    function( angular, AwesomeSearchController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: AwesomeSearchController,
                templateUrl: '/tmdb/partials/awesomeSearch/awesomeSearch.html',
                restrict: 'E',
                scope: {
                    movieList: '=ngModel'
                }
            };
        };
    }
);