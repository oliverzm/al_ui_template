/**
 * TvRatingController provides controller support for
 *
 * @module tmdb.partials.movie.MovieCalificationController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires TMDBAPIService
 * @requires AppStateService
 *
 * @author Oliver Zuluaga Monsalve <oliverjzm@gmail.com>
 *
 * @returns instance of the MovieController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService',
          'tmdb/services/AppStateService'],
    function( angular, $routeParams, config, TMDBAPIService, AppStateService ) {
        "use strict";

        var TvRatingController = function($scope, $timeout, TMDBAPIService, $routeParams, AppStateService ) {

            var self = this;
            $scope.view   = {
                details: {},
                rating: {
                    value: 0,
                    cantQualify: false
                }
            };

            var api = TMDBAPIService.Television();

            /*
            * Search If there is an active session
            */
            self.getUserSession = function(){
                $scope.userSession = AppStateService.getUserSession();

                if($scope.userSession)
                {
                    $scope.view.rating.cantQualify = true;

                    api.tv.tvAccountStates($routeParams.id, $scope.userSession.sessionID).then( function ( response ) {
                        $scope.view.details.movieAccountStates = response.data;
                        $scope.view.rating.value = $scope.view.details.movieAccountStates.rated.value;
                        //console.log($scope.view.details.movieAccountStates);
                    });
                }
                else
                {
                    $scope.view.rating.cantQualify = false;
                }
            };           
            
            /*
            * Stores the rate
            */
            $scope.saveRating = function(){
                
                api.tv.tvRating($routeParams.id, $scope.userSession.sessionID, $scope.view.rating.value).then( function ( response ) {
                        $scope.view.details.movieRating = response.data;
                        //console.log($scope.view.details.movieRating);
                        window.alert(" Success! your rating has been saved ");
                    });

                /*
                * one second after search the account states about the tv show
                */
                $timeout( function() {
                    api.tv.tvAccountStates($routeParams.id, $scope.userSession.sessionID).then( function ( response ) {
                            $scope.view.details.movieAccountStates = response.data;
                            //console.log($scope.view.details.movieAccountStates);
                        });
                }, 1000 );
            };         

            $scope.$on( "user.authenticated", function( $event, userSession ) {
                self.getUserSession();  
            } );

            $scope.$on( "user.delete", function($event) {
                $scope.userSession = null;
                $scope.view.rating.cantQualify = false;
                $scope.view.details.movieAccountStates = null;
            } );

            $timeout( function() {
                self.getUserSession();                
            }, 1000 );
        };

        TvRatingController.$inject = [ '$scope', '$timeout', 'TMDBAPIService', '$routeParams', 'AppStateService' ];

        return TvRatingController;
    }
);