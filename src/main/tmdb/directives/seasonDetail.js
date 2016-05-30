/**
 * Provides a season-detail element
 *
 * @module tmdb.directives.seasonDetail
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
                templateUrl: '/tmdb/partials/television/detailSeason.html',
                restrict: 'E',
                scope: {
                    detail: '=ngModel'
                }
            };
        };
    }
);