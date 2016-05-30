/**
 * Provides a app-header element
 *
 * @module tmdb.directives.appHeader
 *
 * @requires angular
 * @requires AppHeaderController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} AppHeaderController - An instance of AppHeaderController 
 *
 * @author Kevin Nielsen <knielsen@alertlogic.com>
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 * @copyright Alert Logic, Inc 2016
 *
 */

define( [ 'angular',
          'tmdb/partials/appHeader/AppHeaderController' ], 
    function( angular, AppHeaderController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: AppHeaderController,
                templateUrl: '/tmdb/partials/appHeader/appHeader.html',
                restrict: 'E',
                scope: true
            };
        };
    }
);
