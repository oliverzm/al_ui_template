/**
 * CarouselController provides controller support for carousel bootstrap
 *
 * @module tmdb.partials.carousel.CarouselController
 *
 * @requires angular
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 * @returns instance of the CarouselController
 *
 *
 */

define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, config, TMDBAPIService ) {
        "use strict";

        var CarouselController = function($scope, TMDBAPIService ) {
            var config    = angular.module("config");
            $scope.view   = {
                images: config.apiImg
            };
        };

        CarouselController.$inject = [ '$scope', 'TMDBAPIService' ];

        return CarouselController;
    }
);