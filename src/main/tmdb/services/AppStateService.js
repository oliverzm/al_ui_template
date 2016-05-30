/**
 * Abstraction for managing user sessions
 *
 * @module tmdb.services.AppStateService
 *
 * @requires angular
 * @requires LocalStorageModule
 *
 * @author Kevin Nielsen <knielsen@alertlogic.com>
 * @author Oliver Zuluaga <oliverjzm@gmail.com>
 *
 * @returns AppStateService
 *
 */

define( [   'angular',        
            'LocalStorageModule' ],
        function( angular, LocalStorageModule ) 
        {
            "use strict";
            var AppStateService = function( $rootScope, $timeout, localStorageService ) {

                var self        = this;
                var userSession = null;

                /*
                 * Receives information from the session and stores it in LocalStorage
                 */
                $rootScope.$on( 'user.authenticated', function( $event, newSession ) {
                    userSession = newSession;
                    
                    var encodedSession = JSON.stringify( newSession );
                    localStorageService.set( "_session", encodedSession );
                } );

                /*
                 * Deletes the session of LocalStorage 
                 */
                $rootScope.$on( 'user.delete', function($event){
                    userSession = null;
                    localStorageService.remove( "_session" );
                });

                /**
                 * Service Initialization -- Runs only on application startup 
                 */
                $timeout( function() {

                    var existingSession = localStorageService.get( "_session" );

                    /*
                     * If the session exists generates an event stakeholders
                     */
                    if ( existingSession ) {
                        try {
                            var sessionData = JSON.parse( existingSession );
                            $rootScope.$broadcast( "user.authenticated", sessionData );
                        } catch( e ) {
                            console.error("Session is corrupt" );
                            localStorageService.remove( "_session" );
                        }
                    }
                }, 1000 );

                /*
                 * Get the actual user session
                 */
                self.getUserSession = function(){
                    return userSession;
                };

                self.userSessionExist = function(){
                    return userSession != null;
                };
            };

            AppStateService.$inject = [ '$rootScope', '$timeout', 'localStorageService' ];

            return AppStateService;

        } );
