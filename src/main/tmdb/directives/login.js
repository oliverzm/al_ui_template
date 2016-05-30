/**
 * Provides a login widget for the header
 *
 * @module tmdb.directives.login
 *
 * @requires angular
 * @requires LoginController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} LoginController - An instance of LoginController 
 *
 * @author Ginger Git <knielsen@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2016
 *
 */

define( [ 'angular',
          'tmdb/partials/login/LoginController' ], 
    function( angular, LoginController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: LoginController,
                templateUrl: '/tmdb/partials/login/login.html',
                restrict: 'E',
                scope: true
            };
        };
    }
);
