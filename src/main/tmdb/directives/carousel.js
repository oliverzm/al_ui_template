/**
 * Provides a carousel of images using bootstrap
 *
 * @module tmdb.directives.carousel
 *
 * @requires angular
 * @requires CarouselController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} CarouselController - An instance of CarouselController 
 *
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 *
 */

define( [ 'angular',
          'tmdb/partials/carousel/CarouselController' ], 
    function( angular, CarouselController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: CarouselController,
                templateUrl: '/tmdb/partials/carousel/carousel.html',
                restrict: 'E',
                scope: {
                    listResults: '=ngModel',
                    name: '=name'
                }
            };
        };
    }
);