/**
 * Provides a television-detail element
 *
 * @module tmdb.directives.personDetails
 *
 * @requires angular
 * @requires RemoteImageLoader
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} RemoteImageLoader - An instance of RemoteImageLoader 
 *
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 *
 */

define( [ 'angular',
          'tmdb/partials/remoteImageLoader/RemoteImageLoader' ], 
    function( angular, RemoteImageLoader ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: RemoteImageLoader,
                templateUrl: '/tmdb/partials/television/detail.html',
                restrict: 'E',
                scope: {
                    detail: '=ngModel'
                }
            };
        };
    }
);