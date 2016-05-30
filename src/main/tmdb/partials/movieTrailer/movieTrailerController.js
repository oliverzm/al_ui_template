/**
 * It shows the trailer of a movie
 *
 * @module tmdb.partials.movie.movieTrailerController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires TMDBAPIService
 *
 * @author unknown
 *
 * @returns instance of the movieTrailerController
 *
 *
 */

define( [ 'angular',
        'ngRoute',
        'config/config',
        'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService, $sce ) {
        "use strict";

        var movieTrailerController = function($scope, TMDBAPIService, $routeParams, $sce ) {
            
            $scope.details = {};
            $scope.ysrc = undefined;        

            var api = TMDBAPIService.Movie();

            var getData = function(){
                api.movie.movie($scope.mov).then( function ( response ) {
                    $scope.details = response.data;                
                    $scope.ysrc = $sce.trustAsResourceUrl("http://www.youtube.com/embed/"+response.data.videos.results[0].key+"/?rel=0&autoplay=1");
                });
            };    
              
            $scope.$watch('mov',function(){                
                getData();
            });         
            
        };

        movieTrailerController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams', '$sce' ];

        return movieTrailerController;
    }
);