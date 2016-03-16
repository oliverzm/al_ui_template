/**
 * SearchController provides controller support for inline searching
 *
 * @module tmdb.partials.search.SearchController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the SearchController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService ) {
        "use strict";

        var SearchController = function($scope, TMDBAPIService, $routeParams ) {

            var config    = angular.module("config");
            $scope.view   = {
                searchPhrase: "",
                resultList: [],
                images: config.apiImg
            };

            var api = TMDBAPIService.Search();

            var self = this;

            $scope.search = function () {
                self.applyQuery();
            };

            self.applyQuery = function() {
                if ( $scope.view.searchPhrase.length >= 2 ) {
                    api.search.multi($scope.view.searchPhrase).then( function ( response ) {
                        $scope.view.resultlist = response.data.results;
                    });
                } else {
                    $scope.view.resultlist = [];
                }
            };

            $scope.$on( '$routeChangeSuccess', function() {
                $scope.view.searchPhrase = "";
                $scope.view.resultlist = [];
            });

        };

        SearchController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return SearchController;
    }
);