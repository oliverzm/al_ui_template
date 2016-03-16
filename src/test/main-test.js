require(
    [ '/base/src/test/unit-test.filters.js' ],
    function( unitTestFilters ) {
        "use strict";

        var allTestFiles = [];
        var TEST_REGEXP = /\.test\.js$/;

        var includeTests = [];
        var excludeTests = [];

        for ( var i = 0; i < unitTestFilters.include.length; i++ ) {
            includeTests.push( new RegExp( unitTestFilters.include[i], "i" ) );
        }

        for ( var i = 0; i < unitTestFilters.exclude.length; i++ ) {
            excludeTests.push( new RegExp( unitTestFilters.exclude[i], "i" ) );
        }

        allTestFiles.push("app");
        allTestFiles.push("ngAnimate");
        allTestFiles.push("ui.bootstrap");
        allTestFiles.push("LocalStorageModule");
        allTestFiles.push("ui.select");
        allTestFiles.push("angular-mocks");
        allTestFiles.push("ngResource");
        allTestFiles.push("ngRoute");
        allTestFiles.push("ngSanitize");
        allTestFiles.push("gettext");

        var shouldIncludeTest = function( candidateFile ) {
            if ( excludeTests.length + includeTests.length === 0 ) {
                /*  No include/exclude rules: everything included by default. */
                return true;
            }

            if ( excludeTests.length > 0 && includeTests.length === 0 ) {
                /*  Subtractive mode: include all files by default, filtering out those that are explicitly excluded */
                return excludeTests.reduce( function( transient, testrx ) {
                        return transient && ! testrx.test( candidateFile );
                    }, true );
            }

            if ( excludeTests.length === 0 && includeTests.length > 0 ) {
                /*  Additive mode: exclude by default, adding only those files explicitly included */
                return includeTests.reduce( function( transient, testrx ) {
                        return transient || testrx.test( candidateFile );
                    }, false );
            }

            /*  Mixed mode -- exclude by default, include in additive mode, and then apply a secondary exclusion. */
            return includeTests.reduce( function( transient, testrx ) {
                    return transient || testrx.test( candidateFile );
                }, false ) && ! excludeTests.reduce( function( transient, testrx ) {
                    return transient && ! testrx.test( candidateFile );
                }, true );
        };

        Object.keys(window.__karma__.files).forEach(function(file) {
            if ( TEST_REGEXP.test(file) && shouldIncludeTest( file ) ) {
                allTestFiles.push(file);
            }
        });

        require({
            // "/base" is the URL from where karma is serving project files
            baseUrl:'/base/src/main',
            paths:{
                'angular': '/base/src/main/vendor/angular/angular',
                'ngAnimate': '/base/src/main/vendor/angular-animate/angular-animate.min',
                'ui.bootstrap': '/base/src/main/vendor/angular-bootstrap/ui-bootstrap.min',
                'ui.select': '/base/src/main/vendor/angular-ui-select/dist/select',
                'LocalStorageModule': '/base/src/main/vendor/angular-local-storage/dist/angular-local-storage.min',
                'gettext': '/base/src/main/vendor/angular-gettext/dist/angular-gettext.min',
                'angular-mocks': '/base/src/main/vendor/angular-mocks/angular-mocks',
                'ngResource': '/base/src/main/vendor/angular-resource/angular-resource.min',
                'ngRoute': '/base/src/main/vendor/angular-route/angular-route.min',
                'ngSanitize': '/base/src/main/vendor/angular-sanitize/angular-sanitize.min',
                'angular-ui-utils': '/base/src/main/vendor/angular-ui-utils/ui-utils.min',
                'translations': '/base/src/main/translations'
            },
            shim:{
                'angular': { deps: [], exports: 'angular' },
                'ngAnimate': {deps: ['angular']},
                'ui.bootstrap': {deps: ['angular']},
                'LocalStorageModule': {deps: ['angular']},
                'ui.select': {deps: ['angular']},
                'angular-mocks': {deps: ['angular']},
                'ngResource': {deps: ['angular']},
                'ngRoute': {deps: ['angular']},
                'ngSanitize': {deps: ['angular']},
                'angular-ui-utils': {deps: ['angular']},
                'gettext': {deps: ['angular']}
            }
        }, allTestFiles, function () {
            console.log("Starting Karma test suite!" );
            window.__karma = true;
            window.__karma__.start();
        }, function (err) {
            var failedModules = err.requireModules;

            console.log("Karma test failed with an error: ", err );

            if (failedModules && failedModules[0]) {
                throw new Error("Module couldn't be loaded: " + failedModules);
            } else {
                throw new Error("Unkown error:" + err);
            }
        });
    }
);
