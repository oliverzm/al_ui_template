var process         =   require("process");
var util            =   require("util");
var childProcess    =   require("child_process");
var spawn           =   require("child_process").spawn;
var exec            =   require("child_process").exec;
var fs              =   require("fs");

var include = [];
var exclude = [];

for ( var i = 2; i < process.argv.length; i++ ) {
    switch( process.argv[i] ) {
        case "*" :
        case "all" :
            include = [];
            exclude = [];
            break;
        case "-i" :
        case "include" :
            i++;
            if ( i >= process.argv.length ) {
                console.log( "Invalid arguments: -i must be followed by a regular expression for inclusion" );
                process.exit(1);
            }
            include.push( process.argv[i] );
            break;
        case "-x" :
        case "exclude" :
            i++;
            if ( i >= process.argv.length ) {
                console.log( "Invalid arguments: --include must be followed by a regular expression" );
                process.exit(1);
            }
            exclude.push( process.argv[i] );
            break;
        default :
            console.log("Unrecognized argument: not sure what to do with '" + process.argv[i] + "'");
            process.exit(1);
            break;
    }
}

var configurationFile = fs.readFileSync( "src/test/unit-test.filters.js", "utf8", function() {
        console.log("Unexpected behavior: could not read src/test/unit-test.filters.js!" );
        process.exit(1);
    } );

var includeListMatch = /include:\s+\[.*\]\,/i;
var excludeListMatch = /exclude:\s+\[.*\]\,/i;

if ( ! includeListMatch.test( configurationFile ) || ! excludeListMatch.test( configurationFile ) ) {
    console.log("Unexpected behavior: src/test/unit-test.filters.js is missing a valid include or exclude block" );
    process.exit(1);
}

configurationFile = configurationFile.replace( includeListMatch, "include: " + JSON.stringify( include ) + "," );
configurationFile = configurationFile.replace( excludeListMatch, "exclude: " + JSON.stringify( exclude ) + "," );

fs.writeFileSync( "src/test/unit-test.filters.js", configurationFile );

var child = childProcess.spawn( "npm",
                                [ 'run', 'karma-internal', '--loglevel', 'warn', "--no-color" ],
                                {} );

var failurePattern = new RegExp( "FAILED$", "i" );
var npmBlather = new RegExp( "^NPM err", "i" );
var progressPattern = new RegExp( "executed ([0-9]+) of ([0-9]+)", "i" );
var stackTracePattern = new RegExp( "^[\s]+at.*", "i" );
var consoleOutputPattern = new RegExp( "LOG.*'(.*)'", "i" );
var logFileName = "./karma.log";

fs.writeFile( logFileName, "==== Karma Test Result Log ========\r\n" );

var cleanLine = function( line ) {
    return line.trim();
};

var interpretOutput = function( text, error ) {
    var lines = text.split("\n" );
    var log = false;
    for ( var i = 0; i < lines.length; i++ ) {
        var line = cleanLine( lines[i] );
        if ( failurePattern.test( line ) ) {
            log = true;
            line = line.replace( /[\x00-\x1F\x7F-\x9F]/g, "" );
            process.stdout.write( "\r\033[0;31mTEST FAILURE\033[0m: " + line + "\n" );
            process.stdout.write( "    Why? " + cleanLine(lines[i+1]) + "\n" );
            process.stdout.write( "    Where? " + cleanLine(lines[i+2]) + "\n" );
        } else if ( npmBlather.test( line ) ) {
            //  ignore interior NPM error output; it is almost entirely worthless junk.
        } else if ( progressPattern.test( line ) ) {
            var progress = line.match( progressPattern );
            var percent = Math.floor( progress[1] / progress[2] * 100.0 );
            process.stdout.write("\rTesting " + progress[1] + "/" + progress[2] + " (" + percent + "%)..." );
        } else if ( consoleOutputPattern.test( line ) ) {
            var log = line.match( consoleOutputPattern );
            process.stdout.write( "\r\033[0;36mconsole.log\033[0m: " + log[1] + "\n" );
        } else if ( stackTracePattern.test( line ) ) {
            log = true;
        } else {
            log = true;
            //  ignore other output
        }

        if ( log ) {
            fs.appendFile( logFileName, lines[i] + "\n" );
        }
    }
};

child.stdout.on( "data", function( data ) {
    interpretOutput( data.toString( "utf8" ), false );
} );
child.stderr.on( "data", function( data ) {
    interpretOutput( data.toString( "utf8" ), true );
} );

child.on("exit", function( code ) {
    process.stdout.write("\r\n" );
    if ( code == 0 ) {
        process.stdout.write("Result: \033[1;32mSUCCESS\033[0m\r\n" );
    } else {
        process.stdout.write("Result: \033[0;31mFAILURE\033[0m\r\n" );
        process.stdout.write("Full stack traces and error information are available in karma.log." );
    }
    process.exit(code);
} );
