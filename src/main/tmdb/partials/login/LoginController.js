/**
 * LoginController provides controller support for 
 *
 * @module tmdb.partials.person.LoginController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Kevin Nielsen <knielsen@alertlogic.com>
 *
 * @returns instance of the LoginController
 *
 * @copyright Alert Logic, Inc 2016
 *
 */

define( [ 'angular',
          'config/config'],
    function( angular, config ) {
        "use strict";

        var LoginController = function($rootScope, $scope, AppStateService, TMDBAPIService) {

            var self = this;

            $scope.view = {
                username: "",
                password: ""
            };

            self.onAuthenticated = function( userSession ) {
                $rootScope.$broadcast( 'user.authenticated', userSession );                
                window.alert( "We just authenticated " + userSession.fullName + "!" ); 
            };

            self.onAuthenticationFailure = function( reason ) {
                /*  TODO: handle errors */
                window.alert( " Please check your username and password and try again " ); 
            };

            $scope.authenticate = function($event) {
                TMDBAPIService.authenticate( $scope.view.username, $scope.view.password ).then( self.onAuthenticated, self.onAuthenticationFailure );
            };
        };

        LoginController.$inject = [ '$rootScope', '$scope', 'AppStateService', 'TMDBAPIService'];

        return LoginController;
    }
);
