/**
 * Provides a awesome-search-results element
 *
 * @module tmdb.directives.awesomeSearchResults
 *
 * @requires angular
 *
 * @param {object} angular - An instance of AngularJS 
 *
 * @author John Gomez <jgomez@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2016
 *
 */

define( [ 'angular',
          'tmdb/partials/awesomeSearch/AwesomeSearchResultsController' ], 
    function( angular, AwesomeSearchResultsController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: AwesomeSearchResultsController,
                templateUrl: '/tmdb/partials/awesomeSearch/awesomeSearchResults.html',
                restrict: 'E',
                scope: {
                    resultList: '=ngModel'
                }
            };
        };
    }
);