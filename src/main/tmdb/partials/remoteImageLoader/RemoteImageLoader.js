/**
 * RemoteImageLoader provides support for getting a remote image URL base path to the directives
 *
 * @module tmdb.partials.remoteImageLoader.RemoteImageLoader
 *
 * @requires angular
 * @requires config
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the RemoteImageLoader
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'config/config' ],
    function( angular, config ) {
        "use strict";

        var RemoteImageLoader = function( $scope ) {

            var config  = angular.module("config");
            $scope.view = {images: config.apiImg};
            
        };

        RemoteImageLoader.$inject = [ '$scope' ];

        return RemoteImageLoader;
    }
);