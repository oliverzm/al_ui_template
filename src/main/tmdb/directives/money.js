/**
 * Shows a dollar bill per 100 million
 *
 * @module tmdb.directives.money
 *
 * @requires angular
 * @requires MoneyController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} MoneyController - An instance of MoneyController 
 *
 * @author unknown
 *
 *
 */
define( [ 'angular', 'tmdb/partials/money/MoneyController'], 
    function(angular, MoneyController) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: MoneyController,
                templateUrl: '/tmdb/partials/money/money.html',
                restrict: 'E',
                scope: {
                    budget: '=',
                    revenue: '='
                }
            };
        };
    }
);