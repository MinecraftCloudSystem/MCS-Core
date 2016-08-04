var app = angular.module('app', ['ngRoute', 'Services', 'ngCookies', 'ngFileUpload']);

app.run(function($rootScope, $route, Socket) {
    $rootScope.loggedIn = false;
    $rootScope.domContentLoaded = false;
    $rootScope.callout = "";

    $rootScope.setLoading = function(loading) {
        $rootScope.domContentLoaded = !loading;
    };

    $rootScope.sendCallout = function(type, title, message) {
        switch(type) {
            case "error":
                $rootScope.callout = "callout-danger";
                break;
            case "success":
                $rootScope.callout = "callout-success";
                break;
            case "warn":
                $rootScope.callout = "callout-warning";
                break;
            case "info":
                $rootScope.callout = "callout-info";
                break;
            default:
                $rootScope.callout = "";
        }
        $rootScope.calloutTitle = title;
        $rootScope.calloutMessage = message;
    };
    $rootScope.removeCallout = function() {
        $rootScope.sendCallout(undefined, undefined, undefined);
    }
});

angular.module('Services', []).factory('Socket', function($rootScope) {
    var socket = io.connect();

    return {
        on: function(eventName, callback){
            socket.once(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function(eventName, data, callback){
            if(typeof data === 'function') {
                callback = data;
                data = {};
            }
            socket.emit(eventName, data, function(){
                var args = arguments;
                $rootScope.$apply(function() {
                    if(callback) {
                        callback.apply(socket, args);
                    }
                });
            });
        }
    };
});