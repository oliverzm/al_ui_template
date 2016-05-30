/**
 * AppHeaderController provides controller support for 
 *
 * @module tmdb.partials.person.AppHeaderController
 *
 * @requires angular
 * @requires ngRoute
 * @requires config
 * @requires AppStateService
 *
 * @author Kevin Nielsen <knielsen@alertlogic.com>
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 * @returns instance of the AppHeaderController
 *
 * @copyright Alert Logic, Inc 2016
 *
 */

define( [ 'angular',
          'config/config'],
    function( angular, config ) {
        "use strict";

        var AppHeaderController = function($rootScope, $scope, AppStateService ) {

            $scope.view = {
                authenticated: AppStateService.userSessionExist(),
                session: null
            };

            if($scope.view.authenticated){
                $scope.view.session = AppStateService.getUserSession();
            }

            $scope.finishSession = function(){

                window.alert("Thank you for visit");

                $scope.view.authenticated = false;
                $scope.view.session = null;
                $rootScope.$broadcast( "user.delete");
            };

            $scope.$on( "user.authenticated", function( $event, userSession ) {
                $scope.view.authenticated = true;
                $scope.view.session = userSession;
                console.log("hi");
            } );


        };

        AppHeaderController.$inject = [ '$rootScope', '$scope', 'AppStateService' ];

        return AppHeaderController;
    }
);
