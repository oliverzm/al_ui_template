/**
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