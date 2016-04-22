/**
 * MovieController provides controller support for fetching movies from tmdb
 *
 * @module tmdb.partials.movie.MovieController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the MovieController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define(['angular',
        'ngRoute',
        'config/config',
        'tmdb/services/TMDBAPIService'
    ],
    function(angular, $routeParams, config, TMDBAPIService) {
        "use strict";

        var MoneyController = function($scope, TMDBAPIService, $routeParams) {

            $scope.num_icons_budget = Math.floor($scope.budget / 100000000);
            $scope.num_icons_revenue = Math.floor($scope.revenue / 100000000);
            if ($scope.num_icons_budget === 0) {
                $scope.num_icons_budget = 1;
            }
            if ($scope.num_icons_revenue === 0) {
                $scope.num_icons_revenue = 1;
            }

            $scope.range = function(min, max, step) {
                step = step || 1;
                var input = [];
                for (var i = min; i <= max; i += step){ input.push(i);}
                return input;
            };
       
        };

        MoneyController.$inject = ['$scope', 'TMDBAPIService', '$routeParams'];
        return MoneyController;
    }
);