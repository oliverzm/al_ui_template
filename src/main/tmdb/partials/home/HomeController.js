/**
 * HomeController provides controller support for loading the main page with Search and Popular Movies
 *
 * @module tmdb.partials.home.HomeController
 *
 * @requires angular
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 * @returns instance of the HomeController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService',
          'LocalStorageModule'],
    function( angular, config, TMDBAPIService ) {
        "use strict";

        var HomeController = function($scope, $rootScope, TMDBAPIService , localStorage) {

            $scope.view   = {
                movies: [],
                tv:[],
            };

            var config  = angular.module("config");
            $scope.view = {urlImg: config.apiImg};

            var api = TMDBAPIService.Discover();
            api.discover.movies().then(function ( response ) {
                $scope.view.movies = response.data;
                //console.log(response.data);
            });

            api.discover.tv().then(function ( response ) {
                $scope.view.tv = response.data;
                //console.log(response.data);
            });
            
        };

        HomeController.$inject = [ '$scope', '$rootScope', 'TMDBAPIService', 'localStorageService' ];

        return HomeController;
    }
);