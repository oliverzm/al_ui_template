/**
 * Provides a awesome search element
 *
 * @module tmdb.directives.awesomeSearch
 *
 * @requires angular
 * @requires AwesomeSearchController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} AwesomeSearchController - An instance of AwesomeSearchController 
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