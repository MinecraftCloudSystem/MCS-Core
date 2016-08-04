var app = angular.module('app', ['ngRoute', 'Services', 'ngCookies', 'ngFileUpload']);

app.run(function($rootScope, $route, Socket) {

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