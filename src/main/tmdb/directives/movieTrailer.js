define( [ 'angular',
        'tmdb/partials/movieTrailer/movieTrailerController' ],
    function( angular, movieTrailerController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: movieTrailerController,
                templateUrl: '/tmdb/partials/movieTrailer/movieTrailer.html',
                restrict: 'E',
                scope: {                    
                    mov: '=ngModel'
                }
            };
        };
    });
    