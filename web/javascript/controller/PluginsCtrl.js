app.controller('PluginsCtrl', ['$rootScope', '$scope', 'Socket', function($rootScope, $scope, Socket) {

    $rootScope.setLoading(true);

    Socket.emit("page-req", { page: "plugins" });

    Socket.on("page-res", function(data) {
        if(data.state == "error") {
            $rootScope.sendCallout(data.state, "An error occurred", data.message);
            $rootScope.setLoading(false);
            return;
        }

        if(data.state == "success") {
            $scope.title = data.content.title;
            $rootScope.setLoading(false);
            return;
        }

    });

}]);