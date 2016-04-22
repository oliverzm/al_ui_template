define( [ 'angular',
        'ngRoute',
        'config/config',
        'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService, $sce ) {
        "use strict";

        var movieTrailerController = function($scope, TMDBAPIService, $routeParams, $sce ) {
            
            $scope.details = {};
            $scope.ysrc = $sce.trustAsResourceUrl("http://www.youtube.com/embed/dQw4w9WgXcQ");
            

            var api = TMDBAPIService.Movie();
            
            api.movie.movie($scope.mov).then( function ( response ) {
                $scope.details = response.data;                
                $scope.ysrc = $sce.trustAsResourceUrl("http://www.youtube.com/embed/"+response.data.videos.results[0].key);
            });
            
            

        };

        movieTrailerController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams', '$sce' ];

        return movieTrailerController;
    }
);